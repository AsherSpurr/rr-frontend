import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MuiDrawer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigateTo = (key: string) => () => {
    switch (key) {
      case "Sign In":
        navigate("/account/signin");
        break;
      case "Dashboard":
        navigate("/user/1/dashboard");
        break;
      case "Calendar":
        navigate("/user/1/calendar");
        break;
      case "Saved Articles":
        navigate("/education");
        //Change to /user/1/savedArticles
        break;
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Sign In", "Dashboard"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={navigateTo(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Calendar", "Saved Articles"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={navigateTo(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{ ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default MuiDrawer;