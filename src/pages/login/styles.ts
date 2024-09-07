import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fcfcfc;
`;

export const LeftSide = styled.div`
  width: 50vw;
  height: 90vh;
  border-radius: 0rem 2.8125rem 2.8125rem 0rem;
  margin-right: 11.5vw;
  background-color: #034381;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 10vw;
  height: 10vw;
`;

export const CorreiosContainer = styled.div`
  position: relative;
  width: 6vw;
  height: 4.2vw;
  align-self: center;
`;

export const RightSide = styled.div`
  width: 30vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WhiteStripe = styled.div`
  background-color: white;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const InfoText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;

  strong {
    font-weight: 700;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2vw;
  color: #034381;
  margin-bottom: 1vh;
  align-self: center;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 1vw;
  font-weight: 300;
  color: #5c5c5c;
  margin-bottom: 1.5vh;
  align-self: center;
  text-align: center;

  strong {
    font-weight: 600;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 2vh;
  margin-bottom: 2.75vh;
  border: 0.1vw solid #ffdc02;
  font-weight: 500;

  border-radius: 25rem;
  font-size: 1vw;
  color: #555;
  background-color: #fffbe3;

  &::placeholder {
    color: rgba(92, 92, 92, 0.62);
    font-weight: 500;
  }
`;

export const LoginButton = styled.button`
  position: relative;
  width: 10.625vw;
  height: 3.75vw;
  border-radius: 3.75rem;
  padding: 2vh;
  background-color: #ffdc02;
  color: #034381;
  border: none;
  font-size: 1.2vw;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  left: 30%;

  &:hover {
    background-color: #ffb000;
  }
`;

export const ShowPasswordButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 2vw;
  height: 2vw;
  bottom: 1vh;
`;

export const Cadastro = styled.p`
  font-size: 1vw;
  font-weight: 300;
  color: #5c5c5c;
  align-self: center;
  font-weight: 600;
  color: #034381;
  cursor: pointer;
  align-self: start;
`;
