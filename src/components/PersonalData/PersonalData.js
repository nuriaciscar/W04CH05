import Button from "./Button";
import Input from "./Input";

const PersonalData = () => {
  return (
    <>
      <section className="personal-data">
        <h1>Personal Data</h1>
        <Input
          for={"nameInput"}
          text={"Name"}
          type={"text"}
          class={"form-control"}
          id={"nameInput"}
          placeholder={"Example: Pepe"}
        />

        <Input
          for={"surnameInput"}
          text={"Name"}
          type={"text"}
          class={"form-control"}
          id={"surnameInput"}
          placeholder={"Example: Mujica"}
        />

        <Input
          for={"nameInput"}
          text={"Name"}
          type={"text"}
          class={"form-control"}
          id={"nameInput"}
          placeholder={"Example: Pepe"}
        />

        <Input
          for={"date"}
          text={"Date"}
          type={"text"}
          class={"form-control"}
          id={"date"}
          placeholder={"MM/DD/YYY"}
        />

        <Input
          for={"ageInput"}
          text={"Age"}
          type={"text"}
          class={"form-control"}
          id={"ageInput"}
          placeholder={""}
        />

        <Button
          type={"button"}
          className={"personalData button"}
          text={"Next"}
        />
      </section>
    </>
  );
};

export default PersonalData;
