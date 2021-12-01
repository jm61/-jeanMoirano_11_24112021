import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.svg'
import '../../styles/Header.css'

const KasaLogo = styled.img`
  height: 68px;
  width: 210px;
  color: #FF6060;
  @media (max-width: 767px) {
    height: 45px;
    width: 140px;
}
`

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;

`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <KasaLogo src={Logo} />
      </Link>
      <div  className="lemenu">
        <NavLink to="/" className="normal" activeclassname="active" exact='true'>Accueil</NavLink>
        <NavLink to="/apropos" className="normal" activeclassname="active" exact='true'>A Propos</NavLink>
      </div>
    </NavContainer>
  )
}

export default Header