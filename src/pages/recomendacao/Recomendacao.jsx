import React from 'react'
import LivroCard from '../../components/LivroCard'
import { Stack } from '@mui/material'



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
    },
    {
      titulo: 'As Crônicas de Nárnia',
      favorito: false
    }

  ]

  return (
    <div>

      <h1>Recomendações</h1>
      <Stack direction="row" gap={4} marginLeft={5} marginTop={2} flexWrap="wrap" marginBottom={6} sx={{ margin: '5vw' }}>
        {
          livros.map((livro, index) => {
            return <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} />
          })
        }
      </Stack>

    </div>
  )
}

export default Recomendacao