// const inherited_role_id = 35;
// const role_id = 22;

try {
  // resp = civis.api.call("put", `/roles/${role_id}/inherited_roles/${inherited_role_id}`);
 // resp = civis.api.call("put", "/roles/22/inherited_roles/35");
  resp = civis.api.call("patch", "/groups/12773", { "defaultJobsLabel": "tech_job" });
  log("success", resp);
  // log(`successfully added ${inherited_role_id} as an inherited role for Role#${role_id}`);
} catch (err) {
  log(err);
}
cvxvcx