import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

class SearchView extends React.Component {
    state = {
        fromValue: 'WAW',
        toValue: '',
        departValue: '',
        returnValue: ''
    };

    onFromChange = (e) => {
        this.setState({
            fromValue: e.target.value
        })
    }

    onToChange = (e) => {
        this.setState({
            toValue: e.target.value
        })
    }

    onDepartChange = (e) => {
        this.setState({
            departValue: e.target.value
        })
    }

    onReturnChange = (e) => {
        this.setState({
            returnValue: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.fromValue === '') {
            return;
        }
        if (this.state.toValue === '') {
            return;
        }
        if (this.state.departValue === '') {
            return;
        }
        if (this.state.returnValue === '') {
            return;
        }
        console.log(this.state);

        this.props.onAppSubmit({...this.state})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    <strong>From</strong>
                    <Select
                        native
                        value={this.state.fromValue}
                        onChange={this.onFromChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </Select>
                </label>


                <label>
                    <strong>To</strong>
                    <Select
                        native
                        value={this.state.toValue}
                        onChange={this.onToChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </Select>
                </label>

                <label>
                    <strong>Depart</strong>
                    <input type="date" value={this.state.departValue} onChange={this.onDepartChange} />
                </label>

                <label>
                    <strong>Return</strong>
                    <input type="date" value={this.state.returnValue} onChange={this.onReturnChange} />
                </label>

                <Button type="submit">Submit</Button>
            </form>
        );
    }
}

export default SearchView;