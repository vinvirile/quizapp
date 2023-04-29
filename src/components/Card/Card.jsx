import { CardContainer } from "./Card.styles"

const Card = ({ children }) => {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

export default Card