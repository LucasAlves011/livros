import { Button, TextField } from '@mui/material';
import style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import MyIcon from './reading-image.svg';

function Login() {

   const navigate = useNavigate();

   const logar = (e) => {
      {/* Aqui vai colocar a lógica de login */}
     navigate('/home');
   }

   return (
      <>
         <div className={style.login}>
            <form className={style.pagina}>

               <section id={style.loginSide}>
                  <h2 style={{ margin: '10px', fontSize: '2.2em' }}>Login</h2>
                  <div className={style.loginComponents}>
                     <TextField id="outlined-basic" label="Usuario" variant="standard" type="email" required />
                     <TextField id="outlined-basic" label="Senha" variant="standard" type="password" required />
                     <Link to="/esqueci-senha">Esqueci minha senha</Link>
                     <Button variant="contained" type="submit" onClick={() => {logar()}}>Entrar</Button>
                  </div>
               </section>

               <section id={style.criarContaSide}>
                  <div className={style.criarContaComponents}>
                     <img src={MyIcon} width='350vw' alt="Imagem de uma pessoa lendo" />
                     <article>Ainda não tem uma conta?<br />Clique aqui para se cadastrar e começar!</article>
                     <Link to='/cadastro' style={{ fontSize: '2em', color: 'white', fontWeight: 'bold' }}>
                        Criar conta
                     </Link>
                  </div>
               </section>
               
            </form>
         </div>
      </>
   );
}

export default Login;
