var calc = new function() {
	this.add = function(a, b) {
		return a+b;
	};
	
	this.subtract = function (a, b) {
		return a-b;
	};

	this.multiply = function (a, b) {
		return a*b;
	};
	
	this.divide = function (a, b) {
		return a/b;
	};

	this.pow = function (a, b) {
		var result = a;
		for (var i = 1; i<b; i++) {
			result *= a;
		}
		return result;
	};
}
