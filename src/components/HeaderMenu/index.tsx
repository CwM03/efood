import { Link } from 'react-router-dom'
import { BgHeader } from './styles'

import logo from '../../assets/images/logo.png'

const HeaderMenu = () => (
  <BgHeader>
    <div className='container'>
      <Link to="/" style={{ textDecoration: 'none', color: '#E66767' }}>
        <p>Restaurantes</p>
      </Link>
      <Link to="/">
        <img src={logo} alt="eFood" />
      </Link>
      <p>
        0 produto(s) no carrinho
      </p>
    </div>
  </BgHeader>
)

export default HeaderMenu
