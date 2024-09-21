import React, { useState } from "react";
import Quadrado from "./Quadrado";


function Teste() {

   const email = "lucas@gmail.com"

   const [nomeDaCorDoFilho, setNomeDaCorDoFilho] = useState('')

   const teste = () => {
      fetch(process.env.REACT_APP_PEDRO_API + '/get-preference/' + email, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json'
         },
      }).then(response => {
         return response.json()
      }).then(data => {
         console.log(data)
      }
      ).catch(error => {
         console.log(error)
      })
   }

   const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '10px'
   }


   return (

      <div style={style}>

         <h1>{nomeDaCorDoFilho}</h1>
         <button onClick={teste}>click</button>

         <Quadrado cor="red" setNomeDaCorDoFilho={setNomeDaCorDoFilho} />
         <Quadrado setNomeDaCorDoFilho={setNomeDaCorDoFilho}/>
      </div>

   );
}

export default Teste;