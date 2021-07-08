import React, {Component} from 'react';
import Chart from './Charts';
class Data extends Component{

    constructor() {
        super();
        this.state={
            chartData:{

            }
        }
    }


    componentDidMount() {
        this.getchartData();
    }


    getchartData = () => {
        // Make request to the node backend. You might need to enable CORS in the express app.
        fetch("http://localhost:9000/")
            .then(res => res.json())
            .then((jsonarray) => {
                var labels = jsonarray.map(function(e) {
                    return e.employee_id;
                });
                var data = jsonarray.map(function(e) {
                    return e.salary;
                });

                console.log(labels,data);

                this.setState({
                    chartData:{
                        labels:labels,
                        datasets:[
                            {
                                label:'Salary',

                                data:data
                            }
                        ]
                    }
                });
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    };   

    render(){
        return(
            <div className="App">
                <Chart chartData={this.state.chartData} location="Test" legendPosition="bottom"/>
            </div>

        );
    }
}

export default Data;