import { React, useState } from 'react';

function Quadrado({ cor = 'blue', setNomeDaCorDoFilho }) {

   const [quadrado, setQuadrado] = useState('')

   const style = {
      width: '100px',
      height: '100px',
      backgroundColor: cor,
      cursor: 'pointer',
   }

   const handleClick = () => {
      setNomeDaCorDoFilho(cor)
   }

   return (
      <div style={style} onClick={() => handleClick()}>
         {quadrado}
      </div>
   );


}

export default Quadrado;