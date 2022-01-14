import styled from 'styled-components';

const Container = styled.div`
  padding: 5px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Card = () => {
  return (
    <Container>
      <h1>Hola card</h1>
      <p>Testing</p>
    </Container>
  )
};

export default Card;
