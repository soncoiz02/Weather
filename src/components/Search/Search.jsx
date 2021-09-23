import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './search.scss'

const Search = props => {
    const { getCityName } = props
    const [cityName, setCityName] = useState('')
    const getValue = e => {
        let value = e.target.value
        setCityName(value)
    }
    const submit = e => {
        e.preventDefault()
        getCityName(cityName)
        setCityName('')
    }
    return (
        <form className="search-form" onSubmit={submit}>
            <input
                type="text"
                onChange={getValue}
                value={cityName}
                placeholder="Enter the city name"
            />
        </form>
    )
}

Search.propTypes = {
    getCityName: PropTypes.func,
}

Search.defaultProps = {
    getCityName: null
}

export default Search
