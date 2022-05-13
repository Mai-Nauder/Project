import {
    Grid,
} from "@mui/material";

import Card from './Card';
import * as React from "react";



const Dresses_Grid = () => {
    return (
        <Grid container item spacing={3} className="Grid2">

        <React.Fragment>
            <Grid item xs={4} className="Grid grid1">
                <Card img="https://img.ltwebstatic.com/images3_pi/2021/11/05/163607509892ef1c39a16beebcf4f8a736c73a59e5_thumbnail_405x552.webp" description="row1 grid1" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid2'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/01/10/1641786332f33a0d469ab8c4d1ab883654dade90fb_thumbnail_405x552.webp" description="row1 grid2" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid3'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/03/04/1646380891cba20672407031acdabd8404742aeb00_thumbnail_405x552.webp" description="row1 grid3" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className="Grid grid1">
                <Card img="https://img.ltwebstatic.com/images3_pi/2021/11/05/163607509892ef1c39a16beebcf4f8a736c73a59e5_thumbnail_405x552.webp" description="row1 grid1" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid2'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/01/10/1641786332f33a0d469ab8c4d1ab883654dade90fb_thumbnail_405x552.webp" description="row1 grid2" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid3'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/03/04/1646380891cba20672407031acdabd8404742aeb00_thumbnail_405x552.webp" description="row1 grid3" price="11$"></Card>
            </Grid>            <Grid item xs={4} className="Grid grid1">
                <Card img="https://img.ltwebstatic.com/images3_pi/2021/11/05/163607509892ef1c39a16beebcf4f8a736c73a59e5_thumbnail_405x552.webp" description="row1 grid1" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid2'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/01/10/1641786332f33a0d469ab8c4d1ab883654dade90fb_thumbnail_405x552.webp" description="row1 grid2" price="11$"></Card>
            </Grid>
            <Grid item xs={4} className='Grid grid3'>
                <Card img="https://img.ltwebstatic.com/images3_pi/2022/03/04/1646380891cba20672407031acdabd8404742aeb00_thumbnail_405x552.webp" description="row1 grid3" price="11$"></Card>
            </Grid>
        </React.Fragment>
        </Grid>);
}

export default Dresses_Grid;