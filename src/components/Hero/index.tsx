import { Imagem } from './styles'

import { Restaurante } from '../../pages/Home'

type Props = {
  restaurantes: Restaurante
}

const Hero = ({ restaurantes }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurantes.capa})` }}>
    <div className="container">
      <h1>{(restaurantes.tipo).charAt(0).toUpperCase() + (restaurantes.tipo).slice(1).toLowerCase()}</h1>
      <div>
        <p>{restaurantes.titulo}</p>
      </div>
    </div>
  </Imagem>
)

export default Hero