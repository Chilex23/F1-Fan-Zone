import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, urlToImage, source, url} = news;
  return (
    <Card sx={{ maxWidth: 300 }} className="cursor-pointer">
      <CardMedia
        component="img"
        height="140"
        image={urlToImage}
        alt="news item"
        className="h-2/4"
      />
      <CardContent>
        <Typography gutterBottom paragraph component="div" className="text-red-500 uppercase">
          News
        </Typography>
        <Typography paragraph className="font-extrabold text-3xl">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <p> Source: {source.name}</p>
        <Link to={url}>Link to Article</Link>
      </CardActions>
    </Card>
  );
}


export default NewsCard;