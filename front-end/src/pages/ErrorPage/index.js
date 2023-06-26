import { useRouteError } from "react-router-dom";
import Stack  from "@mui/material/Stack";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text">
      <Stack spacing={0}>
        <div>
          {" "}
          <h1>Oops!</h1>
        </div>
        <div>
          <p>Sorry, an unexpected error has occurred.</p>
        </div>
        <div>
          {" "}
          <p>
            {/* <i>{error.statusText || error.message}</i> */}
          </p>
        </div>
      </Stack>
    </div>
  );
};

export default ErrorPage;
