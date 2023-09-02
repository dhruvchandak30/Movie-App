import { Link } from "react-router-dom";
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={classes.Error}>
      <h1>404 NOT FOUND</h1>
      <Link to="/"> Go Back to Home Page</Link>
    </div>
  );
};
export default ErrorPage;
