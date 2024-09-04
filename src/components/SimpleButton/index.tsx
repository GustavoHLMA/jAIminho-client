import { Button } from '@mui/material';

interface SimpleButtonProps {
  value: string;
}

export default function SimpleButton({ value = 'Default' }: SimpleButtonProps) {
  return <Button variant="outlined">{value}</Button>;
}
