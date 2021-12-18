import units from '../../datas/samples.json'
import {useParams} from 'react-router-dom'
import Stars from '../../components/Stars'
import {useState} from 'react'
import '../../styles/Units.css'
import { ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import { ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'

const Unit = (props) => {
    let {id} = useParams()
    let unit = units.find(unit => unit.id === id)
    if(!unit) {
        unit = units.find(unit => unit.id === 'c67ab8a7')
    }
    let {title, rating, description, pictures, location, tags, host, equipments} = unit

    const [current, setCurrent] = useState(0)
    const length = pictures.length

    const nextImg = () => { setCurrent(current === length -1 ? 0 : current + 1) }
    const prevImg = () => { setCurrent(current === 0 ? length -1 : current - 1) }

    if(!Array(props) || props.length <= 0) { return null }

    return (
        <div className=''>
            <section>
                <ArrowLeft className="left-arrow" onClick={prevImg}/>
                <ArrowRight className="right-arrow" onClick={nextImg}/>
                {pictures.map((picture, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (

                <div className="each-img" style={{'backgroundImage': `url(${picture})`}}>
                        <span>{index + 1} / {length}</span>
                        </div>
                
                )}
                        </div>
                    )
                    })}
            </section>
            <div className="content-container">
                <div className="left-container">
                    <h1>{title}</h1>
                    <h3>{location}</h3>

                    <div className="tags">
                        {tags.map((tag, index)=> (
                            <div className="tag" key={index}>{tag}
                            </div>
                        ))} 
                    </div>
                </div>
                <div className="right-container">
                    <div className="theface">
                        <h3>{host.name}</h3>
                        <img className="face-img" src={host.picture} alt="portrait"></img>
                    </div>
                        <Stars starsCount={rating}/>
                </div>
            </div>

            <div className="content-container">
                <div className="tabs content-desc">
                    <div className="tab ">
                        <input type="checkbox" id="chck1" />
                        <label className="tab-label" htmlFor="chck1">Description</label>
                        <div className="tab-content">
                        <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="tabs content-equi">
                    <div className="tab">
                        <input type="checkbox" id="chck2" />
                        <label className="tab-label" htmlFor="chck2">Equipments</label>
                        <div className="tab-content">
                        <ul>
                    {equipments.map((equipment, index)=> (
                            <li className="each-equi" key={index}>{equipment}
                            </li>
                        ))} 
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Unit