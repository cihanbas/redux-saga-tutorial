import React, {Component} from 'react';
import '../App.css'

let axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            relaseYear: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.postData = this.postData.bind(this);
    }

    handleChange(event) {
        this.setState({movieName: event.target.value});
    }

    handleChange2(event) {
        this.setState({relaseYear: event.target.value});
    }

    postData() {
        const data = fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: this.state.movieName,
                body: this.state.relaseYear
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(resp => resp.json())
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
                console.log('Fetch Error :-S', error);
            });
        // return  response.status === 200 ? (response.data) : []
    }


    render() {
        return (
            <div className='wrapper'>
                <p className='header'>
                    Redux Saga
                </p>
                <br/>
                <p>
                    <input type="text" className='input' onChange={this.handleChange} value={this.state.movieName}
                           placeholder='title' name="movieName"/>
                    <input type="text" className='input' onChange={this.handleChange2} value={this.state.relaseYear}
                           placeholder='body' name="relaseYear"/>
                </p>
                <p>
                    <button onClick={() => this.props.onFetchMovies(this.state.movieName)}>GET</button>
                    <button onClick={() => this.props.onFetchCountry()}>ADD</button>
                    <button onClick={() => this.props.onPostData()}>POST</button>
                </p>
                <div className='scrollist'>
                    {this.props.movies.length !== 0 ? this.props.movies[0].map((x, idx) =>
                        <div key={idx} style={{
                            backgroundColor: idx % 2 === 0 ? 'green' : 'aqua', color: 'white',
                            padding: '10px'
                        }}>
                            {x.title}
                        </div>
                    ) : void 0}

                    {this.props.country.length !== 0 ? this.props.country[0].map((x, idx) =>
                        <div key={idx} style={{
                            backgroundColor: idx % 2 === 0 ? 'green' : 'aqua', color: 'white',
                            padding: '10px'
                        }}>
                            {x.il}
                        </div>
                    ) : void 0}
                    <div>Lorem ipsum dolor sit.</div>

                </div>
            </div>
        );
    }
}

export default Home;
