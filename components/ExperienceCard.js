import React from 'react'
import Experience from './Experiences'

const ExperienceCard = ({experiences}) => {
  return (
    <div className="col-md-8">
    <div className="card bg-light">
            <div className="card-body">
                <h1>Experience</h1>
                {
                    experiences.map(({company,labour,time,Functions},j)=>(
                        <Experience company={company} labour={labour} time={time} Functions={Functions} key2={j}/>
                     ))
                }
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard