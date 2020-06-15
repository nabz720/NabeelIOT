import React, {Component} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


class SensorData extends Component{
    constructor(props) {
        super(props);
        this.state = {sensordata: []};
    }

//recollect data from backend
fetchSensorData = () => {
const jwtToken = sessionStorage.getItem("jwt");
    fetch('http://localhost:8080/sensordata', {method: 'GET',
    headers: {"Authorization": jwtToken} })
                 .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                sensordata: responseData
            })
        })
        .catch(err => console.error("error: " + err));
}

   componentDidMount() {
        this.fetchSensorData();
    }

           updateSensorData(sensordata) {
                const jwtToken = sessionStorage.getItem("jwt");
                fetch('http://localhost:8080/getdata', {
                    method: 'PUT',
                    headers: {
                        "Authorization": jwtToken,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(sensordata)
                })
                    .then(res => this.fetchSensorData())
                    .catch(err => console.log(err))
            }

            render()   {

                 const columns =
                 [{
                             Header: 'time',
                             accessor: 'created_at'

                         }, {
                             Header: 'Humidity',
                             accessor: 'field1'

                         }, {
                             Header: 'Temperature',
                             accessor: 'field2'
                         }
                                        , ];

                                        return    (
                                                  <div>

                                                     <button onClick={() => this.updateSensorData}>Refresh</button>
                                                     < ReactTable data={this.state.sensordata} columns={columns} filterable={true} />

                                                   </div>
                                                );
                                        }


            }
            export default SensorData;
