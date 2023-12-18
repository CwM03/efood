import { Link } from 'react-router-dom'
import * as S from './styles'

import logo from '../../assets/images/logo.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import X from '../../assets/images/x.png'

const Footer = () => (
  <S.BgFooter>
    <div className="container">
      <S.Logo>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
      </S.Logo>
      <S.SocialMidia>
        <img title='Visite nosso FaceBook' src={Facebook} alt="Facebook" />
        <img title='Visite nosso Instagram' src={Instagram} alt="Instagram" />
        <img title='Visite nosso X' src={X} alt="X" />
      </S.SocialMidia>
      <p>
        A eFood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega,
        <br />
        qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </S.BgFooter>
)

export default Footer
