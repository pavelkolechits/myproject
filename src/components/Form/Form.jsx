import styled from "styled-components";

export const Form = ({ onKeyDown, onClick, onChange }) => {
  return (
    <Container className="animate__animated animate__backInDown animate__faster">
      <Input onChange={onChange} />
      <Button onKeyDown={onKeyDown} onClick={onClick}>
        Search
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin: 35px auto;
  width: 500px;
  display: flex;
  justify-content: center;
 
 
  @media (max-width: 850px) {
    
    margin: 35px auto;
    margin-top: 100px;
    width: 360px;

  }
`;
const Input = styled.input`
  width: 350px;
  height: 40px;
  background: #00000080;
  outline: none;
  border: 1px solid #ccc;
  color: #ccccccad;
  padding: 7px;
  font-size: 27px;
  border-radius: 3px;
  font-weight: lighter;
  letter-spacing: 1px;
  text-decoration-style: none;
  @media (max-width: 1000px) {
    width: 300px;
    height: 30px;
  }
  @media (max-width: 420px) {
    width: 200px;
    height: 20px;
    font-size: 15px;
  }
 

`;
const Button = styled.button`
  background: #00000080;
  height: 40px;
  width: 80px;
  color: #ccccccad;
  border-radius: 3px;
  letter-spacing: 1px;
  margin-left: 2px;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 50px;
    height: 30px;
    font-size: 10px;
  }
  @media (max-width: 420px) {
    width: 40px;
    height: 20px;
    font-size: 9px;
  }
`;
