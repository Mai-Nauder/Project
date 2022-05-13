import {
    Grid,
} from "@mui/material";
import FormRow from "./FormRow"

const Grid_Row = () => {
    return (
        <Grid container item spacing={3} className="Grid2">
            <FormRow />
        </Grid>);
}

export default Grid_Row;