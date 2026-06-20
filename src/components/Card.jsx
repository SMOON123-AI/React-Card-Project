import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
      <div>
        <div className="top">
        <img src={props.data.brandLogo} alt={props.data.company} />
        <button>Save <Bookmark className='bookie' /></button>
        </div>

        <div className="center">
        <div className="first-center">
          <h3>{props.data.company} <span>{props.data.postedAt}</span></h3>
          <h2>{props.data.position}</h2>
        </div>

        <div className="second-center">
          <button>{props.data.employmentType}</button>
          <button>{props.data.experienceLevel}</button>
        </div>
        </div>
      </div>

      <div className="bottom">
        <div className="first-bottom">
          <h3>{props.data.salary}</h3>
          <p>{props.data.location}</p>
        </div>

        <div className="second-bottom">
          <button>Apply now</button>
        </div>
      </div>

    </div>
  )
}

export default Card
