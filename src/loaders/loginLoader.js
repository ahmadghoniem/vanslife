import { redirect } from "react-router-dom";

const loginLoader = ({ request }) => {
  const url = new URL(request.url);
  const message = url.searchParams.get("message");

  // if user is already logged in navigate him to somewhere else
  if (localStorage.getItem("isLoggedIn") === "true") {
    const redirectHandler = redirect("/host");
    redirectHandler.body = true;
    return redirectHandler;
  }

  return message;
};

export { loginLoader };
