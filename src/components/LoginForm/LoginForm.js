import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import { Button, Input, Form, Label } from "components/ContactForm/FormStyled";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          // required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          // required
        />
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};