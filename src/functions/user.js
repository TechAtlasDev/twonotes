export function get_user_id() {
  const user = localStorage.getItem("user");
  const userId = user ? JSON.parse(user).uid : null;
  return userId;
}