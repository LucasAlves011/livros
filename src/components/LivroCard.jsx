import { Card, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AuthContext } from '../context/MyContext';

const LivroCard = ({ livro, fav, syncFav }) => {

  const [open, setOpen] = useState(false);
  const { email } = useContext(AuthContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [favoritado, setFavoritado] = useState(fav ? true : false)

  const titulo = !fav ? livro.title : livro.nomeLivro
  const autores = !fav ? livro.authors.reduce((a, b) => (a + ', ' + b)) : livro.authors
  const imagem = !fav ? (livro.imageLinks !== null ? livro.imageLinks.thumbnail : 'teste') : livro.imagemUrl
  const id = !fav ? livro.id : livro.idLivro
  const isbn = livro.isbn
  const biblioteca = false
  const resumo = livro.resumo
  const publishedDate = !fav ? livro.publishedDate && livro.publishedDate.substring(0, 4) : livro.anoLancamento

  const jsonBody = {
    email: (email !== null && email.replace(/"/g, '')),
    livros: [
      {
        idLivro: id,
        nomeLivro: titulo,
        resumo: resumo,
        anoLancamento: publishedDate,
        authors: [autores],
        imagemUrl: imagem
      }
    ]
  }

  const favoritar = async () => {
    var retorno;
    await fetch(process.env.REACT_APP_PEDRO_API + '/save-favorite-book', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(jsonBody)
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log('data');
      console.log(data);
      retorno = data ? true : false;
      if (data) {
        retorno = true;
        syncFav(data.livros)
      } else {
        retorno = false
      }
    })
    return retorno;
  }

  const removerFavorito = async () => {
    var retorno;
    await fetch(process.env.REACT_APP_PEDRO_API + '/remove-book', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: (email !== null && email.replace(/"/g, '')),
        idLivro: id
      })
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log('data');
      console.log(data);
      retorno = data ? true : false;
      if (data) {
        retorno = true;
        syncFav(data.livros ? data.livros : [])
      } else {
        retorno = false
      }
    })
    return retorno;
  }

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
          onClick={() => {
            if (!favoritado)
              favoritar() ? setFavoritado(true) : setFavoritado(false)
            else
              removerFavorito() ? setFavoritado(false) : setFavoritado(true)
          }}
        >
          {!favoritado ? <FavoriteBorderIcon sx={{ fontSize: '1.5em' }} /> : <FavoriteIcon sx={{ fontSize: '1.5em', color: '#ff3040' }} />}
        </IconButton>

        <DialogTitle sx={{ margin: 'auto', fontFamily: 'Montserrat' }} variant='h5'>{titulo}</DialogTitle>
        <DialogContent >
          <CardMedia
            sx={{ height: '50vh', aspectRatio: '2 / 3', zIndex: 2, margin: 'auto', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
            image={imagem}
            title="teste"

          />
          <Typography variant="body1" sx={{ marginTop: '15px', fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Autor:</strong> {autores}</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Ano de Lançamento:</strong> {publishedDate}</Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}><strong style={{ fontFamily: 'Montserrat' }}>Gêneros:</strong> Ficção, Aventura</Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', fontFamily: 'Montserrat' }}>
            <strong style={{ fontFamily: 'Montserrat' }}>Resumo:</strong> {resumo}
          </Typography>
        </DialogContent>
      </Dialog>
    </div >

  );
}

export default LivroCard