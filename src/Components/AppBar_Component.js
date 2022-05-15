import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,

} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../CSS/Card_css.css"




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
                Home
            </Typography>
            <div>
                <nav class="navbar ">
                    <div class="container">
                        <a class="navbar-brand" href="#" >
                            <FacebookIcon color='secondary'></FacebookIcon >
                        </a>                        
                        <a class="navbar-brand" href="#">
                            <InstagramIcon color='secondary'></InstagramIcon>
                        </a>                        
                        <a class="navbar-brand" href="#">
                            <TwitterIcon color='secondary'></TwitterIcon>
                        </a>
                    </div>
                </nav>
            </div>
        </Toolbar>
    </AppBar>);
}

export default Appbar_component;
