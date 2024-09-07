import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { useRouter } from 'next/router';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import {
  Container,
  TopContainer,
  ActivityHistoryContainer,
  ActivityImageCoin,
  ActivityProgress,
  CheckboxContainer,
  StyledCheckbox,
  JaimicoinsContainer,
  JaimicoinsTextContainer,
  PointsStoreContainer,
  PointsContainer,
  PointsCard,
  ActivityText,
  JaimicoinsTitle,
  JaimicoinsAmount,
  PointsCardTitle,
  PointsCardButton,
  JaimicoinsIcon,
  ImageGiftCardContainer,
  ActivityTitle,
  PointsCardIcon,
  JaimicoinsIconPoints,
  PointsCardIconText,
} from './styles';
import Image from 'next/image';
import { CoinIcon, GiftCardIcon } from '@/assets';

export default function Dashboard() {
  const [jaimicoins, setJaimicoins] = useState(30);  // Valor das Jaimicoins
  const pointsStoreItems = [
    { title: 'Gift Card Ifood', points: 100 },
    { title: 'Gift Card Ifood', points: 100 },
    { title: 'Gift Card Ifood', points: 100 },
    { title: 'Gift Card Ifood', points: 100 },
  ];

  const [checkboxes, setCheckboxes] = useState([true, true, true, false, false, false, false, false]);

  const handleCheckboxChange = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <Container>
      <Navbar />
      <TopContainer>
        <ActivityHistoryContainer>
          <ActivityTitle>
            Histórico de atividades
          </ActivityTitle>
          <ActivityText>
            Gravação de 10 conteúdos aprovados <br />
            Essa atividade vale 100 Jaimicoins
          </ActivityText>
          <ActivityProgress>
            <ActivityImageCoin>
              <Image src={CoinIcon} alt="robot" layout="fill" objectFit="cover" />
            </ActivityImageCoin>
            <CheckboxContainer>
              {checkboxes.map((checked, index) => (
                <StyledCheckbox
                  key={index}
                  checked={checked}
                  onChange={() => handleCheckboxChange(index)}
                  icon={<CircleOutlinedIcon style={{ fontSize: 28 }} />} /* Unchecked circle */
                  checkedIcon={<CircleIcon style={{ fontSize: 28 }} />} /* Checked filled circle */
                />
              ))}
            </CheckboxContainer>
          </ActivityProgress>
        </ActivityHistoryContainer>

        <JaimicoinsContainer>
          <JaimicoinsIcon>
            <Image src={CoinIcon} alt="robot" layout="fill" objectFit="cover" />
          </JaimicoinsIcon>
          <JaimicoinsTextContainer>
            <JaimicoinsTitle>Meus Jaimicoins</JaimicoinsTitle>
            <JaimicoinsAmount>{jaimicoins}</JaimicoinsAmount>
          </JaimicoinsTextContainer>
        </JaimicoinsContainer>
      </TopContainer>

      <PointsContainer>
        <ActivityTitle>
            Loja de pontos
        </ActivityTitle>
        <PointsStoreContainer>
          {pointsStoreItems.map((item, index) => (
            <PointsCard key={index}>
              <ImageGiftCardContainer>
                <Image src={GiftCardIcon} alt="giftcard" layout="fill" objectFit="cover" />
              </ImageGiftCardContainer>
              <PointsCardTitle>{item.title}</PointsCardTitle>
              <PointsCardIcon>
              <JaimicoinsIconPoints>
                <Image src={CoinIcon} alt="robot" layout="fill" objectFit="cover" />
              </JaimicoinsIconPoints>
              < PointsCardIconText>100</PointsCardIconText>
              </PointsCardIcon>
              <PointsCardButton>Trocar</PointsCardButton>
            </PointsCard>
          ))}
        </PointsStoreContainer>
      </PointsContainer>
    </Container>
  );
}
