//implementation of  a promise
//reflection in es6

//ITERATORS
function isPrime(number){
	if(number < 2){
		return false;
	}else if(number === 2){
		return true;
	}
	
	for(var i = 2; i < number; i++){
		if(number % 1 === 0){
			return false;
			break;
		}
	}
	return true;
}

//GENERATORS
//genWrap(function generator(){
//	var tweets = yield $.getJSON("code/all.json");
//	console.log(tweets);
//
//	var friends = yield $.getJSON("code/all.json");
//	console.log(friends);
//
//	var siblings = yield $.getJSON("code/all.json");
//	console.log(siblings);
//});
//
//function genWrap(generator){
//	var myGen = generator();
//
//	function handle(yielded){
//		if(!yielded.done){
//			yielded.value.then(function(data){
//				return handle(myGen.next(data));
//			});
//		};
//	};
//	return handle(myGen.next());
//};

//GENERATORS
function* generatorFib(){
  prev = 0;
  curr = 1;
  
  yield 0;
  yield 1;

  while (true) {
    temp = curr;
    curr += prev;
    prev = curr;
    yield curr;

    if (curr == 2) {
      break;
    }
  }
}

// first 5 fib numbers
let fibs = generatorFib();
fibs.next(); 
fibs.next(); 
fibs.next(); 
fibs.next();
fibs.next(); 


numbers = [1,2,3,45,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for(let number of numbers){
    console.log(isPrime(number));
}