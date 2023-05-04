import { Link } from 'react-router-dom'
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
} from './Home.styles'

const Home = () => {
  return (
    <Card floatDown={true}>
      <QuizHeader>
        <QuizHeaderName>Quiz</QuizHeaderName>
        <BackLink to="">Back &gt;</BackLink>
      </QuizHeader>
      <Loader />
      <Question>
        What is the name of the painting that Yusuke's mother created?
      </Question>
      <AnswerChoices />
      <ButtonsContainer>
        <Button>Prev</Button>
        <Button buttonType="primary">Next</Button>
      </ButtonsContainer>
    </Card>
  )
}

export default Home
