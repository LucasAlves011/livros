import React, { useState } from 'react'
import style from './Cadastro.module.css'
import Fundo from '../../components/Fundo';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const eventoSubmit = (e) => {
    console.log(email);
    console.log(senha);

    fetch(process.env.REACT_APP_GATEWAY_URL + '/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        password: senha,
        email: email,
      })
    }).then(response => {
      if (response.status === 200) {
        alert("Cadastrado com sucesso")
        navigate('/login');
      } else if (response.status === 400) {
        console.log(response)
        response.json().then(data => {
          const a = "";
          data.errors.forEach(erro => {
            a += erro.message + '\n';
          });
        })
      } else {
        console.log(response)
        alert('Erro ao logar');
      }
    })

    e.preventDefault();

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

  return (
    <Fundo tipo='ESCURO' >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 0 }}>

        <div id={style.itens}>

          <div id={style.logo} />

          <div id={style.containerForm}>
            <form onSubmit={(e) => eventoSubmit(e)}>
              <Stack direction="column" spacing={3} sx={tema.input}>

                <TextField label="Usuário" variant="standard" sx={tema.input} id={style.textFields} onChange={(e) => setUsuario(e.target.value)} required />
                <TextField label="E-mail" type='email' variant="standard" sx={tema.input} id={style.textFields} onChange={(e) => setEmail(e.target.value)} required />
                {/* <TextField label="Data de Nascimento" type='date' variant="standard" sx={tema.input} id={style.textFields} onChange={(e) => setUsuario(e.target.value)} required /> */}

                <TextField label="Senha" variant="standard" type='password' sx={tema.input} id={style.textFields} onChange={(e) => setSenha(e.target.value)} required />
                <TextField label="Confirme sua senha" variant="standard" type='password' sx={tema.input} id={style.textFields} onChange={(e) => setConfirmaSenha(e.target.value)} required />

                {/* <Autocomplete
                  sx={tema.input}
                  multiple
                  id="tags-standard"
                  options={top100Films}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Livros lidos"
                    />
                  )}
                /> */}

                <Button variant="contained" sx={{ ...tema.btn, marginTop: '20vh', width: '10vw', alignSelf: 'center' }} type="submit">Cadastrar</Button>

              </Stack>
            </form>
          </div>
        </div>
      </div>
    </Fundo>
  )
}

export default Cadastro;