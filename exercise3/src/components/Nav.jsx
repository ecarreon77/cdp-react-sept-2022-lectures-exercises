import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CssBaseline from "@mui/material/CssBaseline";
import Badge from "@mui/material/Badge";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <CssBaseline>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar style={{ position: "fixed", top: 0 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Edrick App
              </Typography>

              <div>
                <IconButton aria-label="cart">
                  {" "}
                  <IconButton aria-label="cart">
                    <Badge badgeContent={props.totalCount} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </IconButton>
                <Button
                  color="secondary"
                  variant="text"
                  LinkComponent={Link}
                  to="/products"
                >
                  Home
                </Button>
                <Button
                  color="secondary"
                  variant="text"
                  startIcon={<AddIcon />}
                  LinkComponent={Link}
                  to="/products/new"
                >
                  Add Product{" "}
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </CssBaseline>
    </>
  );
};

export default Navbar;
