import { styled } from '@mui/system';
import { Box, IconButton, TextField } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  height: '100vh',
  backgroundColor: '#ffffff',
  fontFamily: 'Poppins'
});

export const NavContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 4.5vh;
  padding-left: 5.5vw;
  margin-bottom: 2.6rem;
  padding-right: 4.69vw;
`;

export const Navbar = styled(Box)({
  width: '100%',
  padding: '10px 20px',
  backgroundColor: '#ffffff',
  boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '7rem'
});

export const Sidebar = styled(Box)({
  width: '250px', // Define a largura da sidebar
  height: '100vh', // Ocupa a altura total da viewport
  backgroundColor: '#F9F9F9', // Fundo branco para a sidebar
  borderRight: '1px solid #ddd', // Borda para separar visualmente a sidebar
  overflowY: 'auto', // Adiciona a rolagem quando o conteúdo ultrapassar a altura
  padding: '20px',
  marginLeft: '18px',
  scrollbarWidth: 'thin', // Definir largura da scrollbar
  scrollbarColor: '#ffcc00 transparent', // Cor personalizada da barra de rolagem
  '&::-webkit-scrollbar': {
    width: '8px'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#ffcc00', // Cor do scroll
    borderRadius: '8px'
  }
});

export const ChatArea = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#ffffff',
  height: '100vh',
  position: 'relative'
});

export const ChatInputArea = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  backgroundColor: '#FFFBE3',
  borderRadius: '30px',
  border: '0.5px solid #FFDC02',
  width: '81%',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)'
});

export const InputField = styled(TextField)({
  flex: 1,
  backgroundColor: 'transparent',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      display: 'none'
    },
    '&.Mui-focused fieldset': {
      display: 'none'
    }
  },
  '& input': {
    padding: '10px'
  }
});

export const SendButton = styled(IconButton)({
  backgroundColor: '#004785',
  color: '#FFD700',
  borderRadius: '50%',
  padding: '7px',
  marginLeft: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    backgroundColor: '#003366'
  }
});

export const ClipButton = styled(IconButton)({
  backgroundColor: 'transparent',
  color: '#004785',
  padding: '10px',
  marginRight: '10px'
});
