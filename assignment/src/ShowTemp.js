import React from 'react'
import './App.css';
const ShowTemp = ({text}) => {
  return (
    <div className="container my-5">
    <div className="row mb-2">
        <div className="col-md-4">
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Description</h5>
                    <p className="card-text">{text.weather_descriptions}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Temperature</h5>
                    <p className="card-text">{text.temp}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Feels like</h5>
                    <p className="card-text">{text.feelslike}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-md-4">
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Time</h5>
                    <p className="card-text">{text.observation_time}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Humidity</h5>
                    <p className="card-text">{text.humidity}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Visibility</h5>
                    <p className="card-text"/>{text.visibility}
                </div>
            </div>
        </div>
    </div>
    <div className="row mb-2">
        <div className="col-md-4">
            <div className="card">

                <div className="card-body">
                    <h5 className="card-title">Cloudcover</h5>
                    <p className="card-text">{text.cloudcover}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Country</h5>
                    <p className="card-text">{text.country}</p>
                </div>
            </div>
        </div>
    </div>
</div>

)
}
export default ShowTemp
