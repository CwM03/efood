import { Link } from 'react-router-dom'
import { BgHeader } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <BgHeader>
    <Link to="/">
      <img src={logo} alt="eFood" />
    </Link>
    <p>
      Viva experiências gastronômicas
      <br />
      no conforto da sua casa
    </p>
  </BgHeader>
)

export default Header
