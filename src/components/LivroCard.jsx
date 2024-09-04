import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const LivroCard = ({ titulo, favorito }) => {

  return (
    <Card sx={{ width: '20vw', height: '50vh' }} variant="outlined">

      <div >
        <CardMedia
          sx={{ height: '100%', width: '100%', zIndex: 2 }}
          image="https://picsum.photos/200/300"
          title="teste"
        />

      </div>

      <CardContent style={{ padding: 0, alignContent: 'center', width: '20%', height: '70%' }} >
        <IconButton aria-label="teste">
          {favorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around', width: 250, height: 110 }}>

          <abbr title="teste" style={{ textDecoration: 'none', textAlign: 'center', overflow: 'hidden' }}>
            <Typography variant='h5' style={{ margin: '0px auto 0px auto', padding: 'auto auto auto auto', width: 'auto', fontSize: '19px', }} component="div">
              {titulo}
            </Typography>
            <Typography style={{ margin: '0px auto 0px auto', padding: 'auto auto auto auto', width: 'auto', fontSize: '15px', }} component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deserunt, vero iusto ab accusamus voluptatem libero accusantium sed facilis, impedit dolor nostrum nihil, quaerat facere beatae veniam quam optio explicabo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia, facilis quo, veniam tenetur ratione explicabo voluptas ipsa incidunt cupiditate eum fugiat vel? Accusamus dolores quo tempora repellat dicta harum.
            </Typography>
          </abbr>

        </div>
      </CardContent>

    </Card>

  );
}

export default LivroCard