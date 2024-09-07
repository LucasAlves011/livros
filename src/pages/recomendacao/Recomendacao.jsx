import React, { useEffect, useState } from 'react'
import LivroCard from '../../components/LivroCard'
import { CardMedia, Stack } from '@mui/material'
import Fundo from '../../components/Fundo'
import style from './Recomendacao.module.css'

const Recomendacao = () => {

  const [livros, setLivros] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/livros')
      .then(response => response.json())
      .then(data => {
        setLivros(data)
      })
  }, [])


  return (

    <Fundo tipo='CLARO'>

      <div id={style.backgroundLogo}>
        <div id={style.logo} />
      </div>

      <div id={style.container}>

        <h2  className={style.h2Recomendacao} style={{ marginTop: '-5vh' }}>Recomendações</h2>
        <section className={style.secao}>
          {livros !== null && <Stack direction="row" gap={9} marginTop={4} flexWrap="wrap" marginBottom={10} >
            {
              livros.map((livro, index) => {
                return index < 4 && <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} imagem={livro.imagem} />
              })
            }
          </Stack>}
        </section >


        <h2 className={style.h2Recomendacao}>Biblioteca</h2>
        <section className={style.secao}>
          {livros !== null && <Stack direction="row" gap={4} marginTop={4} marginBottom={10} flexWrap="wrap" >
            {
              livros.map((livro, index) => {
                return index < 6 && <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} imagem={livro.imagem} biblioteca />
              })
            }
          </Stack>}
        </section>


      </div>

    </Fundo>
  )
}

export default Recomendacao