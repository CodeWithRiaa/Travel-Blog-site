import React from 'react'
import locator from '../images/locator.png'

const Card = (props) => {
  return (
    <article className='card'>

        <img src={props.travelCard.CoverImg}
            alt="destination"
            className="place_photo" 
        />

        <div className="info">
            <div className="place_map">
                <img src={locator}
                    alt="locator" 
                    className="locator" 
                />

                <p className="country">
                    {props.travelCard.Country}
                </p>

                <p className='google_map'>
                    <a href={props.travelCard.siteLink} target='_blank' rel="noreferrer" >View on Google Maps</a>
                </p>

            </div>

            <h1 className="visited_place">
                {props.travelCard.Location}
            </h1>

            <p className="date_visited">
                {props.travelCard.Date}
            </p>

            <p className="place_description">
                {props.travelCard.Description}
            </p>
        </div>

    </article>
  )
}

export default Card