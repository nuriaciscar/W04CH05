import Input from "../Input/Input";
import Button from "../Button/Button";

const Login = ({ title, lastStep, submit }) => {
  return (
    <>
      <section className="access-data">
        <h1>{title}</h1>
        <Input
          type={"text"}
          className={"form-control"}
          id={"userInput"}
          placeholder={"User"}
        />
        <Input
          type={"text"}
          className={"form-control"}
          id={"passwordInput"}
          placeholder={"Password"}
        />

        {lastStep ? (
          <Input
            type={"text"}
            className={"form-control"}
            id={"password2Input"}
            placeholder={"Repeat password"}
          />
        ) : (
          <>
            <Input
              type={"checkbox"}
              className={"form-check-input"}
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
              className={"btn btn-primary btn-lg"}
              text={"Back"}
              actionOnClick={() => {}}
            />
            <Button
              type={"button"}
              className={"btn btn-primary btn-lg"}
              text={"Next"}
              actionOnClick={() => {}}
            />
          </>
        ) : (
          <Button
            type={"submit"}
            className={"btn btn-primary btn-lg"}
            text={"Login"}
            actionOnClick={() => {}}
          />
        )}
      </section>
    </>
  );
};

export default Login;
