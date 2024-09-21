import React, { useEffect, useState } from 'react'
import LivroCard from '../../components/LivroCard'
import { CardMedia, Stack } from '@mui/material'
import Fundo from '../../components/Fundo'
import style from './Recomendacao.module.css'

const Recomendacao = () => {

  // const [livros, setLivros] = useState(null)
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    // fetch('.app/')
    //   .then(response => response.json())
    //   .then(data => {
    //     setLivros(data)
    //   })
  }, [])

  //adicionar favorito ao clicar no botao
  const adicionarFavorito = (livro) => {
    setFavoritos([...favoritos, livro])
  }


  const livros = [
    {
      titulo: 'O Senhor dos Anéis',
      favorito: true,
      imagem: 'https://m.media-amazon.com/images/I/71ZLavBjpRL._SY466_.jpg'
    },
    {
      titulo: 'Harry Potter',
      favorito: false,
      imagem: 'https://books.google.com.br/books/publisher/content?id=GjgQCwAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U32CKE-XFfMvnbcz1qW0PS46Lg-Ew&w=1280'
    },
    {
      titulo: 'O Pequeno Príncipe',
      favorito: false,
      imagem: 'https://m.media-amazon.com/images/I/41GrIdsiEIL._SY445_SX342_.jpg'
    },
    {
      titulo: 'Dom Quixote',
      favorito: false,
      imagem: 'https://www.lpm.com.br/livros/Imagens/dom_quixote_hq_9788525433633_g.jpg'
    },
    {
      titulo: 'As Crônicas de Nárnia',
      favorito: false,
      imagem: 'https://m.media-amazon.com/images/I/51+2QAB7I+L._SY445_SX342_.jpg'
    }

  ]

  return (

    <Fundo tipo='CLARO'>

      <div id={style.backgroundLogo}>
        <div id={style.logo} />
      </div>

      <div id={style.container}>

        <h2 className={style.h2Recomendacao} style={{ marginTop: '-5vh' }}>Recomendações</h2>
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
                return index < 6 && index > 2 && <LivroCard key={index} titulo={livro.titulo} favorito={livro.favorito} imagem={livro.imagem} biblioteca  />
              })
            }
          </Stack>}
        </section>


      </div>

    </Fundo>
  )
}

export default Recomendacao