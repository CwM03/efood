import { Link } from 'react-router-dom'
import { BgHeader } from './styles'

import logo from '../../assets/images/logo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const operCart = () => {
    dispatch(open())
  }

  return (
    <BgHeader>
      <div className='container'>
        <Link to="/" style={{ textDecoration: 'none', color: '#E66767' }}>
          <p>Restaurantes</p>
        </Link>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <p onClick={operCart}>
          {items.length} produto(s)<br/>no carrinho
        </p>
      </div>
    </BgHeader>
  )
}

export default HeaderMenu
