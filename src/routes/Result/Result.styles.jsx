import styled from 'styled-components'
import { ReactComponent as Check } from '../../assets/check.svg'

export const GradeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.8rem;

  .fraction {
    font-weight: bold;
  }

  .fraction-correct {
    font-size: 3.2rem;
    font-weight: bold;
  }
  .fraction-divider {
    font-size: 2.2rem;
    vertical-align: super;
  }
  .fraction-total {
    vertical-align: super;
    font-size: 1.8rem;
  }
  .grade-percentile {
    font-weight: bold;
    font-style: italic;
  }
`

export const CheckIcon = styled(Check)`
  width: 2.2rem;
  height: 2.2rem;
  fill: #ff5160;
`

export const QuestionContainer = styled.div`
  font-size: 2.4rem;
  margin: 4.8rem 0;

  .question {
    font-weight: bold;
  }
`
