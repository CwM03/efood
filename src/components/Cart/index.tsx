import { Overlay, CartContainer, Sidebar, CartItem } from './styles'
import { ButtonLink } from "../Button/styles"
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { CardapioItem } from '../../pages/Home'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }
    
    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = (items: CardapioItem[]) => {
        return items.reduce((acumulador, valorAtual) => {
            if (valorAtual.preco) {
                return (acumulador += valorAtual.preco)
            }
            return 0
        }, 0);
    };

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <div key={item.id}>
                                <img src={item.foto} alt={item.foto} />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <span>R${(item.preco).toFixed(2).replace('.', ',')}</span>
                                    <button type="button" onClick={() => removeItem(item.id)}></button>
                                </div>
                            </div>
                        </CartItem>
                    ))}
                </ul>
                <p>Valor total <span>R${getTotalPrice(items).toFixed(2).replace('.', ',')}</span></p>
                <ButtonLink to={`/`} className="botton" title="Clique aqui para continuar com a compra" type="button">Continuar com a entrega</ButtonLink>
			</Sidebar>
        </CartContainer>
    )
}

export default Cart
