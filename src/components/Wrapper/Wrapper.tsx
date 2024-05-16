import { Box } from "@mui/material";

type WrapperProps = {
  children: React.ReactNode;
  style?: {};
}

const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
  return (
    <Box sx={style}>
      {children}
    </Box>
  );
}
export default Wrapper
