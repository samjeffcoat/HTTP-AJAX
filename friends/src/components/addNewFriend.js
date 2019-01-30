import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const AddNewFriend = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="newFriend">Friend </Label>
        <Input type="text" name="friend" id="friendID" placeholder="name" />
        <Input type="text" name="friend" id="friendID" placeholder="age" />
        <Input type="text" name="friend" id="friendID" placeholder="email" />
        <Button color="primary">AddFriend</Button>
      </FormGroup>
    </Form>
  );
};

export default AddNewFriend;
