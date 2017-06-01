function KaiArray() {
	// TODO: handle input arguments
	// you are not allowed to use an array inside this class
	array = this;
	var length;
	for (i = 0; i < arguments.length; i++) {
		array[i] = arguments[i];
		length = i + 1
	}	

	KaiArray.prototype.get = function(index) {
		// equivalent to arr[index]
		return array[index]
	}

	KaiArray.prototype.set = function(index, value) {
		// equivalent to arr[index] = value
	}

	KaiArray.prototype.toNormalArray = function() {
		// convert to normal JS array
		var normArray = new Set([]);
		for(i = 0; i < array.length(); i++) {
			normArray.add(array[i])
		}
		return Array.from(normArray)
	}

	KaiArray.prototype.push = function(index) {
		// add item to end of array
		array[length] = index
		length ++
	}

	KaiArray.prototype.pop = function(index) {
		// remove last item and return it
		var popped = array[length - 1];
		delete array[length - 1];
		return popped
	}

	KaiArray.prototype.length = function() {
		return length
	}

	KaiArray.prototype.map = function(fn) {
		// return a normal array with [fn(arr[0]), fn(arr[1]), ... , fn(arr[arr.length - 1])]
	}

}

function tests() {
	var arr = new KaiArray(1, 2, 3)
	arr.length()
	arr.push(4)
	console.log(arr)
	console.log(arr.toNormalArray())
	console.log([1, 2, 3, 4])
	console.log(arr.toNormalArray() == [1, 2, 3, 4])

	/*test(arr.get(0) == 1)

	arr.set(2, 1)
	test(arr.get(2) == 1)

	test(arr.toNormalArray() == [1, 2, 1, 4])

	test(arr.length() == 4)
	test(arr.pop() == 4)
	test(arr.length() == 3)

	test(arr.map(function(item) { return item * 2 }) == [2, 4, 2])*/
}

function test(input) {
	if (!input) {
		throw "you fail!"
	}
}

var tst = new KaiArray(1, 2, 3, 4, 5)

//console.log(tst)

tests()