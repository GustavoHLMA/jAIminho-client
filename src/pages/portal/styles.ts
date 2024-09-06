import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.5vh;
  padding-left: 5.5vw;
  padding-right: 4.69vw;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3vh;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;
`;

export const ButtonItem = styled.button<{ yellow?: boolean }>`
  background-color: ${({ yellow }) => (yellow ? '#FFC107' : '#003366')};
  color: #fff;
  margin-right: 1.5vw;
  margin-bottom: 1vh;
  padding: 1.5vh 3.5vw;
  font-size: 1.25vw;
  font-weight: 500;
  border-radius: 1.25rem;
  border: none;
  cursor: pointer;
  width: 28.43749vw;
  height: 10vh;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const SearchBarTitle = styled.p`
  font-size: 1.5vw;
  font-weight: 400;
  color: #5c5c5c;
  margin-top: 3.38vh;
  margin-bottom: 1vh;
  white-space: nowrap;
`;

export const SearchContainer = styled.div`
  margin-top: 1vh;
  margin-bottom: 2.25vh;
`;

export const SearchBar = styled.input`
  width: 50vw;
  padding: 1vw;
  border: 0.01vw solid #ffdc02;
  border-radius: 3.75rem;
  font-size: 1vw;
  color: #5c5c5c;
  background-color: #fffbe3;
  font-weight: 500;

  ::placeholder {
    color: rgba(92, 92, 92, 0.62);
    font-size: 1vw;
    font-weight: 500;
  }
`;
