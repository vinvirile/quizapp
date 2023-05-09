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

import { quizData } from '../../persona-5-quiz'

const gradeQuiz = () => {
  return alert(null)
}

const QUIZ_ACTIONS = {
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREV_QUESTION: 'PREV_QUESTION',
}

const quizReducer = (state, action) => {
  const { type, payload } = action

  let currentInt = state.getArrayInt()
  console.log(currentInt)

  /*Fix this*/
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
    case QUIZ_ACTIONS.UPDATE_SESSION:
      console.log('update session booped')
      return {
        ...state,
        // ...payload,
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
  /* 
    Array Format Example:
    {
      0: 'answer',
      1: 'answer',
      2: 'answer',
      ...ect
    }

  */
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
          <Button onClick={gradeQuiz} buttonType="primary" size="long">
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
