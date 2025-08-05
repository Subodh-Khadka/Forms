import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);

    // setDidEdit({ email: true, password: true });

    // const emailIsValid =
    //   isNotEmpty(enteredValues.email) && isEmail(enteredValues.email);
    // const passwordIsValid = hasMinLength(enteredValues.password, 6);

    // if (!emailIsValid || !passwordIsValid) {
    //   return;
    // }

    // console.log("Sending request with:", enteredValues);

    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });

    // setDidEdit({ email: false, password: false });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={() => {
            setEnteredValues({ email: "", password: "" });
            setDidEdit({ email: false, password: false });
          }}
        >
          Reset
        </button>

        <button className="button">Login</button>
      </p>
    </form>
  );
}
