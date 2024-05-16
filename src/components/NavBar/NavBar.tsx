import { Drawer, Box, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PeopleIcon from '@mui/icons-material/People';
import React from "react";
import { Links, NavLinks } from "../../constants";
import { BookMenu } from "../../svg";
import MenuButton from "../Button/MenuButton";
import { MenuButtonWrapper, ImageDrawerWrapper } from "../Wrapper/style";
const NavBar: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const iconSelector: React.ElementType = (text: string) => {
    switch (text) {
      case 'Menu':
        return <MenuIcon />;
      case 'Dashboard':
        return <MenuBookIcon />;
      case 'Cedi':
        return <FileUploadIcon />;
      case 'Prendi':
        return <FileDownloadIcon />;
      case 'Utenti':
        return <PeopleIcon />;
      default:
        return <></>;
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250, display: "block" }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        {NavLinks.map((text, index) => (
          <>
            <ListItem key={index} >
              <ListItemButton component="a" href={Links[index]} >
                <ListItemIcon>
                  {iconSelector(text)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
      <ImageDrawerWrapper>
        <BookMenu sx={{ width: "15rem", height: "15rem", opacity: "25%" }} />
      </ImageDrawerWrapper>
    </Box>
  );

  return (
    <MenuButtonWrapper>
      <MenuButton onClick={toggleDrawer(true)} ></MenuButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>{DrawerList}</Drawer>
    </MenuButtonWrapper>

  );
}


export default NavBar;
