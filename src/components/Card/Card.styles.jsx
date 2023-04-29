import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #fff;
  max-width: 50rem;
  border-radius: 1.6rem;
  padding: 3.6rem;
  margin: 0 auto;

  margin-top: ${(props) => props.floatDown && '3.2rem'};

  h1 {
    font-size: 4.2rem;
  }
`
