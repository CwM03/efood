import { Link } from 'react-router-dom'
import { BgHeader } from './styles'

import logo from '../../assets/images/logo.png'

const HeaderMenu = () => (
  <BgHeader>
    <p>
      Restaurantes
    </p>
    <Link to="/">
      <img src={logo} alt="eFood" />
    </Link>
    <p>
      0 produto(s) no carrinho
    </p>
  </BgHeader>
)

export default HeaderMenu
