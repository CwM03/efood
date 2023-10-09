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

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

    if (!restaurante) {
      return <h3>Carregando...</h3>
    }

    return (
    <>
      <HeaderMenu />
      <Hero restaurantes={restaurante} />
      {id !== undefined}
      <Menus>
        <div>
          <img
            src={restaurante.cardapio[Number(id)].foto}
            alt={restaurante.cardapio[Number(id)].nome}
          />
          <h1>{restaurante.cardapio[Number(id)].nome}</h1>
          <p>{restaurante.cardapio[Number(id)].descricao}</p>
          <ButtonContainer
            type="button"
            title="adicionar ao carrinho"
            className="botton"
            onClick={() => setModalIsOpen(true)}
          >
            Adicionar ao carrinho
          </ButtonContainer>
        </div>
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
              src={restaurante.cardapio[Number(id)].foto}
              alt={restaurante.cardapio[Number(id)].nome}
            />
            <div>
              <h4>{restaurante.cardapio[Number(id)].nome}</h4>
              <p>{restaurante.cardapio[Number(id)].descricao}</p>
              <p>Serve: {restaurante.cardapio[Number(id)].porcao}</p>
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
