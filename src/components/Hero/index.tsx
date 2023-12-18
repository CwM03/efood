import { Image } from './styles'

import { Restaurante } from '../../pages/Home'

type Props = {
  restaurantes: Restaurante
}

const Hero = ({ restaurantes }: Props) => (
  <Image style={{ backgroundImage: `url(${restaurantes.capa})` }}>
    <div className="container">
      <h1>{(restaurantes.tipo).charAt(0).toUpperCase() + (restaurantes.tipo).slice(1).toLowerCase()}</h1>
      <div>
        <p>{restaurantes.titulo}</p>
      </div>
    </div>
  </Image>
)

export default Hero
