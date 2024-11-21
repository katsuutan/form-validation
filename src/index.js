import "./styles.css";
import preventSubmit from "./submit-functions";
import validateEmail from "./validate/validateEmail";

preventSubmit(); // Prevents default submit action since it's not a real submission.
validateEmail();