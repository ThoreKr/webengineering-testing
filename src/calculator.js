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

window.onload = function() {
        var a = document.getElementById("a");
        var b = document.getElementById("b");
        var output = document.getElementById("result");
        var add = document.getElementById("add");
        var subtract = document.getElementById("subtract");
        var multiply = document.getElementById("multiply");
        var divide = document.getElementById("divide");
        var pow = document.getElementById("pow");

        document.getElementById("calculate").addEventListener("click", function() {
                var result = 0;
                if (add.checked) {
                        result = calc.add(Number(a.value), Number(b.value));
                } else if (subtract.checked) {
                        result = calc.subtract(Number(a.value), Number(b.value));
                } else if (multiply.checked) {
                        result = calc.multiply(Number(a.value), Number(b.value));
                } else if (divide.checked) {
                        result = calc.divide(Number(a.value), Number(b.value));
                } else {
                        result = calc.pow(Number(a.value), Number(b.value));
                }
                output.innerHTML = result;
        });
}
