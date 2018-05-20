import React from 'react';
import Flight from './Flight';
import FlightFilter from  './FlightFilter';

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

    changeFilterValues = (values) => {
        this.setState(values);
    }

    render() {
        // mapowanie komponentów Flight z przekazaniem danych z flights (z API)
        const flightsMapped = this.state.flights
            .filter( flight => flight.price < +this.state.priceMax )
            .map( flight => (<Flight key={flight.id} flight={flight} />) )

        return (
            <div>
                { flightsMapped }
                <FlightFilter changeFilterValues={this.changeFilterValues} />
            </div>
        )
    }
}

export default FlightsView;