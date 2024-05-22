import React from 'react';
import axios from 'axios';


class Insert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CompanyName: "",
            Model: "",
            EngineType: "",
            Turbos: "",
            Year: null
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/cars`)
            .then((res) => {
                const allCars = res.data;
                const updateCarId = allCars.filter((el) => el._id === this.props.selectForUpdate);
                console.log(updateCarId);
                this.setState({
                    CompanyName: updateCarId[0].CompanyName,
                    Model: updateCarId[0].Model,
                    EngineType: updateCarId[0].EngineType,
                    Turbos: updateCarId[0].Turbos,
                    Year: updateCarId[0].Year
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const handleCompanyNameChange = e => this.setState({ CompanyName: e.target.value });
        const handleModelChange = e => this.setState({ Model: e.target.value });
        const handleEngineTypeChange = e => this.setState({ EngineType: e.target.value });
        const handleTurbosChange = e => this.setState({ Turbos: e.target.value });
        const handleYearChange = e => this.setState({ Year: e.target.value });
        const handleSubmit = e => {
            e.preventDefault();
            const data = {
                CompanyName: this.state.CompanyName,
                Model: this.state.Model,
                EngineType: this.state.EngineType,
                Turbos: this.state.Turbos,
                Year: this.state.Year
            };
            axios.put(`http://localhost:5000/cars/update/${this.state.Model}`, data)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

        return (
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='my-2'>
                        <label className='fs-5' htmlFor="CompanyName">Company Name</label>
                        <input className='form-control' type="text" name="CompanyName" id="CompanyName" value={this.state.CompanyName} onChange={handleCompanyNameChange} required />
                    </div>
                    <div className='my-2'>
                        <label className='fs-5' htmlFor="Model">Model</label>
                        <input className='form-control' type="text" name="Model" id="Model" value={this.state.Model} onChange={handleModelChange} required />
                    </div>
                    <div className='my-2'>
                        <label className='fs-5' htmlFor="EngineType">Engine Type</label>
                        <input className='form-control' type="text" name="EngineType" id="EngineType" value={this.state.EngineType} onChange={handleEngineTypeChange} required />
                    </div>
                    <div className='my-2'>
                        <label className='fs-5' htmlFor="Turbos">Turbos</label>
                        <input className='form-control' type="text" name="Turbos" id="Turbos" value={this.state.Turbos} onChange={handleTurbosChange} required />
                    </div>
                    <div className='my-2'>
                        <label className='fs-5' htmlFor="Year">Year</label>
                        <input className='form-control' type="number" name="Year" id="Year" value={this.state.Year} onChange={handleYearChange} required />
                    </div>
                    <div className='my-3'>
                        <button className='btn btn-primary'>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Insert;