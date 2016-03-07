var React      = require("react");
var StockGraph = require("./stock-graph.react.jsx");
var StockInfo  = require("./stock-info.react.jsx");
var StockStub  = require("../stubs/stock-stub.js");


var Stocks = React.createClass({
    getInitialState: function() {
        return {
            symbol: null,
            data: {
                symbol: null,
                company: null,
                ceo: null
            },
            price: [],
            time: []
        };
    },

    stream: null,

    getDataStream: function(e) {
        e.preventDefault();

        clearInterval(this.stream);

        this.state.data = StockStub.getData(this.state.symbol);
        this.state.price.push(StockStub.getPrice(this.state.symbol));
        this.state.time.push(new Date().toLocaleString());

        this.forceUpdate();

        this.stream = setInterval(function() {
            this.state.price.push(StockStub.getPrice(this.state.symbol));
            this.state.time.push(new Date().toLocaleString());

            this.forceUpdate();
        }.bind(this), 1000);
    },

    changeValue: function(e) {
        clearInterval(this.stream);

        this.setState({
            symbol: e.target.value,
            data: {
                symbol: null,
                company: null,
                ceo: null
            },
            price: [],
            time: []
        });
    },

    render: function(){
        return (
            <div className="wrap">
                <h1>Stocks App</h1>
                <h1 className="symbol">{this.state.data.symbol && this.state.data.symbol.toUpperCase() + " " + this.state.price[this.state.price.length - 1].toFixed(2)}</h1>
                <p>Enter symbol</p>
                <form onSubmit={this.getDataStream}>
                    <input onInput={this.changeValue} className="input" />
                    <StockGraph price={this.state.price} time={this.state.time} />
                    <input type="submit" value="GET STOCK INFO" className="btn" />
                    <StockInfo data={this.state.data} price={this.state.price[this.state.price.length - 1]} />
                </form>
            </div>
        );
    }
});

module.exports = Stocks;
