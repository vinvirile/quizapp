import styled from 'styled-components'

const LoaderContainer = styled.div`
  width: 100%;
  margin: 3.2rem auto;
  margin-top: 0;
  background-color: #f3f5f7;
  border-radius: 2rem;
  ${(props) =>
    props.graded &&
    `
    background-color: #000;
  `}
`

const LoaderProgress = styled.div`
  width: ${(props) => props.progress || '0'}%;
  background-color: #ff5160;
  height: 0.6rem;
  overflow-y: none;
  border-radius: 2rem;
  transition: width 0.2s ease-in-out 0s;
`

const Loader = ({ val, gradingStatus }) => {
  const currentProgress = (val[0] / val[1]) * 100
  // console.log('Current Progress: ' + currentProgress + '%')

  return (
    <LoaderContainer graded={gradingStatus || false}>
      <LoaderProgress progress={currentProgress} />
    </LoaderContainer>
  )
}

export default Loader
