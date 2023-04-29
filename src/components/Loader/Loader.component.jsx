import styled from 'styled-components'

const LoaderContainer = styled.div`
  width: 100%;
  margin: 3.2rem auto;
  background-color: #f3f5f7;
  border-radius: 2rem;
`

const LoaderProgress = styled.div`
  width: ${(props) => props.progress || '0'}%;
  background-color: #ff5160;
  height: 0.6rem;
  overflow-y: none;
  border-radius: 2rem;
`

const Loader = ({ progress }) => {
  return (
    <LoaderContainer>
      <LoaderProgress progress={21} />
    </LoaderContainer>
  )
}

export default Loader
