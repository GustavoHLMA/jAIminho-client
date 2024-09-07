import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4.5vh;
  padding-left: 5.5vw;
  padding-right: 4.69vw;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10vw;
  margin-top: 10vh;
`;

export const ActivityHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2vh;
  padding: 2vh 4vw;
  margin-bottom: 4vh;
  width: 100%;
`;

export const ActivityTitle = styled.h1`
  font-size: 2.5vw;
  font-weight: 600;
  color: #034381;
  text-align: center;
`;

export const ActivityText = styled.p`
  font-size: 1.3vw;
  font-weight: 400;
  color: #535353;
  text-align: flex-start;
`;

export const ActivityProgress = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1vw;
`;

export const ActivityImageCoin = styled.div`
  position: relative;
  width: 4vw;
  height: 10vh;
  z-index: 1;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2vh;
`;

export const StyledCheckbox = styled(Checkbox)`
  &.MuiCheckbox-root {
    color: #E4E0C4;
  }
  
  &.Mui-checked {
    color: #FFDC02;
  }
`;

export const JaimicoinsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3vw;
  align-items: center;
  background-color: #FFDC02;
  border: none;
  border-radius: 12px;
  padding: 2vh 2vw;
  margin-bottom: 4vh;
  width: 100%;
`;

export const JaimicoinsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const JaimicoinsIcon = styled.div`
  position: relative;
  width: 8vw;
  height: 20vh;
  z-index: 1;
`;

export const JaimicoinsTitle = styled.p`
  color: #034381;
  font-size: 2.5vw;
  font-weight: 600;
`;

export const JaimicoinsAmount = styled.p`
  font-size: 3vw;
  font-weight: 400;
  color: #034381;
`;

export const PointsContainer = styled.div`
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`

export const PointsStoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4vh;
`;

export const PointsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FFDC02;
  border: none;
  border-radius: 12px;
  padding: 2vh;
  margin: 2vw;
  width: 15vw;
`;

export const PointsCardTitle = styled.p`
  font-size: 1.2vw;
  font-weight: bold;
  color: #003366;
  text-align: left;
`;

export const PointsCardIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  margin-bottom: 1vh;
`;

export const PointsCardIconText = styled.div`
  font-size: 2vw;
  font-weight: 400;
  color: #003366;
  align-text: center;
`

export const JaimicoinsIconPoints = styled.div`
  position: relative;
  width: 4vw;
  height: 10vh;
  z-index: 1;
`;

export const PointsCardButton = styled.button`
  background-color: #034381;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1vh 2vw;
  cursor: pointer;
  font-size: 1vw;
  &:hover {
    opacity: 0.8;
  }
`;

export const ImageGiftCardContainer = styled.div`
  position: relative;
  width: 13vw;
  height: 18vh;
  z-index: 1;
  margin-bottom: 1vh;
`;

