import { useReducer, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader.component'
import Button from '../../components/Button/Button.component'
import AnswerChoices from '../../components/AnswerChoices/AnswerChoices.component'

import { Question, ButtonsContainer, CountContainer } from './Quiz.styles'

import { quizData } from '../../react-js-quiz'

const hasUnansweredQuestions = (obj) => {
  for (let key in obj) {
    if (obj[key] === null) {
      return true
    }
  }
  return false
}

const gradeQuiz = (session, state, gradeQuizHandler) => {
  if (hasUnansweredQuestions(session) === true)
    return alert('All Questions must be answered!')
  let incorrectCount = 0
  for (let answerIdx in session) {
    console.log(answerIdx)
    console.log('Correct Answer:' + quizData[answerIdx].answer)
    console.log('Your Answer:' + session[answerIdx])
    if (quizData[answerIdx].answer !== session[answerIdx]) {
      incorrectCount++
    }
  }
  console.log(incorrectCount)
  const gradeMath = Math.floor(
    ((quizData.length - incorrectCount) / quizData.length) * 100
  )
  console.log(`Ratio: ${quizData.length - incorrectCount}/${quizData.length}`)
  console.log(`Grade: ${gradeMath}%`)
  alert(`Ratio: ${quizData.length - incorrectCount}/${quizData.length}`)
  alert(`Grade: ${gradeMath}%`)
  gradeQuizHandler({
    quizData,
    session,
  })
}

const QUIZ_ACTIONS = {
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREV_QUESTION: 'PREV_QUESTION',
}

const quizReducer = (state, action) => {
  const { type, payload } = action

  let currentInt = state.getArrayInt()

  switch (type) {
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        current: state.current + 1,
        question: quizData[currentInt + 1].question,
        multichoice: quizData[currentInt + 1].multichoice,
      }
    case QUIZ_ACTIONS.PREV_QUESTION:
      return {
        ...state,
        current: state.current - 1,
        question: quizData[currentInt - 1].question,
        multichoice: quizData[currentInt - 1].multichoice,
      }
  }
}

// creates session's initial object state
const quizInitialSession = {}
for (let i = 0; i <= quizData.length - 1; i++) {
  quizInitialSession[i] = null
}

const INITIAL_STATE = {
  current: 1,
  getArrayInt: function () {
    return this.current - 1
  },
  question: quizData[0].question,
  multichoice: quizData[0].multichoice,
}

const Quiz = ({ gradeQuizHandler }) => {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE)
  const [session, setSession] = useState(quizInitialSession)

  return (
    <>
      <CountContainer>
        <span className="current-question-number">{state.current}</span>
        <span className="divider">\</span>
        <span className="total-question-number">{quizData.length}</span>
      </CountContainer>
      <Loader val={[state.current, quizData.length]} />
      <Question>{state.question}</Question>
      <AnswerChoices
        val={state.multichoice}
        arrIdx={state.getArrayInt()}
        session={session}
        setSession={setSession}
      />
      <ButtonsContainer>
        <Button
          onClick={() => {
            dispatch({ type: 'PREV_QUESTION' })
          }}
          disabled={state.current === 1 ? true : false}
        >
          Prev
        </Button>

        {state.current === quizData.length ? (
          <>
            <Link to="results">
              <Button
                onClick={() => {
                  gradeQuiz(session, state, gradeQuizHandler)
                }}
                buttonType="primary"
                size="long"
              >
                Finish
              </Button>
            </Link>
          </>
        ) : (
          <Button
            onClick={() => {
              dispatch({ type: 'NEXT_QUESTION' })
            }}
            buttonType="primary"
            disabled={state.current === quizData.length}
            size="long"
          >
            Next
          </Button>
        )}
      </ButtonsContainer>
    </>
  )
}

export default Quiz
