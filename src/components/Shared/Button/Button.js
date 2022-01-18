import styled from 'styled-components';

const ButtonStyled = styled.button`
  border: none;
  border-radius: 6px;
  background-color: #03a9f4;
  padding: 0.8rem 0.6rem;
  margin-top: 0.3rem;
  width: 75%;
  font-size: 18px;
`

const Button = ({ submit }) => {
  return <ButtonStyled type={submit ? 'submit' : ''} >Login</ButtonStyled>;
};

export default Button;
