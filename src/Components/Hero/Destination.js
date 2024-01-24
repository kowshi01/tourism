import React from 'react'
import './Destination.css'
// import {HomeDetails} from '../Data/Data'
const Destination = (props) => {
  return (
    <div>
        {props.data1.map((data)=>(
        <div className={data.class}>
            <h1>{data.title}</h1>
            <p>{data.para1}</p>
            <p>{data.para2}</p>
            <p>{data.para3}</p>
        </div>        
      ))}
        {props.data2.map((data)=>(
            <div className={data.class}>
                <img src={data.image} alt="home" />
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.para}</p>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default Destination