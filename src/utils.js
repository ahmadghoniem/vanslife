import { redirect } from "react-router-dom";

const requireAuth = async (request) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const pathname = new URL(request.url).pathname;
  if (!isLoggedIn) {
    let redirectHandler = redirect(
      `/login?message=you-need-to-login-first!&redirectTo=${pathname}`
    );
    redirectHandler.body = "";
    return redirectHandler;
  }
  return null;
};
export default requireAuth;
