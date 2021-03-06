
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,

} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";


const Appbar_component = () => {
    return (<AppBar position="static">
        <Toolbar variant="dense">
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
                Photos
            </Typography>
        </Toolbar>
    </AppBar>);
}

export default Appbar_component;
