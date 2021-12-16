import RStar from '../../assets/red_star.svg'
import GStar from '../../assets/gray_star.svg'


function Stars({starsCount}) {

    const range = [1, 2, 3, 4, 5]
    const scaleType = <img src={GStar} alt='star_icon' className="star-align"/>
    const Gstar = <img src={RStar} alt='star_icon'  className="star-align"/>
        
    return (
        <div className="stars">
        <div className="">{Gstar}{Gstar}{Gstar}{Gstar}{Gstar}</div>
        <div className="stars-cont">
            {range.map((rangeElem) =>
                starsCount >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
        </div>
    )
}

export default Stars