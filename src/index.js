import "./styles.css";
import preventSubmit from "./submit-functions";
import validateEmail from "./validate/validateEmail";
import validateZipCode from "./validate/validateZipCode";
import validatePassword from "./validate/validatePassword";
import validatePasswordConfirmation from "./validate/validatePasswordConfirmation";

preventSubmit(); // Prevents default submit action since it's not a real submission.
validateEmail();
validateZipCode();
validatePassword();
validatePasswordConfirmation();