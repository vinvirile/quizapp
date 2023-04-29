import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card.component'
import styled from 'styled-components'
import Loader from '../../components/Loader/Loader.component'

const QuizHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const QuizHeaderName = styled.span`
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const BackLink = styled(Link)`
  font-size: 2.2rem;
  font-family: inherit;
  color: #d3d8de;
  text-decoration: none;
`

const Question = styled.span`
  font-size: 3.6rem;
  font-weight: bold;
`

const ChoicesContainer = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  font-weight: bold;
`

const ChoiceContainer = styled.label`
  display: flex;
  height: 4.8rem;
  align-items: center;
  &:hover {
    background-color: #d5d9e4;
    border-radius: 2rem;
  }
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

const ChoiceRadio = styled.div``
const ChoiceAnswer = styled.div`
  margin-left: 1.2rem;
`
const ChoiceText = styled.span``

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
      <ChoicesContainer>
        <ChoiceContainer>
          <ChoiceRadio>
            <input type="radio" name="persona5quiz" value={1} />
          </ChoiceRadio>
          <ChoiceAnswer>
            <ChoiceText>Sakura</ChoiceText>
          </ChoiceAnswer>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoiceRadio>
            <input type="radio" name="persona5quiz" value={2} />
          </ChoiceRadio>
          <ChoiceAnswer>
            <ChoiceText>Sayuri</ChoiceText>
          </ChoiceAnswer>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoiceRadio>
            <input type="radio" name="persona5quiz" value={3} />
          </ChoiceRadio>
          <ChoiceAnswer>
            <ChoiceText>Sumire</ChoiceText>
          </ChoiceAnswer>
        </ChoiceContainer>
        <ChoiceContainer>
          <ChoiceRadio>
            <input type="radio" name="persona5quiz" value={4} />
          </ChoiceRadio>
          <ChoiceAnswer>
            <ChoiceText>Satsuki</ChoiceText>
          </ChoiceAnswer>
        </ChoiceContainer>
      </ChoicesContainer>
    </Card>
  )
}

export default Home
