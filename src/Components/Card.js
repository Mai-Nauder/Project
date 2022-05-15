import { Button } from "@mui/material";
import CardActions_Component from "./CardActions_Component";

const Card = (props) => {
  // const card =  {
  //   img:"",
  //   descriotion:"",
  //   price:"",
  // };

      return (
        <div>
          <div className="card mt-3" >
            <img src={props.img} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">{props.description}
              </p>
              <p class="fw-bold mt-2 fs-5">{props.price}</p>
              <Button variant="contained" href="#outlined-buttons #text-buttons"  color="secondary">Add To Card</Button>
              <CardActions_Component></CardActions_Component>
            </div>
          </div>
          
        </div>
        
      );
    };

    export default Card;

    