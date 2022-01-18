import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  width: ${(props) => props.width}%;
`;

const Card = ({ children, ...props }) => {
  return <Container width={props.width}>{children}</Container>;
};

export default Card;
