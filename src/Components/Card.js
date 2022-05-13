import CardActions_Component from "./CardActions_Component";

const Card = () => {
  const card =  {
    img:"",
    details:"",
    price:"",
  };

      return (
        <div>
          <div className="card mt-3" >
            <img src="https://img.ltwebstatic.com/images3_pi/2021/05/21/16215626666dd0dbc568090caacb1721793afb5b3a_thumbnail_405x552.webp" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
              Solid Side Drawstring Ruched Bodycon Dress
              </p>
              <p class="fw-bold mt-2 fs-5">11$</p>
              <a href="#" className="btn btn-primary">
              Add To Card
              </a>
              <CardActions_Component></CardActions_Component>
            </div>
          </div>
          
        </div>
        
      );
    };

    export default Card;

    