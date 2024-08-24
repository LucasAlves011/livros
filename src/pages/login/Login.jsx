import { Button, TextField } from '@mui/material';
import style from './Login.module.css';

function Login() {
   return (
      <>
         <div className={style.login}>
            <h1>Login</h1>
            <form className={style.pagina}>
               <div id={style.loginSide}>
                  <TextField
                     id="outlined-basic"
                     label="Usuario"
                     variant="outlined"
                     type="email"
                     required
                  />
                  <TextField
                     id="outlined-basic"
                     label="Senha"
                     variant="outlined"
                     type="password"
                     required
                  />
                  <Button variant="contained" type="submit">Entrar</Button>
               </div>
               <div id={style.criarContaSide}>
                  <h2>Criar Conta</h2>
                  <Button variant="contained" color="primary">Criar conta</Button>
               </div>
            </form>
         </div>
      </>
   );
}

export default Login;
