import React, { useEffect, useState } from 'react'
import style from './Cadastro.module.css'
import Fundo from '../../components/Fundo';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export const Cadastro2 = () => {

  const navigate = useNavigate();

  const [generos, setGeneros] = useState([]);
  const { email } = useParams('')


  const extensiveBookGenres = [
    { genre: 'Ficção' },
    { genre: 'Distopia' },
    { genre: 'Romance' },
    { genre: 'Fantasia' },
    { genre: 'Aventura' },
    { genre: 'Sátira Política' },
    { genre: 'Sátira' },
    { genre: 'Realismo Mágico' },
    { genre: 'Épico' },
    { genre: 'Ficção Histórica' },
    { genre: 'Ficção Psicológica' },
    { genre: 'Thriller' },
    { genre: 'Terror' },
    { genre: 'Ficção Infantil' },
    { genre: 'Ficção Literária' },
    { genre: 'Não-ficção' },
    { genre: 'Memórias' },
    { genre: 'Crime' },
    { genre: 'Literatura Clássica' },
    { genre: 'Biografia' },
    { genre: 'Ensaios' },
    { genre: 'Poesia' },
    { genre: 'Romance Policial' },
    { genre: 'Literatura Juvenil' },
    { genre: 'Ficção Científica' },
    { genre: 'Ficção Espacial' },
    { genre: 'Graphic Novel' },
    { genre: 'Contos' },
    { genre: 'Novela' },
    { genre: 'Literatura Contemporânea' },
    { genre: 'Romance Histórico' },
    { genre: 'Romance de Fantasia' },
    { genre: 'Literatura Pós-Moderna' },
    { genre: 'Ficção de Espionagem' },
    { genre: 'Romance de Época' },
    { genre: 'Autoajuda' },
    { genre: 'Religião' },
    { genre: 'Espiritualidade' },
    { genre: 'Crítica Literária' },
    { genre: 'Jornalismo Literário' },
    { genre: 'Narrativa de Viagem' },
    { genre: 'Antologia' },
    { genre: 'Literatura Erótica' },
    { genre: 'História em Quadrinhos' },
    { genre: 'Tragédia' },
    { genre: 'Ficção Filosófica' },
    { genre: 'Ficção Experimental' },
    { genre: 'Literatura Policial' },
    { genre: 'Mistério' },
    { genre: 'Suspense' },
    { genre: 'Romance Contemporâneo' },
    { genre: 'Drama' },
    { genre: 'Jovem Adulto' },
    { genre: 'Literatura de Humor' },
    { genre: 'Literatura de Fantasia Urbana' },
    { genre: 'Científica' },
    { genre: 'Sociologia' },
    { genre: 'História' }
  ];


  const eventoSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_PEDRO_API + '/save-preference', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        genders: generos.map((genero) => { return genero.genre })
      })
    }).then(response => {
      if (response.status === 201 || response.status === 200) {
        navigate('/home');
      } else {
        alert('Erro ao cadastrar preferências');
      }
    }).catch(error => {
      console.log(error)
    })  

  }

  const tema = {
    btn: {
      backgroundColor: '#c3b390',
      fontFamily: 'Montserrat',
      color: '#2a2520',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      '&:hover': {
        backgroundColor: '#D9C7A0',
        // backgroundColor: 'blue',
      }
    },
    input: {
      width: '100%',
      fontFamily: 'Montserrat',
      '& .MuiInputBase-input': {
        color: 'white',  // Cor do texto do input
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'purple',  // Cor da borda do input
        },
        '&:hover fieldset': {
          borderColor: 'blue',  // Substitua por sua cor personalizada
        },
        '&.Mui-focused fieldset': {
          borderColor: 'purple',  // Substitua por sua cor personalizada
        },
      },
      '& .MuiInputLabel-root': {
        color: '#c3b390',  // Cor do texto do label
        fontWeight: 'bold',
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: '#c3b390',
        //Font wiegth normal
        fontWeight: '400',
      },
      '& .MuiInputBase-input::after': {
        color: 'white',  // Cor do texto do input
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'white', // Cor padrão da linha
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: 'white', // Cor ao passar o mouse
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white', // Cor quando focado
      }, '& .MuiChip-label': {
        color: 'white',
      }, '& .MuiChip-root': {
        color: 'white',
        backgroundColor: 'rgba(195, 179, 144, 0.6)',
      }, '& .MuiInputBase-formControl': {
        color: 'white'
      }, '& .MuiSvgIcon-root': {
        color: 'white'
      }
    }
  }

  useEffect(() => {
    console.log(generos);
  }, [generos])


  const [options, setOptions] = useState(extensiveBookGenres);
  const [selectedGenres, setSelectedGenres] = useState([]);

  return (
    <Fundo tipo='ESCURO' >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 0 }}>

        <div id={style.itens}>

          <div id={style.logo} />

          <div id={style.containerForm}>
            <form onSubmit={(e) => eventoSubmit(e)}>
              <Stack direction="column" spacing={20} sx={tema.input}>
                <h1>Quais gêneros literários você costuma ler ?</h1>

                <Autocomplete
                  sx={tema.input}
                  multiple
                  id="tags-standard"
                  options={extensiveBookGenres}
                  getOptionLabel={(option) => option.genre}
                  isOptionEqualToValue={(option, value) => option.genre === value.genre}
                  onChange={(key, value) => {
                    setGeneros(value);
                  }}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Gêneros favoritos"
                    />
                  )}
                />

                <Button variant="contained" sx={{ ...tema.btn, marginTop: '20vh', width: '10vw', alignSelf: 'center' }} type="submit">Cadastrar</Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
    </Fundo>
  )
}
export default Cadastro2;