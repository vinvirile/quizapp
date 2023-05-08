import { Link } from 'react-router-dom'
import { useReducer, useState } from 'react'
import Card from '../../components/Card/Card.component'
import styled from 'styled-components'
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

const QUIZ_ACTIONS = {
  NEXT_QUESTION: 'NEXT_QUESTION',
  PREV_QUESTION: 'PREV_QUESTION',
}

const quizReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case QUIZ_ACTIONS.NEXT_QUESTION:
      return {
        current: state.current + 1,
        question: quizData[state.current].question,
        multichoice: quizData[state.current].multichoice,
      }
    case QUIZ_ACTIONS.PREV_QUESTION:
      return {
        current: state.current - 1,
        question: quizData[state.current - 1].question,
        multichoice: quizData[state.current - 1].multichoice,
      }
  }
}

const INITIAL_STATE = {
  current: 1,
  question: quizData[0].question,
  multichoice: quizData[0].multichoice,
}

const Home = () => {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE)

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
      <AnswerChoices val={state.multichoice} />
      <ButtonsContainer>
        <Button
          onClick={() => {
            dispatch({ type: 'PREV_QUESTION' })
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            dispatch({ type: 'NEXT_QUESTION' })
          }}
          buttonType="primary"
        >
          Next
        </Button>
      </ButtonsContainer>
    </Card>
  )
}

export default Home
