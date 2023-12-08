import { Container, Item } from './styles'

export type Props = {
  children: JSX.Element
}

const Menus = ({ children }: Props) => (
  <Container className="container">
    <Item>
      {children}
    </Item>
  </Container>
)

export default Menus