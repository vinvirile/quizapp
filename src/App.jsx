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
  const [quizStatistics, setQuizStatistics] = useState([{}, {}])

  return (
    <Routes>
      <Route path="/" element={<QuizHeading />}>
        <Route index element={<Quiz gradeQuizHandler={setQuizStatistics} />} />
        <Route
          path="results"
          element={<Result quizStatistics={quizStatistics} />}
        />
      </Route>
    </Routes>
  )
}

export default App
