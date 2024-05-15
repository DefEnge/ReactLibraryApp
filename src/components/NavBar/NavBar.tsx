import { Drawer, Button, Box, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Divider } from "@mui/material";
import Wrapper from "../Wrapper/Wrapper";
import React from "react";
import { NavLinks } from "../../constants";
import MuiButton from "../Button/Button";
const NavBar: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        {NavLinks.map((text, index) => (
          <>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <Wrapper>
      <MuiButton onClick={toggleDrawer(true)} Text="Menu" ></MuiButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>{DrawerList}</Drawer>
    </Wrapper>

  );
}


export default NavBar;
