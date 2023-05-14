import React from 'react'
import Card from '../Card/Card.component'
import { Outlet } from 'react-router-dom'
import { QuizHeader, BackLink, QuizHeaderName } from './QuizHeading.styles'

const QuizHeading = () => {
  return (
    <Card floatDown={true}>
      <QuizHeader>
        <QuizHeaderName>Quiz</QuizHeaderName>
        <BackLink to="">Back &gt;</BackLink>
      </QuizHeader>
      <Outlet />
    </Card>
  )
}

export default QuizHeading
