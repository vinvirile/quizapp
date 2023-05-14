import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Quiz from './routes/Quiz/Quiz'
import Result from './routes/Result/Result'
import QuizHeading from './components/QuizHeader/QuizHeading.component'

const App = () => {
  /*
    *USE STATE
    {
      quizData: [],
      session: []
    }
  */
  const [results, setResults] = useState({})

  return (
    <Routes>
      <Route path="/" element={<QuizHeading />}>
        <Route index element={<Quiz gradeQuizHandler={setResults} />} />
        <Route path="results" element={<Result results={results} />} />
      </Route>
    </Routes>
  )
}

export default App
