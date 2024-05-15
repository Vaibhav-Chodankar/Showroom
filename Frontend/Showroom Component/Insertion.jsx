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
            axios.post('http://localhost:5000/cars/add', data)
                .then(res => console.log(res))
                .catch(err => console.log(err));

        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="CompanyName">Company Name</label>
                        <input type="text" name="CompanyName" id="CompanyName" value={this.state.CompanyName} onChange={handleCompanyNameChange} required />
                    </div>
                    <div>
                        <label htmlFor="Model">Model</label>
                        <input type="text" name="Model" id="Model" value={this.state.Model} onChange={handleModelChange} required />
                    </div>
                    <div>
                        <label htmlFor="EngineType">Engine Type</label>
                        <input type="text" name="EngineType" id="EngineType" value={this.state.EngineType} onChange={handleEngineTypeChange} required />
                    </div>
                    <div>
                        <label htmlFor="Turbos">Turbos</label>
                        <input type="text" name="Turbos" id="Turbos" value={this.state.Turbos} onChange={handleTurbosChange} required />
                    </div>
                    <div>
                        <label htmlFor="Year">Year</label>
                        <input type="number" name="Year" id="Year" value={this.state.Year} onChange={handleYearChange} required />
                    </div>
                    <div>
                        <button className='btn btn-success'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Insert;