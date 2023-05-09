import styled from 'styled-components'

const ButtonStyled = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: 2.4rem;
  border: none;
  border-radius: 0.6rem;
  padding: 1.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${(props) =>
    props.buttonType === 'primary' &&
    `
      background-color: #ff5160;
      color: #fff;
    `}

  ${(props) =>
    props.size === 'long' &&
    `
    width: 10rem;

  `}
`

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>
}

export default Button
