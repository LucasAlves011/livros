import React, { useContext, useEffect, useState } from 'react'
import LivroCard from '../../components/LivroCard'
import { CardMedia, IconButton, Skeleton, Stack } from '@mui/material'
import Fundo from '../../components/Fundo'
import style from './Recomendacao.module.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { AuthContext } from '../../context/MyContext'
import { Navigate } from 'react-router-dom'

const Recomendacao = () => {

  const { email, singOut } = useContext(AuthContext)

  const [livros, setLivros] = useState([])
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    if (email === null)
      return
    fetch(process.env.REACT_APP_PEDRO_API + '/get-favorite/' + email.replaceAll(/"/g, ''), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      console.log('dataFavoritos')
      console.log(data)
      if (data !== null) {
        setFavoritos(data.livros)
      }
    })
  }, [email])

  useEffect(() => {
    if (email === null)
      return
    fetch(process.env.REACT_APP_PEDRO_API + '/get-recomendation/' + email.replaceAll(/"/g, ''), {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(data => {
      if (data !== null && data !== undefined) {
        console.log('data')
        console.log(data)
        setLivros(data)
      }
    })
  }, [email])

  return (

    <Fundo Fundo tipo='CLARO' >
      <IconButton style={{ position: 'absolute', right: '20', top: '50' }} onClick={() => {
        singOut();
      }} >
        <ExitToAppIcon />
      </IconButton>

      <div id={style.backgroundLogo}>
        <div id={style.logo} />
      </div>

      <div id={style.container}>

        <h2 className={style.h2Recomendacao} style={{ marginTop: '-5vh' }}>Recomendações</h2>
        <section className={style.secao && style.secao}>
          {livros !== undefined && livros !== null && livros.length > 0 ? <Stack direction="row" gap={9} marginTop={4} flexWrap="wrap" marginBottom={10} >
            {
              livros.map((livro, index) => {
                console.log(livro)
                return index < 4 && <LivroCard key={livro.id} livro={livro} syncFav={setFavoritos} />
              })}
          </Stack> :
            < Stack direction="row" gap={9} marginTop={4} flexWrap="wrap" marginBottom={10} >
              <Skeleton variant="rectangular" width={'18vw'} height={'400px'} />
              <Skeleton variant="rectangular" width={'18vw'} height={'400px'} />
              <Skeleton variant="rectangular" width={'18vw'} height={'400px'} />
              <Skeleton variant="rectangular" width={'18vw'} height={'400px'} />
            </Stack>
          }
        </section >


        <h2 className={style.h2Recomendacao}>Biblioteca</h2>
        <section className={style.secao && style.secao}>
          {favoritos !== undefined && favoritos.length > 0 ? <Stack direction="row" gap={4} marginTop={4} marginBottom={10} flexWrap="wrap" >
            {
              favoritos.map((livro, index) => {
                return <LivroCard key={livro.id} livro={livro} syncFav={setFavoritos} fav />
              })
            }
          </Stack>
            :
            <CardMedia>
              <div style={{ margin: 'auto', height: '200px', alignContent: 'center' }}>
                Tá meio vazio por aqui né...
              </div>

            </CardMedia>}
        </section>

      </div>

    </Fundo >
  )
}

export default Recomendacao