import styled from 'styled-components';

import Card from '../Shared/Card';
import Button from '../Shared/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.1rem;
  width: auto;
`;

const Label = styled.label`
  align-self: flex-start;
  padding-left: 0.6rem;
  font-size: 18px;
`;

const Input = styled.input`
  margin: 1rem 0;
  padding: 0.4rem;
  width: 90%;
  border: none;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-size: 18px;
`;

const LoginForm = ({ onSubmit, onChange }) => {
  return (
    <Card width={33.33}>
      <Form onSubmit={onSubmit}>
        <Label htmlFor='username'>User</Label>
        <Input type='text' name='username' onChange={onChange} />
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          name='password'
          id='password'
          onChange={onChange}
        />
        <Button />
      </Form>
    </Card>
  );
};

export default LoginForm;
