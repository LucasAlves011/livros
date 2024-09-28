import { Button, TextField } from '@mui/material';
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Fundo from '../../components/Fundo';
import { styled } from '@mui/system';
import { Navigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/MyContext';


function Login() {

   const navigate = useNavigate();

   const { signIn, signed } = useContext(AuthContext);

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


   const cadastrar = (e) => {
      navigate('/cadastro');
   }

   const [email, setEmail] = useState('');
   const [password, setpassword] = useState('');

   const verificarSeExistePreferenciaCadastrada = async (p_email) => {

      var a;
      await fetch(process.env.REACT_APP_PEDRO_API + '/get-preference/' + p_email, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json'
         },
      }).then(response => {
         return response.json()
      }).then(data => {
         console.log('data');
         console.log(data);
         a = (data === true ? "/home" : ('/cadastro/' + p_email));
      })

      console.log('a');
      console.log(a);
      return a;
   }

   const handleSubmit = async (e) => {

      function contemCaracterEspecial(senha) {
         const regex = /[!@#$%^&*(),.?":{}|<>]/;
         return regex.test(senha);
      }

      //faça uma verificação de email e senha

      //verificar se a senha contem um caracter especial
      const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;



      if (email.length > 5 && password.length > 5 &&  contemCaracterEspecial(password)) {
         e.preventDefault();
         await signIn(email, password);
         if (localStorage.getItem("@Auth:email")) {
            await verificarSeExistePreferenciaCadastrada(email).then((a) => {
               navigate(a);
            });
         }
      } else {
         alert('Usuário ou senha inválidos');
      }
   };


   if (!signed) {
      return (
         <>
            <Fundo tipo='ESCURO' >
               <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', margin: 0 }}>

                  <div id={style.itens}>

                     <div id={style.logo} />

                     <h2 id={style.h2Login}>Descubra mundos,<br /> uma página de cada vez.</h2>

                     <div id={style.containerForm}>
                        <form onSubmit={(e) => handleSubmit(e)}>

                           <TextField label="Email" variant="standard" sx={tema.input} id={style.textFields} onChange={(e) => setEmail(e.target.value)} required />

                           <TextField label="Senha" variant="standard" type='password' sx={tema.input} id={style.textFields} onChange={(e) => setpassword(e.target.value)} required />

                           {/* <a href="/esqueci-password">Esqueci minha password</a> */}

                           <div id={style.botoes}>
                              <Button variant="contained" sx={tema.btn} type="submit">Entrar</Button>
                              <Button variant="contained" sx={tema.btn} onClick={(e) => cadastrar()}>Cadastre-se</Button>
                           </div>

                        </form>
                     </div>
                  </div>
               </div>
            </Fundo>
         </>
      );
   }
   else {
      // return <>Erro estranho</>
      return <Navigate to="/home" />;
   }
}
export default Login;
