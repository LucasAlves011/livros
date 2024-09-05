import React from 'react'
import LivroCard from '../../components/LivroCard'
import { Stack } from '@mui/material'
import Fundo from '../../components/Fundo'
import style from './Recomendacao.module.css'

const Recomendacao = () => {

  const livros = [
    {
      titulo: 'O Senhor dos Anéis',
      favorito: true
    },
    {
      titulo: 'Harry Potter',
      favorito: false
    },
    {
      titulo: 'O Pequeno Príncipe',
      favorito: false
    },
    {
      titulo: 'Dom Quixote',
      favorito: false
    }
  ]

  return (

    <Fundo tipo='CLARO'>

      <div id={style.backgroundLogo}>
          <div id={style.logo} />
        </div>
      <div id={style.container}>



        <section id={style.recomendacao}>
          <h2>Recomendações</h2>
          <Stack direction="row" gap={4} marginLeft={5} marginTop={2} flexWrap="wrap" marginBottom={6} sx={{ margin: '5vw' }}>
            {
              livros.map((livro, index) => {
                return <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} />
              })
            }
          </Stack>

        </section >


        <section id={style.biblioteca}>
          <h2>Biblioteca</h2>
          <Stack direction="row" gap={4} marginLeft={5} marginTop={2} flexWrap="wrap" marginBottom={6} sx={{ margin: '5vw' }}>
            {
              livros.map((livro, index) => {
                return <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} />
              })
            }
          </Stack>
        </section>
      </div>


    </Fundo>
  )
}

export default Recomendacao