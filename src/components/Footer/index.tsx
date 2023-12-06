import { Link } from 'react-router-dom'
import { BgFooter, Logo, RedesSociais } from './styles'

import logo from '../../assets/images/logo.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import X from '../../assets/images/x.png'

const Footer = () => (
  <BgFooter>
    <div className="container">
      <Logo>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
      </Logo>
      <RedesSociais>
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
        <img src={X} alt="X" />
      </RedesSociais>
      <p>
        A eFood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega,
        <br />
        qualidade dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </BgFooter>
)

export default Footer
