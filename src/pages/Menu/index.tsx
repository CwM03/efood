import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

import HeaderMenu from '../../components/HeaderMenu'
import Hero from '../../components/Hero'
import Menus from '../../components/Menus'
import { ButtonContainer, ButtonLink } from '../../components/Button/styles'
import { Modal, ModalContent } from './styles'
import fechar from '../../assets/images/close.png'
import { useGetMenuQuery } from '../../services/api'
import Cart from '../../components/Cart'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type Props = {
  restaurante: Restaurante
}

const Menu = ({ restaurante }: Props) => {
  const { id } = useParams()
  const { data: menu } = useGetMenuQuery(id!)

  const [ModalIsOpen, setModalIsOpen] = useState(false)
  const [ModalMenuFoto, setModalMenuFoto] = useState('')
  const [ModalMenuName, setModalMenuName] = useState('')
  const [ModalMenuDescription, setModalMenuDescription] = useState('')
  const [ModalMenuServe, setModalMenuServe] = useState('')
  const [ModalMenuPrice, setModalMenuPrice] = useState(Number)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(restaurante))
    dispatch(open())
  }
  
  if (menu) {
    const getDescricao = (descricao: string) => {
      if (descricao.length > 130) {
        return descricao.slice(0, 127) + '...'
      }
      return descricao
    }
    
    const menuItems = menu.cardapio.map((restaurantes) => (
      <div key={restaurantes.id}>
        <img src={restaurantes.foto} alt={restaurantes.nome} />
        <h1>{restaurantes.nome}</h1>
        <p>{getDescricao(restaurantes.descricao)}</p>
        <ButtonContainer
          type="button"
          title="adicionar ao carrinho"
          className="botton"
          onClick={() => {
            setModalIsOpen(true)
            setModalMenuFoto(restaurantes.foto)
            setModalMenuName(restaurantes.nome)
            setModalMenuDescription(restaurantes.descricao)
            setModalMenuServe(restaurantes.porcao)
            setModalMenuPrice(restaurantes.preco)
          }}>
          Adicionar ao carrinho
        </ButtonContainer>
      </div>
    ))
    return (
      <>
        <HeaderMenu />
        <Cart />
        <Hero restaurantes={menu} />
        <Menus>
          <>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </>
        </Menus>
        <Modal className={ModalIsOpen ? 'visible' : ''}>
          <ModalContent className="container">
            <header>
              <img
                src={fechar}
                alt="fechar"
                onClick={() => setModalIsOpen(false)}
              />
            </header>
            <div>
              <img
                src={ModalMenuFoto}
                alt={ModalMenuName}
              />
              <div>
                <h4>{ModalMenuName}</h4>
                <p>{ModalMenuDescription}</p>
                <p>Serve: {ModalMenuServe}</p>
                <button type='button' className="botton" onClick={() => {addToCart();setModalIsOpen(false)}}>
                  Adicionar ao carrinho - R${(ModalMenuPrice).toFixed(2).replace('.', ',')}
                </button>
              </div>
            </div>
          </ModalContent>
          <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
        </Modal>
      </>
    )
  }
  return (
    <h3>Carregando...</h3>
  )
}

export default Menu
