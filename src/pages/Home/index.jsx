import styled from 'styled-components'
import heroHome from '../../assets/heroHome.png'
import '../../styles/Hero.css'
import '../../styles/Base.css';

const Hero = styled.div`
  background-image: url('${heroHome}');
  max-width: 1240px;
  height: 180px;
  margin: 0 auto;
  border-radius: 25px;
  color: white;
  justify-content: center;
	align-items: center;
  margin-bottom: 43px;
  @media (max-width: 767px) {
    margin-bottom: 0;
}`

function Home() {
    return (
      <div className="container">
        <Hero>
        <div className="layer">
				<h1 className='h1bandeau'>Chez vous, partout et ailleurs</h1>
        </div>
        </Hero>
      </div>
    )
  }
  
  export default Home