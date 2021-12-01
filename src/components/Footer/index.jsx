import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoDark from '../../assets/logo_dark.svg'

const HomeLogo = styled.img`
  height: 34px;
  width: 105px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

const NavContainer = styled.nav`
  padding: 30px;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  background-color: #000;
  margin-top: 100px;
`

const Subtitle = styled.h4`
  font-weight: 300;
  color: #fff;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
  width: 18em;
`

function Footer() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={LogoDark} />
      </Link>
      <div>
        <Subtitle to="/">© 2021 Kasa. All rights reserved</Subtitle>
      </div>
    </NavContainer>
  )
}

export default Footer