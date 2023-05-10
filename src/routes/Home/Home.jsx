import { useReducer, useState } from 'react'
import Card from '../../components/Card/Card.component'
import Loader from '../../components/Loader/Loader.component'
import Button from '../../components/Button/Button.component'
import AnswerChoices from '../../components/AnswerChoices/AnswerChoices.component'

import {
  QuizHeader,
  QuizHeaderName,
  Question,
  BackLink,
  ButtonsContainer,
  CountContainer,
} from './Home.styles'

import { quizData } from '../../react-js-quiz'

const hasUnansweredQuestions = (obj) => {
  for (let key in obj) {
    if (obj[key] === null) {
      return true
    }
  }
  return false
}

const gradeQuiz = (session, state) => {
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

const Home = () => {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE)
  const [session, setSession] = useState(quizInitialSession)

  return (
    <Card floatDown={true}>
      <QuizHeader>
        <QuizHeaderName>Quiz</QuizHeaderName>
        <BackLink to="">Back &gt;</BackLink>
      </QuizHeader>
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
          <Button
            onClick={() => gradeQuiz(session, state)}
            buttonType="primary"
            size="long"
          >
            Finish
          </Button>
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
    </Card>
  )
}

export default Home
