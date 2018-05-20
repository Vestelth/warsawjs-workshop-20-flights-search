import React from 'react';
import Flight from './Flight';

class FlightsView extends React.Component {

    async componentDidMount() {
        const {departValue, returnValue, fromValue, toValue} = this.props.flightData;

        const url = 'https://warsawjs-flights-api.herokuapp.com/flights';
        const url2 = `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`

        const flights = await fetch(url2)
            .then( (res) => res.json() );

        this.setState({
            flights
        })
    }

    state = {
        flights: []
    }

    render() {
        const flightsMapped = this.state.flights.map( flight => (<Flight key={flight.id} flight={flight} />) )

        return (
            <div>
                { flightsMapped }
            </div>
        )
    }
}

export default FlightsView;