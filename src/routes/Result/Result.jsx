import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Loader from '../../components/Loader/Loader.component'
import { GradeContainer, CheckIcon, QuestionContainer } from './Result.styles'
import Button from '../../components/Button/Button.component'

const Result = ({ quizStatistics }) => {
  const navigate = useNavigate()

  const [QUIZ_INITIAL, results, grade] = quizStatistics

  useEffect(() => {
    if (Object.keys(results).length === 0 || QUIZ_INITIAL.length === 0) {
      navigate('../')
    }
  }, [])

  if (Object.keys(results).length === 0) {
    return (
      <>
        <h1>An Error has Occurred!</h1>
        <Link style={{ fontSize: '2rem', color: '#000' }} to="../">
          Go back!
        </Link>
      </>
    )
  }

  // console.log(quizStatistics)

  return (
    <>
      <h1>Results</h1>
      <GradeContainer>
        <span className="fraction">
          <span className="fraction-correct">
            {QUIZ_INITIAL.length - grade.incorrectCount}
          </span>
          <span className="fraction-divider">\</span>
          <span className="fraction-total">{QUIZ_INITIAL.length}</span>
        </span>
        <span className="grade-percentile">
          Grade: <span className="grade-percentile">{grade.percentile}%</span>
        </span>
      </GradeContainer>
      <Loader
        gradingStatus={true}
        val={[grade.correctCount, QUIZ_INITIAL.length]}
      />
      {QUIZ_INITIAL.map((piece) => {
        let i = piece.id - 1
        const isAnswerCorrect = piece.answer === results[i]

        return (
          <QuestionContainer key={piece.id}>
            <p className="question">{piece.question}</p>
            <p
              style={
                isAnswerCorrect ? { color: '#ff5160', fontWeight: 'bold' } : {}
              }
            >
              {isAnswerCorrect && <CheckIcon />}
              <span>Your Answer: {results[i]}</span>
            </p>
            {!isAnswerCorrect && (
              <div
                style={{
                  display: 'flex',
                  color: '#ff5160',
                  fontWeight: 'bold',
                }}
              >
                <span>Correct Answer: {piece.answer}</span>
              </div>
            )}
          </QuestionContainer>
        )
      })}
      <Link to="../">
        <Button>Retake Quiz</Button>
      </Link>
    </>
  )
}

export default Result
