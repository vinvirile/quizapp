import {
  ChoicesContainer,
  ChoiceContainer,
  ChoiceRadio,
  ChoiceAnswer,
  ChoiceText,
} from './AnswerChoices.styles'

const AnswerChoices = ({ val }) => {
  return (
    // <ChoicesContainer>
    //   <ChoiceContainer>
    //     <ChoiceRadio>
    //       <input type="radio" name="persona5quiz" value={1} />
    //     </ChoiceRadio>
    //     <ChoiceAnswer>
    //       <ChoiceText>Sakura</ChoiceText>
    //     </ChoiceAnswer>
    //   </ChoiceContainer>
    // </ChoicesContainer>
    <ChoicesContainer>
      {val &&
        val.map((choice, idx) => (
          <ChoiceContainer key={idx}>
            <ChoiceRadio>
              <input type="radio" name="persona5quiz" value={choice} />
            </ChoiceRadio>
            <ChoiceAnswer>
              <ChoiceText>{choice}</ChoiceText>
            </ChoiceAnswer>
          </ChoiceContainer>
        ))}
    </ChoicesContainer>
  )
}

export default AnswerChoices
