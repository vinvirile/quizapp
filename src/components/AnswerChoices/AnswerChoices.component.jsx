import {
  ChoicesContainer,
  ChoiceContainer,
  ChoiceRadio,
  ChoiceAnswer,
  ChoiceText,
} from './AnswerChoices.styles'

const AnswerChoices = ({ val, arrIdx, session, setSession }) => {
  console.log(session)

  return (
    <ChoicesContainer>
      {val &&
        val.map((choice, idx) => (
          <ChoiceContainer key={idx}>
            <ChoiceRadio>
              <input
                onClick={() => {
                  // session[arrIdx] = choice
                  setSession({ ...session, [arrIdx]: choice })
                }}
                type="radio"
                name={`${arrIdx}`}
                value={choice}
                checked={choice === session[arrIdx] ? true : false}
              />
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
