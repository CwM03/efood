import { Container } from './styles'

export type Props = {
  children: JSX.Element
}

const Menus = ({ children }: Props) => (
  <Container>
    <div className="container">{children}</div>
  </Container>
)

export default Menus
