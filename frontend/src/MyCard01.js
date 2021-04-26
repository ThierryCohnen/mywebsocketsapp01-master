import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
// let element = 'vilain';
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          {/* <CardMedia
            // component="txt"
            // component="img"

            // alt="Contemplative Reptile"
            // height="140"
            // image="https://i.pinimg.com/originals/60/04/19/6004197631e78af8d77b729c1f9d5678.jpg"
            // image="/static/images/cards/contemplative-reptile.jpg"

            // title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.element}
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.el02} {props.el01}
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </div>
  );
}