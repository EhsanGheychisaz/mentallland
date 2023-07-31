import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PersonalCard({img , caption}) {
  return (
    <Card sx={{ maxWidth: 256 }}>
      <CardActionArea>
        <img
          height="240"
          width="278"
          src={img}
          alt=""
        />
        <CardContent>
        <Typography sx={{fontFamily:"Alice" , fontSize:"13px",textAlign:"center",px:1 }}>{caption}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}