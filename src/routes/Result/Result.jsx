import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Result = ({ results }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(results).length === 0) {
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

  console.log(results)

  const { quizData, session } = results

  return (
    <>
      <h1>Results</h1>
      {/* Render the rest of your component */}
    </>
  )
}

export default Result
