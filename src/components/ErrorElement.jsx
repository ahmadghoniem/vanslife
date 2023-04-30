import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const ErrorObject = useRouteError();
  return (
    <pre>
      {ErrorObject.message}
      {ErrorObject.status}
      {ErrorObject.statusText}
    </pre>
  );
};
export default ErrorElement;
