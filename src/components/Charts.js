import React, {Component} from "react";
import {Line} from 'react-chartjs-2';


class Chart extends Component{
    constructor(props) {
        super(props);
    }

    static defaultProps={
        displayTitle:true,
        displayLegend:true,
        legendPosition:'right',
        location:'City'


    }

    render() {
        return(
            <div className="Chart">

                <Line
                    data={this.props.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text: 'Largest Cities in ' + this.props.location,
                            fontsize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }

                    }}
                />
            </div>
        );
    }

}

export default Chart;