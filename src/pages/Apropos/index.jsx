import styled from 'styled-components'
import questions from '../../datas/aPropos.json'
import heroPropos from '../../assets/heroPropos.png'
import '../../styles/Hero.css'

const HeroPropos = styled.div`
  background-image: url('${heroPropos}');
  max-width: 1240px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  border-radius: 25px;
  color: white;
  justify-content: center;
	align-items: center;
  margin-bottom: 43px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
}`

function Apropos() {
    return (
      <div className="container">
        <HeroPropos>
          <div className='layer'>
          </div>
        </HeroPropos>

        <ul>
        {questions.map(answer => (
          <li key={answer.question}>
            <strong>{answer.question}</strong><br/>{answer.answer}
          </li>
        ) )}
        </ul>
      </div>
    )
  }
  
  export default Apropos