import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { CarDetails: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cars')
            .then((res) => {
                this.setState({ CarDetails: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const handleOnDelete = deleteModel => {
            axios.delete(`http://localhost:5000/cars/delete/${deleteModel}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            window.location.reload();
        }

        const handleUpdateClick = (id) => {
            this.props.setSelectForUpdate(id);
        }

        return (
            <div>
                <table border="1" class="table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Model</th>
                            <th>EngineType</th>
                            <th>Turbos</th>
                            <th>Year</th>
                            <th><NavLink to="/cars/add"><button className='btn btn-success mx-2'>Add Car</button></NavLink></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.CarDetails.map((i) => {
                            return (

                                <tr key={i._id}>
                                    <td>{i.CompanyName}</td>
                                    <td>{i.Model}</td>
                                    <td>{i.EngineType}</td>
                                    <td>{i.Turbos}</td>
                                    <td>{i.Year}</td>
                                    <td>

                                        <NavLink to={{
                                            pathname: "/cars/update"
                                        }} >
                                            <button className='btn btn-primary mx-2' onClick={() => handleUpdateClick(i._id)}>
                                                Update
                                            </button>
                                        </NavLink>

                                        <button className='btn btn-danger' onClick={() => handleOnDelete(i.Model)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default Selection;