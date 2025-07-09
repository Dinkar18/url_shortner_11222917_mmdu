import { AppBar, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="inherit" component={RouterLink} to="/">
          URL Shortener
        </Button>
        <Button color="bg-white" component={RouterLink} to="/stats">
          Analytics Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
