import {
    Grid,
} from "@mui/material";
import Grid_Component from "./Grid_Component";

const Grid_Row = () => {
    return (
        <Grid container item spacing={3} className="Grid2">
            <Grid_Component></Grid_Component>
        </Grid>);
}

export default Grid_Row;