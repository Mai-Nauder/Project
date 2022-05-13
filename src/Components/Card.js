const Card = () => {
    //   const  divCardStyle={
    //     width: 288 style={divCardStyle}
    //     };
      return (
        <div>
          <div className="card mt-3" >
            <img src="https://img.ltwebstatic.com/images3_pi/2021/05/21/16215626666dd0dbc568090caacb1721793afb5b3a_thumbnail_405x552.webp" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      );
    };

    export default Card;