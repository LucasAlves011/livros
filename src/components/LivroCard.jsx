import { Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const LivroCard = ({ titulo, favorito, imagem, biblioteca = false }) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [favoritado, setFavoritado] = useState(false)


  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Montserrat' }}>
      <Card sx={{
        width: biblioteca ? '11vw' : '18vw', height: 'auto', borderRadius: biblioteca ? '25px' : '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
        },

      }} onClick={handleClickOpen} variant="outlined">

        < div style={{ width: '100%', margin: 0, padding: 0 }}>
          <CardMedia
            sx={{ width: '100%', aspectRatio: '2 / 3', zIndex: 2 }}
            image={imagem}
            title="teste"
          />
        </div>

      </Card >
      <Typography variant='h5' style={{ margin: 'auto', paddingTop: '15px', width: 'auto', maxWidth: biblioteca ? '10vw' : '18vw', fontSize: biblioteca ? '1.1em' : '1.7em', fontFamily: 'MontSerrat' }} component="div">
        {titulo}
      </Typography>

      <Dialog open={open} onClose={handleClose} sx={{ fontFamily: 'Montserrat' }}>
        <IconButton
          sx={{
            position: 'absolute',
            bottom: '88%',
            right: '20px',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }}
          onClick={() => setFavoritado(!favoritado)}
        >
          {favoritado ? <FavoriteBorderIcon sx={{ fontSize: '1.5em' }} /> : <FavoriteIcon sx={{ fontSize: '1.5em', color: '#ff3040' }} />}
        </IconButton>

        <DialogTitle sx={{ margin: 'auto', fontFamily: 'Montserrat' }} variant='h5'>{titulo}</DialogTitle>
        <DialogContent >
          <CardMedia
            sx={{ height: '50vh', aspectRatio: '2 / 3', zIndex: 2, margin: 'auto', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
            image={imagem}
            title="teste"

          />
          <Typography variant="body1" sx={{ marginTop: '15px', fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Autor:</strong> Nome Author</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Ano de Lançamento:</strong> 2024</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Gêneros:</strong> Ficção, Aventura</Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', fontFamily: 'Montserrat' }}>
            <strong style={{ fontFamily: 'Montserrat' }}>Resumo:</strong> Este livro conta a história de um herói em uma jornada épica
            para salvar o mundo enquanto enfrenta seus próprios demônios e dilemas pessoais.
          </Typography>
        </DialogContent>
      </Dialog>
    </div >

  );
}

export default LivroCard