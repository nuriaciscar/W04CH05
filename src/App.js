import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import Login from "./components/Login.js/Login";
// import { useState } from "react";

function App() {
  // const [available, setAvailable] = useState("");

  // nextPage = () => {
  //   console.log("h");
  // };

  return (
    // <FormContext.Provider value={{nextPage()}}>
    <div className="form-group">
      <PersonalData title={"Personal Data"} />
      <Login title={"Acces Data"} lastStep={true} submit={true} />
      <Login title={"Login"} lastStep={false} submit={false} />
      {/* <section className="personal-data">
        <h1>Personal Data</h1>
        <label for="nameInput">Name</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          placeholder="Example: Pepe"
        ></input>
        <label for="surnameInput">Last name</label>
        <input
          type="text"
          className="form-control"
          id="surnameInput"
          placeholder="Example: Mujica"
        ></input>

        <label for="date">Date</label>
        <input
          className="form-control"
          id="date"
          placeholder="MM/DD/YYY"
          type="text"
        />
        <label for="ageInput">Age</label>
        <input
          type="text"
          className="form-control"
          id="ageInput"
          placeholder=""
        ></input>
      </section> */}
      {/* <section className="access-data">
        <h1>Access data</h1>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="User"
        ></input>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="Password"
        ></input>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="Repeat Password"
        ></input>
      </section> */}
      {/* <section className="login-data"> */}
      {/* <h1>Login</h1>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="User"
        ></input>
        <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="Password"
        ></input> */}
      {/* <input
          type="text"
          className="form-control"
          id="userInput"
          placeholder="Repeat Password"
        ></input>
        <input
          className="form-check-input"
          type="checkbox"
          id="passwordCheck"
        ></input>
        <label className="form-check-label" for="passwordCheck">
          Remember Password
        </label> */}
      {/* <button type="submit" className="submit button">
          Login
        </button>*/}
      {/* </section> */}
    </div>
    // </FormContext.Provider>
  );
}

export default App;
