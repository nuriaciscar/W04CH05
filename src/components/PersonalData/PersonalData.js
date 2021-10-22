import Button from "../Button/Button";
import Input from "../Input/Input";

const PersonalData = ({ title }) => {
  return (
    <>
      <section className="personal-data">
        <h1>{title}</h1>
        <Input
          for={"nameInput"}
          text={"Name"}
          type={"text"}
          className={"form-control"}
          id={"nameInput"}
          placeholder={"Example: Pepe"}
        />

        <Input
          for={"surnameInput"}
          text={"Last Name"}
          type={"text"}
          className={"form-control"}
          id={"surnameInput"}
          placeholder={"Example: Mujica"}
        />

        <Input
          for={"date"}
          text={"Date"}
          type={"text"}
          className={"form-control"}
          id={"date"}
          placeholder={"MM/DD/YYY"}
        />

        <Input
          for={"ageInput"}
          text={"Age"}
          type={"text"}
          className={"form-control"}
          id={"ageInput"}
          placeholder={""}
        />

        <Input
          for={"email"}
          text={"Email"}
          type={"text"}
          className={"form-control"}
          id={"emailInput"}
          placeholder={"Enter your email"}
          pattern={"[^ @]*@[^ @]"}
        />

        <Button
          type={"button"}
          className={"btn btn-primary btn-lg"}
          text={"Next"}
          actionOnClick={() => {}}
        />
      </section>
    </>
  );
};

export default PersonalData;
