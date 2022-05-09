import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  MenuList,
  Paper,
  Grow,
  Popper,
  ClickAwayListener,
  MenuItem,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import React, { useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { muiThemeConst } from "../../Style/style";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";

const theme = createTheme(muiThemeConst);

const Navbar = ({ modalVal, modalOpen }) => {
  const login = false;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const history = useNavigate();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={2} md={1}>
              <MenuBookIcon sx={{ mr: 2, fontSize: "3em" }} />
            </Grid>
            <Grid item xs={8} md={9}>
              <Typography variant="h6" color="inherit" noWrap>
                The Reader's Hut
              </Typography>
            </Grid>

            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div ref={anchorRef}>
                <Hamburger size={20} toggled={open} toggle={handleToggle} />
              </div>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper
                      sx={{
                        margin: "2%",
                        marginRight: "5%",
                        border: "1px solid #ff784e",
                        backgroundColor: "#f6efcb",
                        color: "#b23c17",
                      }}
                    >
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          // onKeyDown={handleListKeyDown}
                        >
                          <MenuItem
                            onClick={() => {
                              history("/");
                            }}
                          >
                            Home
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleToggle();
                              modalOpen();
                            }}
                          >
                            Add Blog
                          </MenuItem>
                          {login ? (
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          ) : (
                            <>
                              <MenuItem onClick={handleClose}>Log In</MenuItem>
                              <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                            </>
                          )}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
