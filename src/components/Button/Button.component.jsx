import styled from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 2.4rem;
  border: none;
  border-radius: 0.6rem;
  padding: 1.2rem;
  ${(props) =>
    props.buttonType === 'primary' &&
    `
      background-color: #ff5160;
      color: #fff;
    `}
`

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>
}

export default Button
