import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './location.scss'

const formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sunday", "Monday", "Tuesday", "Wedesday", "Thursday", "Friday", "Satuday"]

    let month = months[date.getMonth()]
    let day = days[date.getDay()]
    let dayNum = date.getDate()
    let year = date.getFullYear()

    return `${day}, ${month} ${dayNum} ${year}`
}

const Location = props => {
    const { city, country, icon } = props
    const date = new Date()
    return (
        <div className="location">
            <div className="location-name">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h2>{city}, {country}</h2>
            </div>
            <div className="date">{formatDate(date)}</div>
            <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt="" />
            </div>
        </div>
    )
}

Location.propTypes = {
    location: PropTypes.string,
    country: PropTypes.string,
}

Location.defaultProps = {
    location: "",
    country: "",
}

export default Location
