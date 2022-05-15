import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "../CSS/CardActions_CSS.css"

const CardActions_Component = () => {
  return (<div className='d-flex'>
    <CardActions disableSpacing>
      <div className='d-flex'>
        <div>
        <IconButton aria-label="add to favorites" /* color="error" */ className="R" >
          <FavoriteIcon />
        </IconButton>
        </div>
        <div>
        <IconButton aria-label="share" className="L">
          <ShareIcon />
        </IconButton>
        </div>
      </div>
    </CardActions>
  </div>);
}

export default CardActions_Component;