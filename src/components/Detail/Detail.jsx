import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import './detail.scss'

const Detail = props => {
    const { temp, weather, dsc, wind } = props
    return (
        <div className="detail">
            <div className="main">
                <p className="temp">{Math.ceil(temp)}</p>
                <p className="degree">
                    °C
                </p>
            </div>
            <div className="other">
                <div className="weather">
                    {weather}
                </div>
                <div className="dsc">
                    {dsc}
                </div>
                <div className="wind-speed">
                    <FontAwesomeIcon icon={faWind} />
                    {wind}
                </div>
            </div>
        </div>
    )
}

Detail.propTypes = {
    temp: PropTypes.number,
    weather: PropTypes.string,
    dsc: PropTypes.string,
    wind: PropTypes.number,
}

Detail.defaultProps = {
    temp: 0,
    weather: "",
    dsc: "",
    wind: 0
}

export default Detail
