import {
  ChoicesContainer,
  ChoiceContainer,
  ChoiceRadio,
  ChoiceAnswer,
  ChoiceText,
} from './AnswerChoices.styles'

const AnswerChoices = () => {
  return (
    <ChoicesContainer>
      <ChoiceContainer>
        <ChoiceRadio>
          <input type="radio" name="persona5quiz" value={1} />
        </ChoiceRadio>
        <ChoiceAnswer>
          <ChoiceText>Sakura</ChoiceText>
        </ChoiceAnswer>
      </ChoiceContainer>
      <ChoiceContainer>
        <ChoiceRadio>
          <input type="radio" name="persona5quiz" value={2} />
        </ChoiceRadio>
        <ChoiceAnswer>
          <ChoiceText>Sayuri</ChoiceText>
        </ChoiceAnswer>
      </ChoiceContainer>
      <ChoiceContainer>
        <ChoiceRadio>
          <input type="radio" name="persona5quiz" value={3} />
        </ChoiceRadio>
        <ChoiceAnswer>
          <ChoiceText>Sumire</ChoiceText>
        </ChoiceAnswer>
      </ChoiceContainer>
      <ChoiceContainer>
        <ChoiceRadio>
          <input type="radio" name="persona5quiz" value={4} />
        </ChoiceRadio>
        <ChoiceAnswer>
          <ChoiceText>Satsuki</ChoiceText>
        </ChoiceAnswer>
      </ChoiceContainer>
    </ChoicesContainer>
  )
}

export default AnswerChoices
