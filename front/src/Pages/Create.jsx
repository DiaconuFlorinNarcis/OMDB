import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BackButton} from '../components/BackButton';
import OMDBKey from './../api/apikey';

export class Create extends Component {
    state = {

    }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }
    onFileChange = (e) => {
        setImage(e.target.files[0]);
        setImageName(e.target.files[0].name);
    }

    onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        const payload = new FormData();
        payload.append("image", image);
        payload.append("image_name", imageName);
        payload.append("title", formData.title);
        payload.append("release_year", formData.releaseYear);

        fetch(`http://localhost:8080/api/movies`, {
            method: 'POST',
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React POST Request Example'})
        })
            .then(res => res.json())
            .then(results => {
                const {Search = [], totalResults = "0"} = results
                // console.log({ Search, totalResults })
                // this.props.onResults(Search)
            })
    }

    componentDidMount() {
        const {movieId} = this.props.match.params
    }

    render() {
        return (
            <div className="Create">
                <h1>Create new movie</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <form onSubmit={this._handleSubmit} className="">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="inputBasicExample">Title</label>
                                    <input type="text" onChange={this.onChange} id="title" className="form-control"/>
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="inputBasicExample">Release Year</label>
                                    <input type="text" onChange={this.onChange} id="releaseYear" className="form-control"/>
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="inputBasicExample">Image</label>
                                    <input type="file" onChange={this.onFileChange} id="image" className="form-control"/>
                                </div>
                                <button className='btn btn-success' type={"submit"}>Submit</button>
                                <BackButton/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
