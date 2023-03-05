import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";
import Switch from "./Switch";
import { useTheme } from "./ThemeContext";
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const { theme } = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <>
      <Switch />
      <div
        className="App"
        style={{
          color: theme !== "light" ? "#010618cc" : "white",
          backgroundColor: theme !== "light" ? "white" : "#010618cc",
        }}
      >
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                placeholder="First name"
                value={firstName}
                onChange={(i) => setFirstName(i.target.value)}
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                placeholder="Last name"
                value={lastName}
                onChange={(i) => setLastName(i.target.value)}
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                placeholder="Email address"
                value={email}
                onChange={(i) => setEmail(i.target.value)}
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password.value}
                onChange={(i) =>
                  setPassword({ ...password, value: i.target.value })
                }
                onBlur={() => setPassword({ ...password, isTouched: true })}
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={role} onChange={(i) => setRole(i.target.value)}>
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
