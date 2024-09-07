import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.5vh;
  padding-left: 5.5vw;
  padding-right: 4.69vw;
`;

export const HeaderTitle = styled.h1`
  font-size: 3vw;
  font-weight: 600;
  color: #003366;
  text-align: left;
  margin-top: 8vh;
`;

export const SubTitle = styled.p`
  font-size: 1.5vw;
  font-weight: 400;
  color: #5c5c5c;
  margin-top: 1vh;
  margin-bottom: 3vh;
`;

export const SearchContainer = styled.div`
  margin-top: 1vh;
  margin-bottom: 6vh;
  z-index: 0;
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
  position: absolute;

  ::placeholder {
    color: rgba(92, 92, 92, 0.62);
    font-size: 1vw;
    font-weight: 500;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 2.1875vw;
  height: 3.5vh;
  z-index: 1;
  margin-left: 47vw;
  margin-top: 1.5vh;
`;

export const HelpSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3vh;
`;

export const HelpVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42vw;
`;

export const HelpImageContainer = styled.div`
  position: relative;
  height: 50vh;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
`;

export const HelpText = styled.p`
  font-size: 1.2vw;
  font-weight: 500;
  color: #5c5c5c;
  text-align: center;
  margin-top: 1vh;
`;

export const TableContainer = styled.div`
  margin-top: 4vh;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid #ccc;
      padding: 1vh 2vw;
      text-align: center;
    }
    th {
      background-color: #f5f5f5;
      font-weight: 600;
    }
    td {
      background-color: #fff;
    }
  }
`;

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  width: 100%;
`;

export const StepTitle = styled.h2`
  font-size: 2vw;
  font-weight: 600;
  color: #003366;
  text-align: center;
  margin-bottom: 3vh;
`;

export const StepCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 10vw;
  margin-right: 10vw;
  justify-content: center;
`;

export const StepCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffc107;
  border-radius: 12px;
  padding: 4vh 2vw;
  margin: 2vw;
  width: 15vw;
  text-align: center;
`;

export const StepCard2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #034381;
  border-radius: 12px;
  padding: 4vh 2vw;
  margin: 2vw;
  width: 15vw;
  text-align: center;
`;

export const StepNumber = styled.p`
  font-size: 3vw;
  font-weight: bold;
  color: #003366;
`;
export const StepNumber2 = styled.p`
  font-size: 3vw;
  font-weight: bold;
  color: #fff;
`;

export const StepDescription = styled.p`
  font-size: 1.2vw;
  font-weight: 400;
  color: #003366;
  margin-top: 1vh;
  text-align: center;
`;

export const StepDescription2 = styled.p`
  font-size: 1.2vw;
  font-weight: 400;
  color: #fff;
  margin-top: 1vh;
  text-align: center;
`;
