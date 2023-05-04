import styled from 'styled-components'

export const ChoicesContainer = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  font-weight: bold;
`

export const ChoiceContainer = styled.label`
  display: flex;
  height: 4.8rem;
  align-items: center;
  &:hover {
    background-color: #d5d9e4;
    border-radius: 2rem;
  }
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const ChoiceRadio = styled.div``
export const ChoiceAnswer = styled.div`
  margin-left: 1.2rem;
`
export const ChoiceText = styled.span``
