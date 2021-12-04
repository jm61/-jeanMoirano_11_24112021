import styled from 'styled-components'
import questions from '../../datas/aPropos.json'
import heroPropos from '../../assets/heroPropos.png'
import Dropdown from '../../components/Dropdown'
import '../../styles/Dropdown.css'
import {useState} from 'react'
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
  const [clicked, setClicked] = useState("0")
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0")
    }
    setClicked(index)
  }

    return (
      <div className="container">
        <HeroPropos>
          <div className='layer'>
          </div>
        </HeroPropos>

        <ul className='accordion'>
        {questions.map((answer,idx) => (
          <Dropdown
          onToggle={() => handleToggle(idx)}
          active={clicked === idx}
          key={idx}
          faq={answer}
          />
        ))}
        </ul>
      </div>
    )
  }
  
  export default Apropos