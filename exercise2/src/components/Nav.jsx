import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CssBaseline from "@mui/material/CssBaseline";
import Badge from "@mui/material/Badge";

const Nav = (props) => {
  return (
    <>
      <CssBaseline>
        <Box>
          <AppBar style={{ position: "fixed", top: 0 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Edrick App
              </Typography>
              <div>
                <IconButton>
                  {" "}
                  <IconButton aria-label="cart">
                    <Badge badgeContent={props.totalCount} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </CssBaseline>
    </>
  );
};

export default Nav;
