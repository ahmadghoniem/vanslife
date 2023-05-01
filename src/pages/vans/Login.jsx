import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export default function Login() {
  // const [status, setStatus] = useState("idle");
  // const navigate = useNavigate();
  const navigation = useNavigation();
  let isRedirecting =
    navigation.state === "loading" &&
    navigation.formData != null &&
    navigation.formAction !== navigation.location.pathname;

  // wether the state was idle, submitting or loading
  let errorMsg = useActionData();
  /* 1st approach
   * add a loader to our login component that will run before the component is rendered
   * this loader function receives an object which one of it's prop contains an object called request
   * which contains our url (login page url) and then we get the search param from the url using the URL constructor and the searchParam property (get only)
   * then we return that from the loader and receive on the login component using the useLoaderData hook
   */
  const message = useLoaderData();

  /** 2nd approach
   * using the useSearchParams we can get the searchParams being added to the url of the login page
   * and we can also set them
   * const [searchParams, setSearchParams] = useSearchParams();
   * console.log(searchParams.get("message")); */

  /*   const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }; */

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <p>use email: b@b.com and password: p123</p>
      {message && <h3>{message}</h3>}
      {errorMsg && <h3>{errorMsg}</h3>}
      <Form replace className="login-form" method="post">
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />

        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Logging in..."
            : isRedirecting
            ? "redirecting..."
            : "Log in"}
        </button>
      </Form>
    </div>
  );
}
