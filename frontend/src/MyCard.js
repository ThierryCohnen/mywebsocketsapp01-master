import React, { useState } from 'react';
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
  const [dp, setDp] = useState(true);
  let yes = Math.random()
  let green = `rgba(${Math.floor(Math.random() * 255 + 100)}, ${Math.floor(Math.random() * 255 + 50)}, ${Math.floor(Math.random() * 255 + 100)}, ${yes})`
  return (
    <div>
      { dp && <div>
        <Card className={classes.root} style={{ backgroundColor: green, height: 400 }}>
          <CardActionArea>
            <CardContent>
              <Typography style={{ fontSize: 16 }} gutterBottom variant="h5" component="h2">
                {props.element}
              </Typography>
              <Typography style={{ fontSize: 12 }} variant="body2" color="textSecondary" component="p">
                {props.el02} {props.el01}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={(e) => {
              props.onClick(props.elIndex);
            }}>
              Delete
        </Button>
          </CardActions>
        </Card>
      </div >
      }
    </div>
  );
}