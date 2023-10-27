import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

import { useGetRestaurantsQuery } from '../../services/api'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header />
        <ProductsList restaurantes={restaurants} />
      </>
    )
  }
  return (
    <h4>Carregando...</h4>
  )
}

export default Home
