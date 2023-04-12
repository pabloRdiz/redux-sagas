import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const DEFAULT_STATE = { firstName: "", lastName: "" };

const NewUser = ({ onSubmit }) => {
  const [data, setData] = useState(DEFAULT_STATE);

  const handleFirstNameChange = (e) => {
    setData({ ...data, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setData({ ...data, lastName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);

    setData(DEFAULT_STATE);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First name</Label>
        <Input
          required
          placeholder="First Name"
          onChange={handleFirstNameChange}
          value={data.firstName}
        />
      </FormGroup>
      <FormGroup>
        <Label>Last name</Label>
        <Input
          required
          placeholder="Last Name"
          onChange={handleLastNameChange}
          value={data.lastName}
        />
      </FormGroup>
      <FormGroup>
        <Button block outline type="submit" color="primary">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default NewUser;
