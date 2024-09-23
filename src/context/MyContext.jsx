import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [exit, setExit] = useState(true);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageEmail = localStorage.getItem("@Auth:email");
      const storageToken = localStorage.getItem("@Auth:token");

      if (storageEmail && storageToken) {
        setEmail(storageEmail);
      }
    };
    loadingStoreData();
  }, []);


  const signIn = async (p_email, p_password) => {

    await fetch(process.env.REACT_APP_GATEWAY_URL + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: p_email,
        password: p_password
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      console.log('data');
      console.log(data);
      if (data.accessToken !== undefined && data.accessToken !== null) {
        setEmail(p_email);
        localStorage.setItem("@Auth:email", JSON.stringify(p_email));
        localStorage.setItem("@Auth:token", data.accessToken);
        setExit(true);
        < Navigate to={verificarSeExistePreferenciaCadastrada(p_email)} />;
      } else
        alert('Usuário ou senha inválidos');
    }).catch(error => {
      alert(error);
      return false;
    })
  }

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
    return a;
  }

  const singOut = async () => {
    console.log('sair');
    await localStorage.clear();
    await setEmail(null);
    await setExit(false);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        signIn,
        singOut,
        signed: !!email,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};