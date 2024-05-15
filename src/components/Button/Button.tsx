import Button from '@mui/material/Button';

type MuiButtonProps = {
  onClick: () => void;
  Text: string;
}

const MuiButton: React.FC<MuiButtonProps> = ({ Text, onClick }) => {
  return (
    <>
      <Button onClick={onClick} variant="contained" >{Text}</Button>
    </>
  );
}
export default MuiButton;
