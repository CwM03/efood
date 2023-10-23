import aaaa from '../../assets/images/pizza.png'

import { Overlay, CartContainer, Sidebar, CartItem, Dump } from './styles'
import { ButtonLink } from "../Button/styles"
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }
    
    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.cardapio.preco!)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.cardapio.id}>
                        <img src={item.cardapio.foto} alt={item.cardapio.nome} />
                        <div>
                            <h3>{item.cardapio.nome}</h3>
                            <span>{(item.cardapio.preco).toFixed(2).replace('.', ',')}</span>
                        </div>
                        <Dump>
                            <button type="button" onClick={() => removeItem(item.id)}></button>
                        </Dump>
                    </CartItem>
                    ))}
                </ul>
                <p>Valor total <span>{getTotalPrice()}</span></p>
                <ButtonLink to={`/`} className="botton" title="Clique aqui para continuar com a compra" type="button">Continuar com a entrega</ButtonLink>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
