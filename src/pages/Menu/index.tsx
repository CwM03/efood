import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

import HeaderMenu from '../../components/HeaderMenu'
import Hero from '../../components/Hero'
import Menus from '../../components/Menus'
import { ButtonContainer, ButtonLink } from '../../components/Button/styles'
import { Modal, ModalContent } from './styles'
import fechar from '../../assets/images/close.png'

const Menu = () => {
  const { id } = useParams()
  const [ModalIsOpen, setModalIsOpen] = useState(false)
  const [ModalMenuFoto, setModalMenuFoto] = useState('')
  const [ModalMenuName, setModalMenuName] = useState('')
  const [ModalMenuDescription, setModalMenuDescription] = useState('')
  const [ModalMenuServe, setModalMenuServe] = useState('')

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 127) + '...'
    }
    return descricao
  }
  
  const menuItems = restaurante.cardapio.map((restaurantes) => (
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
        }}>
        Adicionar ao carrinho
      </ButtonContainer>
    </div>
  ))

  return (
    <>
      <HeaderMenu />
      <Hero restaurantes={restaurante} />
      <Menus>
        <>
          {menuItems}
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
              <ButtonLink to={`/`} className="botton">
                Adicionar ao carrinho
              </ButtonLink>
            </div>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Menu
