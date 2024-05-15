import React from "react";
import './bootstrap-5.3.3-dist/css/bootstrap.css';
import './app.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-1 text-center heading d-flex align-items-center">Wellcome to Showroom</h1>
            </div>
        );
    }
}

export default Home;