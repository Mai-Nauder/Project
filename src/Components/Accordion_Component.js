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
import Grid_Row from "./Bottoms_Grid";
import Bottoms_Grid from "./Bottoms_Grid";
import Dresses_Grid from "./Dresses_Grid";

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
                            <Bottoms_Grid></Bottoms_Grid>

                            <div>
                                
                            </div>
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
                            <Dresses_Grid></Dresses_Grid>

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

                        </Grid>
                    </Typography>
                </AccordionDetails>z
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

                        </Grid>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Accordion_component;