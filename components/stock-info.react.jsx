var React      = require("react");


var StockInfo = React.createClass({
    render: function(){
        return (
            <div>
            	<p>Symbol: {this.props.data.symbol}</p>
            	<p>Company name: {this.props.data.company}</p>
            	<p>CEO: {this.props.data.ceo}</p>
            	<p>Current share price: {this.props.price}</p>
            </div>
        );
    }
});

module.exports = StockInfo;
