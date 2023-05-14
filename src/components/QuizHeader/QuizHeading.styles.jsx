import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const QuizHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QuizHeaderName = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

export const BackLink = styled(Link)`
  font-size: 2.2rem;
  font-family: inherit;
  color: #d3d8de;
  text-decoration: none;
`
