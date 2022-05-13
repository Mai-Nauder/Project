import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    Grid,

} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import FormRow from "./FormRow"
import Grid_Row from "./Grid_Row";

const Accordion_component = () => {
    const handleChange = (event) => {
    };
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        Bottoms
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Grid className="container" >
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header">
                    <Typography>Dresses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Grid className="container" >
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Tops</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Grid className="container" >
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Sweatshirts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Grid className="container" >
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>{" "}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Jumpsuits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <Grid className="container" >
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                            <Grid_Row></Grid_Row>
                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Accordion_component;