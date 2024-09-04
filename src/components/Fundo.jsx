
import React from 'react';

import style from './Fundo.module.css';

function Fundo({ tipo = 'ESCURO', children }) {

   return (
      <div id={tipo === 'ESCURO' ? style.fundoEscuro : style.fundoClaro}>
         <section id={tipo === 'ESCURO' ? style.bordaEscura : style.bordaClara}>
            {children}
         </section>
      </div>
   );
}

export default Fundo;