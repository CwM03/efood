import Tag from '../Tag'

import * as S from './styles'

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
  const getDescription = (text: string) => {
    if (text.length > 95) {
      return text.slice(0, 92) + '...'
    }
    return text
  }

  if (destacado === true) {
    return (
      <S.Card>
        <img src={capa} alt={titulo} />
        <S.Infos>
          <Tag>Destaque da semana</Tag>
          <Tag>{(tipo).charAt(0).toUpperCase() + (tipo).slice(1).toLowerCase()}</Tag>
        </S.Infos>
        <div>
          <S.Title>{titulo}</S.Title>
          <S.Note>
            {avaliacao}
            <img src={star} alt="Estrela" />
          </S.Note>
        </div>
        <S.Description>{getDescription(descricao)}</S.Description>
        <S.KnowMore>
          <ButtonLink to={`/menus/${id}`}>Saiba mais</ButtonLink>
        </S.KnowMore>
      </S.Card>
    )
  } else {
    return (
      <S.Card>
        <img src={capa} alt={titulo} />
        <S.Infos>
          <Tag>{(tipo).charAt(0).toUpperCase() + (tipo).slice(1).toLowerCase()}</Tag>
        </S.Infos>
        <div>
          <S.Title>{titulo}</S.Title>
          <S.Note>
            {avaliacao}
            <img src={star} alt="Estrela" />
          </S.Note>
        </div>
        <S.Description>{getDescription(descricao)}</S.Description>
        <S.KnowMore>
          <ButtonLink to={`/menus/${id}`}>Saiba mais</ButtonLink>
        </S.KnowMore>
      </S.Card>
    )
  }
}

export default Product
