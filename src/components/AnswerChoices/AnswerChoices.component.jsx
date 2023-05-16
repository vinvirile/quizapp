import {
  ChoicesContainer,
  ChoiceContainer,
  ChoiceRadio,
  ChoiceAnswer,
  ChoiceText,
} from './AnswerChoices.styles'

const AnswerChoices = ({ val, arrIdx, session, setSession, gradingStatus }) => {
  // console.log(session)

  return (
    <ChoicesContainer>
      {val &&
        val.map((choice, idx) => (
          <ChoiceContainer
            style={gradingStatus && { cursor: 'default' }}
            key={idx}
          >
            <ChoiceRadio>
              <input
                onChange={() => {
                  setSession({ ...session, [arrIdx]: choice })
                }}
                type="radio"
                name={`${arrIdx}`}
                value={choice}
                checked={choice === session[arrIdx] ? true : false}
              />
            </ChoiceRadio>
            <ChoiceAnswer selected={choice === session[arrIdx] ? true : false}>
              <ChoiceText selected={choice === session[arrIdx] ? true : false}>
                {choice}
              </ChoiceText>
            </ChoiceAnswer>
          </ChoiceContainer>
        ))}
    </ChoicesContainer>
  )
}

export default AnswerChoices
