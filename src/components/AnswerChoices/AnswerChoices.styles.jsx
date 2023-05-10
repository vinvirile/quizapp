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
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const ChoiceRadio = styled.div``
export const ChoiceAnswer = styled.div`
  ${(props) =>
    props.selected === true &&
    `
      display: inline-block;
      position: relative;
      &:before {
      content: ' ';
      display: block;
      height: 90%;
      width: 100%;
      margin-left: -3px;
      margin-right: -3px;
      position: absolute;
      background-color: #ff5160 !important;
      transform: rotate(2deg);
      top: -1px;
      left: -1px;
      border-radius: 20% 25% 20% 24%;
      padding: 10px 3px 3px 10px;
  }
    `}

  &:hover {
    display: inline-block;
    position: relative;
    &:before {
      content: ' ';
      display: block;
      height: 90%;
      width: 100%;
      margin-left: -3px;
      margin-right: -3px;
      position: absolute;
      background-color: #eee;
      transform: rotate(2deg);
      top: -1px;
      left: -1px;
      border-radius: 20% 25% 20% 24%;
      padding: 10px 4px 4px 10px;
    }
  }
`
export const ChoiceText = styled.span`
  position: relative;
`
