import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  color: #FF6060;
`

const ErrorTitle = styled.h1`
  font-size: 288px;
  color: #FF6060;
  font-weight: 700;
  margin: 0;
  @media (max-width: 767px) {
  font-size: 50px;
}
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #FF6060;
  font-size: 36px;
`
const BackHome = styled.h6`
  color: #FF6060;
  text-decoration: underline;
`

function Error404() {
  return (
    <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
      Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
      <Link to="/">
        <BackHome>Retourner sur la page d’accueil</BackHome> 
      </Link>
    </ErrorWrapper>
  )
}

export default Error404