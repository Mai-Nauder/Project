import {
    Checkbox,
} from "@mui/material";
import * as React from "react";

const Checkbox_Component = () => {
    const handleChange = (event) => {
    };
    return (<Checkbox
        defaultChecked
        onChange={handleChange}
    />);
}

export default Checkbox_Component;