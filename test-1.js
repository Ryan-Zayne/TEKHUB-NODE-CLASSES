function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}


function performOperation(x, y, operationFunction) {
	return operationFunction(x, y);
}

const result = performOperation(20, 30, subtract);

console.log(result);