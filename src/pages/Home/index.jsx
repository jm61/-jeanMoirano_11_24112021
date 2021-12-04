import styled from 'styled-components'
import Card from '../../components/Card'
import samples from '../../datas/samples.json'
import heroHome from '../../assets/heroHome.png'
import {Link} from 'react-router-dom'
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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  max-width: 1240px;
  padding-top: 25px;
  background: #F7F7F7;
  border-radius: 30px;
  margin: 0 auto;
  text-decoration: none;
  @media (max-width: 767px) {
    background: #fff;
}`

function Home() {
    return (
      <div className="container">
        <Hero>
        <div className="layer">
				<h1 className='h1hero'>Chez vous, partout et ailleurs</h1>
        </div>
        </Hero>
        <CardsContainer>
        {samples.map((details) => (
          <Link key={`kasa-${details.id}`} to={`/logement/${details.id}`}>
            <Card 
              key={details.id}
              label={details.location}
              title={details.title}
              cover={details.cover}
            />
          </Link>
        ))}
      </CardsContainer>
      </div>
    )
  }
  
  export default Home