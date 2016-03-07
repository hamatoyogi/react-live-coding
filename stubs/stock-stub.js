var StockStub = (function() {
	var randomize = function() {
		return Math.random() * 200;
	}

	var data = {
		"AAPL": {
			symbol: "AAPL",
			company: "Apple Inc",
			ceo: "Tim Cook"
		},
		"GOOG": {
			symbol: "GOOG",
			company: "Google Inc",
			ceo: "Lary Page"
		},
		"AMZN": {
			symbol: "AMZN",
			company: "Amazon Inc",
			ceo: "Jeff Bezos"
		}
	};

	var getData = function(symbol) {
		var current;
		if (data[symbol]) {
			return data[symbol];
		} else {
			return null;
		}
	};

	var getPrice = function() {
		return randomize();
	};

	return {
		getData: getData,
		getPrice: getPrice
	};
}());

module.exports = StockStub;
