var React      = require("react");
var ReactChart = require("react-chartist");


var StockGraph = React.createClass({
    render: function(){

        var data = {
            labels: this.props.time,
            series: [
                this.props.price
            ]
        };

        var options = {
            low: -100,
            high: 300,
            showPoint: false,
            axisX: {
                showLabel: false,
                showGrid: false,
            }
        };

        return (
            <div>
                <ReactChart data={data} options={options} type={"Line"} />
            </div>
        );
    }
});

module.exports = StockGraph;
