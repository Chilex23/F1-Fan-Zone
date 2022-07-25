import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const NewsCard = ({ news }) => {
  const { title, urlToImage, source, url} = news;
  return (
    <Card sx={{ maxWidth: 300 }} className="cursor-pointer">
      <CardMedia
        component="img"
        height="150"
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
      <div className="flex justify-between px-2 divide-x-2">
        <p className='grow'>Source : {source.name} </p>
        <a href={`${url}`} target="blank" className="hover:text-red-500">Article Link</a>
      </div>
    </Card>
  );
}


export default NewsCard;