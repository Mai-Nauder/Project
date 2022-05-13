import {
    Grid,
} from "@mui/material";
import Grid_Component from "./Dresses_Grid";
import Card from './Card';
import * as React from "react";


const Bottoms_Grid = () => {
    return (
        <Grid container item spacing={3} className="Grid2">
            <React.Fragment>
                <Grid item xs={4} className="Grid grid1">
                    <Card img="https://img.ltwebstatic.com/images3_pi/2020/03/25/158512465436e762f16d967d6800debd80f8b1e30c_thumbnail_900x.webp" description="high-Rise baggy jeans" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid2'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/10/19/1634607178057d99a498f759b0257656af45002f71_thumbnail_900x.webp" description="Solid Zip Up Straight Leg Pants" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid3'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2022/03/04/16463808896faaec07c05ad3f44b1a5cf890551979_thumbnail_900x.webp" description="High Waisted Wide Leg Chambray Pants" price="11$"></Card>
                </Grid>

                <Grid item xs={4} className="Grid grid1">
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/11/03/1635901081ebc617e8fff9972322954fed5c6acf24_thumbnail_900x.webp" description="High Waist Wide Leg Jeans" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid2'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/09/26/16326339772ee662de8d3686a7418e3b2ccefe4afc_thumbnail_900x.webp" description="Solid High Waist Flap Pocket Cargo Pants" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid3'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/11/03/163590110787df30269f3b1d19b34564fc1e810364_thumbnail_900x.webp" description="High Waist Letter Embroidered Flap Pocket Cargo Jeans
" price="11$"></Card>
                </Grid>

                <Grid item xs={4} className="Grid grid1">
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/05/24/1621822825238108b304b41e01b1fe1ff3b95ea555_thumbnail_900x.webp" description="Solid Straight Leg Pants" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid2'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2021/08/12/1628739740eb687f23cbf029373060d4540afa8639_thumbnail_900x.webp" description="Eilly Bazar Flap Pocket Cargo Pants" price="11$"></Card>
                </Grid>
                <Grid item xs={4} className='Grid grid3'>
                    <Card img="https://img.ltwebstatic.com/images3_pi/2022/03/21/164784210163ba6e79f95f7076704845efc3c79590_thumbnail_900x.webp" description="SHEIN SXY Flap Pocket Side Cargo Pants" price="11$"></Card>
                </Grid>
            </React.Fragment>
        </Grid>);
}

export default Bottoms_Grid;