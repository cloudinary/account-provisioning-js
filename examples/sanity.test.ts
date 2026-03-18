/**
 * Comprehensive sanity test for @cloudinary/account-provisioning SDK.
 *
 * Tests all SDK resources: ProductEnvironments, Users, UserGroups, AccessKeys,
 * BillingUsage, Roles, Principals, CustomPolicies, EffectivePolicies,
 * SystemPolicies, and Public.
 *
 * Destructive operations (create/update/delete) only target items created
 * within this test run, identified by a unique prefix.
 *
 * Prerequisites:
 *   - CLOUDINARY_ACCOUNT_URL or individual env vars set
 *   - Run from the project root: npx tsx examples/sanity.test.ts
 */

import { CldProvisioning } from "@cloudinary/account-provisioning";

const sdk = new CldProvisioning();
const RUN_ID = `sdk-test-${Date.now()}`;

let passed = 0;
let failed = 0;
let skipped = 0;
const failures: string[] = [];

const cleanup: Array<{ label: string; fn: () => Promise<unknown> }> = [];

function log(msg: string) {
  console.log(msg);
}

async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    passed++;
    log(`  ✓ ${name}`);
  } catch (err: any) {
    failed++;
    const msg = err?.message || err?.toString() || "Unknown error";
    failures.push(`${name}: ${msg}`);
    log(`  ✗ ${name} — ${msg}`);
  }
}

function skip(name: string, reason: string) {
  skipped++;
  log(`  ○ ${name} — SKIPPED (${reason})`);
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

// ---------------------------------------------------------------------------
// Product Environments
// ---------------------------------------------------------------------------
async function testProductEnvironments() {
  log("\n── Product Environments ──");
  let createdId: string | undefined;

  await test("list product environments", async () => {
    const res = await sdk.productEnvironments.list({});
    assert(Array.isArray(res.subAccounts), "subAccounts should be an array");
    assert(res.subAccounts!.length > 0, "should have at least one product environment");
  });

  await test("list with enabled filter", async () => {
    const res = await sdk.productEnvironments.list({ enabled: true });
    assert(Array.isArray(res.subAccounts), "subAccounts should be an array");
    for (const env of res.subAccounts ?? []) {
      assert(env.enabled === true, `environment ${env.cloudName} should be enabled`);
    }
  });

  await test("create product environment", async () => {
    const name = `${RUN_ID}-env`;
    const res = await sdk.productEnvironments.create({ name });
    assert(!!res.id, "created env should have an id");
    assert(res.name === name, `name should be "${name}"`);
    createdId = res.id!;
    cleanup.push({
      label: `product environment ${createdId}`,
      fn: () => sdk.productEnvironments.delete({ subAccountId: createdId! }),
    });
  });

  await test("get product environment", async () => {
    assert(!!createdId, "need a created env");
    const res = await sdk.productEnvironments.get({ subAccountId: createdId! });
    assert(res.id === createdId, "should return the correct environment");
  });

  await test("update product environment", async () => {
    assert(!!createdId, "need a created env");
    const newName = `${RUN_ID}-env-updated`;
    const res = await sdk.productEnvironments.update({
      subAccountId: createdId!,
      productEnvironmentUpdateRequest: { name: newName },
    });
    assert(res.name === newName, `name should be "${newName}"`);
  });

  await test("list with prefix filter", async () => {
    const res = await sdk.productEnvironments.list({ prefix: RUN_ID });
    assert(Array.isArray(res.subAccounts), "subAccounts should be an array");
    assert(
      res.subAccounts!.some((e) => e.id === createdId),
      "should find the created environment by prefix",
    );
  });
}

// ---------------------------------------------------------------------------
// Users (uses existing users since account may be at max capacity)
// ---------------------------------------------------------------------------
async function testUsers() {
  log("\n── Users ──");
  let existingUserId: string | undefined;
  let existingUserName: string | undefined;
  let createdUserId: string | undefined;

  await test("list users", async () => {
    const res = await sdk.users.list({});
    assert(Array.isArray(res.users), "users should be an array");
    assert(res.users!.length > 0, "should have at least one user");
    existingUserId = res.users![0]!.id!;
    existingUserName = res.users![0]!.name!;
  });

  await test("get user", async () => {
    assert(!!existingUserId, "need a user id");
    const res = await sdk.users.get({ userId: existingUserId! });
    assert(res.id === existingUserId, "should return the correct user");
    assert(!!res.email, "user should have an email");
  });

  await test("get user groups for user", async () => {
    assert(!!existingUserId, "need a user id");
    const res = await sdk.users.getGroups({ userId: existingUserId! });
    assert(Array.isArray(res.groups), "groups should be an array");
  });

  await test("list user sub-accounts", async () => {
    assert(!!existingUserId, "need a user id");
    const res = await sdk.users.listSubAccounts({ userId: existingUserId! });
    assert(Array.isArray(res.subAccounts), "subAccounts should be an array");
  });

  // Create/update/delete user — may fail if at max capacity
  const testEmail = `${RUN_ID.replace(/[^a-z0-9]/g, "")}@test.cloudinary.com`;
  let canCreateUser = true;

  try {
    await test("create user", async () => {
      const res = await sdk.users.create({
        name: `${RUN_ID}-user`,
        email: testEmail,
        role: "admin",
        enabled: true,
      });
      assert(!!res.id, "created user should have an id");
      assert(res.email === testEmail, "email should match");
      createdUserId = res.id!;
      cleanup.push({
        label: `user ${createdUserId}`,
        fn: () => sdk.users.delete({ userId: createdUserId! }),
      });
    });
  } catch {
    // handled inside test()
  }
  if (!createdUserId) {
    canCreateUser = false;
    // Reclassify as skip if it was an account limit
    if (failures.length > 0 && failures[failures.length - 1]!.includes("max_users")) {
      failures.pop();
      failed--;
      skip("create user", "account at max user capacity");
    }
  }

  if (canCreateUser && createdUserId) {
    await test("update user", async () => {
      const newName = `${RUN_ID}-user-updated`;
      const res = await sdk.users.update({
        userId: createdUserId!,
        userRequest: { name: newName },
      });
      assert(res.name === newName, `name should be "${newName}"`);
    });
  } else {
    skip("update user", "could not create user (account at max capacity)");
  }
}

// ---------------------------------------------------------------------------
// User Groups
// ---------------------------------------------------------------------------
async function testUserGroups() {
  log("\n── User Groups ──");
  let createdGroupId: string | undefined;

  await test("list user groups", async () => {
    const res = await sdk.userGroups.list({});
    assert(Array.isArray(res.userGroups), "userGroups should be an array");
  });

  await test("create user group", async () => {
    const name = `${RUN_ID}-group`;
    const res = await sdk.userGroups.create({ name });
    assert(!!res.id, "created group should have an id");
    assert(res.name === name, `name should be "${name}"`);
    createdGroupId = res.id!;
    cleanup.push({
      label: `user group ${createdGroupId}`,
      fn: () => sdk.userGroups.delete({ groupId: createdGroupId! }),
    });
  });

  await test("get user group", async () => {
    assert(!!createdGroupId, "need a created group");
    const res = await sdk.userGroups.get({ groupId: createdGroupId! });
    assert(res.id === createdGroupId, "should return the correct group");
  });

  await test("update user group", async () => {
    assert(!!createdGroupId, "need a created group");
    const newName = `${RUN_ID}-group-updated`;
    const res = await sdk.userGroups.update({
      groupId: createdGroupId!,
      userGroupRequest: { name: newName },
    });
    assert(res.name === newName, `name should be "${newName}"`);
  });

  await test("list users in group (empty)", async () => {
    assert(!!createdGroupId, "need a created group");
    const res = await sdk.userGroups.listUsers({ groupId: createdGroupId! });
    assert(Array.isArray(res.users), "users should be an array");
  });
}

// ---------------------------------------------------------------------------
// User Group ↔ User membership (uses existing user)
// ---------------------------------------------------------------------------
async function testGroupMembership() {
  log("\n── Group Membership ──");
  let userId: string | undefined;
  let groupId: string | undefined;

  await test("setup: pick existing user for membership test", async () => {
    const res = await sdk.users.list({});
    assert(res.users!.length > 0, "need at least one user");
    userId = res.users![0]!.id!;
  });

  await test("setup: create group for membership test", async () => {
    const res = await sdk.userGroups.create({ name: `${RUN_ID}-membership` });
    groupId = res.id!;
    cleanup.push({
      label: `membership test group ${groupId}`,
      fn: () => sdk.userGroups.delete({ groupId: groupId! }),
    });
  });

  await test("add user to group", async () => {
    assert(!!userId && !!groupId, "need both user and group");
    await sdk.userGroups.addUser({ groupId: groupId!, userId: userId! });
  });

  await test("verify user in group", async () => {
    assert(!!groupId, "need a group");
    const res = await sdk.userGroups.listUsers({ groupId: groupId! });
    assert(
      res.users!.some((u: any) => u.id === userId),
      "user should be in the group",
    );
  });

  await test("verify group in user's groups", async () => {
    assert(!!userId, "need a user");
    const res = await sdk.users.getGroups({ userId: userId! });
    assert(
      (res.groups ?? []).some((g: any) => g.id === groupId),
      "group should appear in user's groups",
    );
  });

  await test("remove user from group", async () => {
    assert(!!userId && !!groupId, "need both user and group");
    await sdk.userGroups.removeUser({ groupId: groupId!, userId: userId! });
    const res = await sdk.userGroups.listUsers({ groupId: groupId! });
    assert(
      !res.users!.some((u: any) => u.id === userId),
      "user should no longer be in the group",
    );
  });
}

// ---------------------------------------------------------------------------
// Access Keys
// ---------------------------------------------------------------------------
async function testAccessKeys() {
  log("\n── Access Keys ──");
  let subAccountId: string | undefined;
  let generatedApiKey: string | undefined;

  await test("setup: get a product environment for access key tests", async () => {
    const res = await sdk.productEnvironments.list({ enabled: true });
    assert(res.subAccounts!.length > 0, "need at least one enabled environment");
    subAccountId = res.subAccounts![0]!.id!;
  });

  await test("list access keys", async () => {
    assert(!!subAccountId, "need a product environment");
    const res = await sdk.accessKeys.list({ subAccountId: subAccountId! });
    assert(Array.isArray(res.accessKeys), "accessKeys should be an array");
  });

  await test("generate access key", async () => {
    assert(!!subAccountId, "need a product environment");
    const res = await sdk.accessKeys.generate({
      subAccountId: subAccountId!,
      accessKeyRequest: { name: `${RUN_ID}-key`, enabled: true },
    });
    assert(!!res.apiKey, "generated key should have an apiKey");
    assert(!!res.apiSecret, "generated key should have an apiSecret");
    generatedApiKey = String(res.apiKey);
    cleanup.push({
      label: `access key ${generatedApiKey}`,
      fn: () =>
        sdk.accessKeys.delete({
          subAccountId: subAccountId!,
          key: generatedApiKey!,
        }),
    });
  });

  await test("update access key", async () => {
    assert(!!subAccountId && !!generatedApiKey, "need env and key");
    const res = await sdk.accessKeys.update({
      subAccountId: subAccountId!,
      key: generatedApiKey!,
      accessKeyUpdateRequest: { name: `${RUN_ID}-key-updated` },
    });
    assert(res.name === `${RUN_ID}-key-updated`, "name should be updated");
  });

  await test("delete access key by name", async () => {
    assert(!!subAccountId, "need a product environment");
    const res2 = await sdk.accessKeys.generate({
      subAccountId: subAccountId!,
      accessKeyRequest: { name: `${RUN_ID}-key-byname`, enabled: true },
    });
    const delRes = await sdk.accessKeys.deleteByName({
      subAccountId: subAccountId!,
      name: `${RUN_ID}-key-byname`,
    });
    assert(!!delRes, "should get a success response");
  });
}

// ---------------------------------------------------------------------------
// Billing Usage
// ---------------------------------------------------------------------------
async function testBillingUsage() {
  log("\n── Billing Usage ──");

  await test("get billing usage (current year)", async () => {
    const res = await sdk.billingUsage.get({});
    assert(Array.isArray(res), "response should be an array");
  });

  await test("get billing usage with year", async () => {
    const res = await sdk.billingUsage.get({ year: new Date().getFullYear() });
    assert(Array.isArray(res), "response should be an array");
  });
}

// ---------------------------------------------------------------------------
// Roles (Permissions API - Beta)
// ---------------------------------------------------------------------------
async function testRoles() {
  log("\n── Roles ──");
  let createdRoleId: string | undefined;
  let customRolesEnabled = true;

  await test("list global roles", async () => {
    const res = await sdk.roles.list({ permissionType: "global" });
    assert(Array.isArray(res.data), "data should be an array");
    assert(res.data!.length > 0, "should have at least one global role");
  });

  await test("list content roles", async () => {
    const res = await sdk.roles.list({ permissionType: "content" });
    assert(Array.isArray(res.data), "data should be an array");
  });

  await test("list system roles only", async () => {
    const res = await sdk.roles.list({
      permissionType: "global",
      managementType: "system",
    });
    assert(Array.isArray(res.data), "data should be an array");
  });

  await test("get a system role", async () => {
    const listRes = await sdk.roles.list({
      permissionType: "global",
      managementType: "system",
    });
    assert(listRes.data!.length > 0, "need at least one system role");
    const roleId = listRes.data![0]!.id!;
    const res = await sdk.roles.get({ roleId });
    assert(res.data!.id === roleId, "should return the correct role");
  });

  await test("list role principals (system role)", async () => {
    const listRes = await sdk.roles.list({
      permissionType: "global",
      managementType: "system",
    });
    const roleId = listRes.data![0]!.id!;
    const res = await sdk.roles.listPrincipals({ roleId });
    assert(!!res, "should get a response");
  });

  // Custom role CRUD — may not be enabled on all accounts
  try {
    await test("create custom role", async () => {
      const systemPolicies = await sdk.systemPolicies.list({});
      const policyId = systemPolicies.data?.[0]?.id;
      assert(!!policyId, "need at least one system policy");

      const res = await sdk.roles.create({
        name: `${RUN_ID}-role`,
        permissionType: "global",
        scopeType: "account",
        systemPolicyIds: [policyId!],
      });
      assert(!!res.data?.id, "created role should have an id");
      createdRoleId = res.data!.id!;
      cleanup.push({
        label: `role ${createdRoleId}`,
        fn: () => sdk.roles.delete({ roleId: createdRoleId! }),
      });
    });
  } catch {
    // handled inside test()
  }
  if (!createdRoleId) {
    customRolesEnabled = false;
    if (failures.length > 0 && failures[failures.length - 1]!.includes("not enabled")) {
      failures.pop();
      failed--;
      skip("create custom role", "custom roles not enabled on this account");
    }
  }

  if (customRolesEnabled && createdRoleId) {
    await test("update custom role", async () => {
      const res = await sdk.roles.update({
        roleId: createdRoleId!,
        role: {
          name: `${RUN_ID}-role-updated`,
          description: "Updated by sanity test",
        },
      });
      assert(res.data?.name === `${RUN_ID}-role-updated`, "name should be updated");
    });
  } else {
    skip("update custom role", "custom roles not enabled on this account");
  }
}

// ---------------------------------------------------------------------------
// Principals
// ---------------------------------------------------------------------------
async function testPrincipals() {
  log("\n── Principals ──");

  await test("list roles for a user principal", async () => {
    const users = await sdk.users.list({});
    assert(users.users!.length > 0, "need at least one user");
    const userId = users.users![0]!.id!;
    const res = await sdk.principals.listRoles({
      principalType: "user",
      principalId: userId,
      permissionType: "global",
    });
    assert(!!res.data, "should have data");
  });

  await test("inspect at account scope", async () => {
    const res = await sdk.principals.inspect({ scopeType: "account" });
    assert(!!res.data, "should have data");
    assert(!!res.data!.principals, "data should have principals");
    assert(Array.isArray(res.data!.principals), "principals should be an array");
  });
}

// ---------------------------------------------------------------------------
// Custom Policies (Permissions API - Beta)
// ---------------------------------------------------------------------------
async function testCustomPolicies() {
  log("\n── Custom Policies ──");

  await test("list custom policies (account scope)", async () => {
    const res = await sdk.customPolicies.list({ scopeType: "account" });
    assert(!!res, "should get a response");
  });
}

// ---------------------------------------------------------------------------
// Effective Policies
// ---------------------------------------------------------------------------
async function testEffectivePolicies() {
  log("\n── Effective Policies ──");

  await test("list effective policies (account scope)", async () => {
    const res = await sdk.effectivePolicies.list({ scopeType: "account" });
    assert(!!res.data, "should have data");
  });

  await test("list effective policies (prodenv scope)", async () => {
    const envs = await sdk.productEnvironments.list({ enabled: true });
    assert(envs.subAccounts!.length > 0, "need at least one environment");
    const envId = envs.subAccounts![0]!.id!;
    const res = await sdk.effectivePolicies.list({
      scopeType: "prodenv",
      scopeId: envId,
    });
    assert(!!res.data, "should have data");
  });
}

// ---------------------------------------------------------------------------
// System Policies
// ---------------------------------------------------------------------------
async function testSystemPolicies() {
  log("\n── System Policies ──");

  await test("list system policies", async () => {
    const res = await sdk.systemPolicies.list({});
    assert(Array.isArray(res.data), "data should be an array");
    assert(res.data!.length > 0, "should have at least one system policy");
  });
}

// ---------------------------------------------------------------------------
// Public (Catalog, Cedar Schema, Policy Validation)
// ---------------------------------------------------------------------------
async function testPublic() {
  log("\n── Public ──");

  await test("get system roles and policies catalog", async () => {
    const res = await sdk.public.getCatalog();
    assert(!!res.catalog, "should have a catalog property");
  });

  await test("get Cedar schema", async () => {
    const res = await sdk.public.getSchema();
    assert(!!res.schema, "should return a schema");
  });

  await test("validate Cedar policy (valid)", async () => {
    const res = await sdk.public.validatePolicy({
      policy: `permit(principal, action, resource);`,
    });
    assert(res.valid === true, "simple permit policy should be valid");
  });

  await test("validate Cedar policy (invalid)", async () => {
    const res = await sdk.public.validatePolicy({
      policy: `this is not valid cedar`,
    });
    assert(res.valid === false, "garbage input should be invalid");
  });
}

// ---------------------------------------------------------------------------
// Cleanup & Runner
// ---------------------------------------------------------------------------
async function runCleanup() {
  log("\n── Cleanup ──");
  for (const item of cleanup.reverse()) {
    try {
      await item.fn();
      log(`  ✓ Deleted ${item.label}`);
    } catch (err: any) {
      log(`  ✗ Failed to delete ${item.label}: ${err?.message || err}`);
    }
  }
}

async function main() {
  log(`\n${"=".repeat(60)}`);
  log(`Cloudinary Account Provisioning SDK — Sanity Test`);
  log(`Run ID: ${RUN_ID}`);
  log(`${"=".repeat(60)}`);

  try {
    await testProductEnvironments();
    await testUsers();
    await testUserGroups();
    await testGroupMembership();
    await testAccessKeys();
    await testBillingUsage();
    await testRoles();
    await testPrincipals();
    await testCustomPolicies();
    await testEffectivePolicies();
    await testSystemPolicies();
    await testPublic();
  } finally {
    await runCleanup();
  }

  log(`\n${"=".repeat(60)}`);
  log(`Results: ${passed} passed, ${failed} failed, ${skipped} skipped`);
  if (failures.length > 0) {
    log(`\nFailures:`);
    for (const f of failures) {
      log(`  • ${f}`);
    }
  }
  log(`${"=".repeat(60)}\n`);

  process.exit(failed > 0 ? 1 : 0);
}

main();
