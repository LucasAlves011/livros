import { Button, TextField } from '@mui/material';
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Fundo from '../../components/Fundo';
import { styled } from '@mui/system';
import { Navigate } from 'react-router-dom';

function Login() {

   const navigate = useNavigate();

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
         }
      }
   }

   const eventoSubmit = (evento) => {
      evento.preventDefault();
      // navigate('/home');
   }

   const cadastrar = (e) => {
      navigate('/cadastro');
   }


   return (
      <>
         <Fundo tipo='ESCURO' >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 0 }}>

               <div id={style.itens}>

                  <div id={style.logo} />

                  <h2>Descubra mundos,<br /> uma página de cada vez.</h2>

                  <div id={style.containerForm}>
                     <form action={(e) => eventoSubmit(e)}>

                        <TextField label="Usuário" variant="standard" sx={tema.input} id={style.textFields} required />

                        <TextField label="Senha" variant="standard" type='password' sx={tema.input} id={style.textFields} required />

                        <a href="/esqueci-senha">Esqueci minha senha</a>

                        <div id={style.botoes}>
                           <Button variant="contained" sx={tema.btn} type="submit">Entrar</Button>
                           <Button variant="contained" sx={tema.btn} onClick={(e) => cadastrar(e)}>Cadastre-se</Button>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
         </Fundo>
      </>
   );
}
export default Login;
