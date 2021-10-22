import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = ({ title, lastStep, submit }) => {
  return (
    <>
      <section className="access-data">
        <h1>{title}</h1>
        <Input
          type={"text"}
          class={"form-control"}
          id={"userInput"}
          placeholder={"User"}
        />
        <Input
          type={"text"}
          class={"form-control"}
          id={"passwordInput"}
          placeholder={"Password"}
        />

        {lastStep ? (
          <Input
            type={"text"}
            class={"form-control"}
            id={"password2Input"}
            placeholder={"Repeat password"}
          />
        ) : (
          <>
            <Input
              type={"checkbox"}
              class={"form-check-input"}
              id={"passwordCheck"}
            />
            <Input
              className={"form-check-label"}
              for={"passwordCheck"}
              text={"Remember password"}
            />
          </>
        )}

        {submit ? (
          <>
            <Button
              type={"button"}
              className={"personalData button"}
              text={"Back"}
              actionOnClick={() => {}}
            />
            <Button
              type={"button"}
              className={"personalData button"}
              text={"Next"}
              actionOnClick={() => {}}
            />
          </>
        ) : (
          <Button
            type={"submit"}
            className={"submit button"}
            text={"Login"}
            actionOnClick={() => {}}
          />
        )}
      </section>
    </>
  );
};

export default Login;
