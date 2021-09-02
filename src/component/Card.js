import React from "react"
import "./Card.css"
import { FaEnvelopeOpen, FaPhone, FaMap } from 'react-icons/fa'


const Card = ({item}) => {
const register = (item.registered.date).slice(0,(item.registered.date).indexOf("T"))//
    return (
        <div className="card">
            <div className="header">
                <img id="img" src={item.picture.large} alt={item.name.first}/>
                <h3 id="name">{item.name.title}. {item.name.first} {item.name.last}</h3>
            </div>
            <div className="infos">
                <FaEnvelopeOpen />
                <h4 className="info">{item.email}</h4>
            </div>
            <div className="infos">
                <FaPhone />
                <h4 className="info">{item.phone}</h4>
            </div>
            <div className="infos">
                <FaMap />
                <h4 className="info">{item.location.city} {item.location.country}</h4>
            </div>
            <h4 className="bottom">Age:{item.dob.age}</h4>
            <h4 className="bottom">Register Date: {register} </h4>
        </div>
    )
      }
export default Card
