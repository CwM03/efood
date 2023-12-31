import Tag from '../Tag'

import { Card, Titulo, Descricao, Note, Infos, SaibaMais } from './styles'

import star from '../../assets/images/star.png'
import { ButtonLink } from '../Button/styles'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  if (destacado === true) {
    return (
      <Card>
        <img src={capa} alt={titulo} />
        <Infos>
          <Tag>Destaque da semana</Tag>
          <Tag>{(tipo).charAt(0).toUpperCase() + (tipo).slice(1).toLowerCase()}</Tag>
        </Infos>
        <div>
          <Titulo>{titulo}</Titulo>
          <Note>
            {avaliacao}
            <img src={star} alt="Estrela" />
          </Note>
        </div>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <SaibaMais>
          <ButtonLink to={`/menus/${id}`}>Saiba mais</ButtonLink>
        </SaibaMais>
      </Card>
    )
  } else {
    return (
      <Card>
        <img src={capa} alt={titulo} />
        <Infos>
          <Tag>{(tipo).charAt(0).toUpperCase() + (tipo).slice(1).toLowerCase()}</Tag>
        </Infos>
        <div>
          <Titulo>{titulo}</Titulo>
          <Note>
            {avaliacao}
            <img src={star} alt="Estrela" />
          </Note>
        </div>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <SaibaMais>
          <ButtonLink to={`/menus/${id}`}>Saiba mais</ButtonLink>
        </SaibaMais>
      </Card>
    )
  }
}

export default Product
