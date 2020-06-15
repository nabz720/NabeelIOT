import React, {Component} from 'react';
import SkyLight from 'react-skylight';

class AddSensorData extends Component {

 constructor(props) {        super(props);
        this.state = {app_id: '', dev_id: '', time_rx: '', payload_data: ''};
    }

    handleChange = (event) => {
        this.setState(
            {[event.target.name]: event.target.value}
        );
    };

    handleSubmit = (event) => {
        event.preventDefault();
        var sensordata = {app_id: this.state.app_id, dev_id: this.state.dev_id, time_rx: this.state.time_rx, payload_data: this.state.payload_data};
        this.props.addSensorData(sensordata);
        this.refs.addDialog.hide();
    }

    render() {
        return (
            <div>
                <SkyLight hideOnOverlayClicked ref="addDialog">
                    <h3>Add Sensor Data</h3>
                    <form>
                        <input type="text" placeholder="Application ID" name="app_id" onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Device ID" name="dev_id" onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Time logged" name="time_rx" onChange={this.handleChange}/><br/>
                        <input type="text" placeholder="Measurements" name="payload_data" onChange={this.handleChange}/><br/>
                        <button onClick={this.handleSubmit}>Add</button>
                    </form>
                </SkyLight>
                <div>
                    <button style={ {'margin': '10px'} } onClick={() => this.refs.addDialog.show()}>Add Data</button>
                </div>
            </div>
        )
    }


}

export default AddSensorData;