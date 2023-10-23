import { Restaurante } from '../../pages/Home'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurante[]
}

const ProductsList = ({ restaurantes }: Props) => {
  return (
    <Container className="container">
      <div>
        <List>
          {restaurantes.map((restaurantes) => (
            <li key={restaurantes.id}>
              <Product
                id={restaurantes.id}
                titulo={restaurantes.titulo}
                destacado={restaurantes.destacado}
                tipo={restaurantes.tipo}
                avaliacao={restaurantes.avaliacao}
                descricao={restaurantes.descricao}
                capa={restaurantes.capa}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
