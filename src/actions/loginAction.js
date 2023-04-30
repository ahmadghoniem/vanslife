import { redirect } from "react-router-dom";
import { loginUser } from "../api";

const loginAction = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", "true");
    const pathname =
      new URL(request.url).searchParams.get("redirectTo") || "/host";
    let redirectHandler = redirect(pathname);
    redirectHandler.body = true;
    return redirectHandler;
  } catch (err) {
    return err.message;
  }
};
export { loginAction };
