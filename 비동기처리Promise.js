
var promise = new Promise( function(resolve, reject) {
    setTimeout(function(){
        console.log("A");
        resolve();
    },1000);
});

promise.then(function(){
    console.log("B");
});


//코드를 실행하면 1초(1000ms)후에 "A"가 표시되고, 그 다음에 "B"가 표시된다.
//이 코드에서 Promise에 인수로 넘긴 함수는 비동기 처리를 수행하는 함수이며,
//1초 후에 "A"를 표시하고, 그 다음에는 함수 reslove를 호출해서
//Promise안의 처리를 종료시킨다. resolve함수가 실행되면 then메서드에 등록한 함수가 호출됨

/*
Promise는 비동기 처리를 실행하고 그 처리가 끝난 후에 다음 처리를 실행하기 위한
용도로 사용

resolve : 함수안의 처리가 끝났을 떄 호출해야 하는 콜백함수,
resolve함수에는 어떠한 값도 인수로 넘길 수 있다. 인수로 넘겨진 값은
다음 처리를 실행하는 함수에게 전달된다.

reject : 함수안의 처리가 실패했을 때 호출해야하는 콜백함수,
reject 함수에는 어떠한 값도 인수로 넘길수 있음, 대부분의 경우
오류 메세지 문자열을 인수로 사용한다.

*/

//////////////////////////////////////////////////////////////////////////////
//Promise를 종료시키는 resolve 함수와 then 메서드
var promise = new Promise (function(resolve, reject){
    setTimeout(function(){
        var name = prompt("이름을 입력하시오"); //prompt 입력창, 입력값반환함
        resolve(name);                          //입력값을 resolve의 인수로 넘김
    },1000);
});

promise.then(function(name){
    console.log("안녕하세요,"+ name+"님!");
});

//resolve함수에 인수로 넘긴 값은, then 메서드에 인수로 넘긴 함수에 전달되어
//다음  처리를 위해 사용된다.
//Promise안의 처리가 정상적으로 끝나야지만 promise.then이 호출된다.

/////////////////////////////////////////////////////////////////////////////
//Promise를 실패로 처리하는 reject함수와 catch메서드
//reject 함수는 Promise를 종료시킵니다. resolve 함수와 마찬가지로 reject함수에도
//값을 넘길 수 있다. reject함수가 실행되면 promise.then함수는 실행되지않는다.
//그 대신 catch 메서드에 넘긴 함수가 실행된다.

var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var n = parseInt(prompt("10 미만의 숫자를 입력하십시오"));
        if( n <= 10){
            resolve(n);
        }
        else{
            reject("오류: ${n} 은 10 이상입니다..");
        }
    },1000);
});

promise.then(function(num){ //resolve의 인수 n 을 받는다
    console.log('2^${num} = ${Math.pow(2,num)');
})

.catch(function(error){
    console.log(error);  //reject의 인수를 받아온다.
});
//1초 후에 "10 미만의 숫자를 입력하시오" 라는 메시지와 함께 입력 대화상자가
//표시된다. 입력한 숫자가 10 미만이면 then에 넘긴 함수가 실행되고,
// 그렇지 않을 때는 catch에 넘긴 함수가 실행된다.
//////////////////////////////////////////////////////////////////////////
var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        var n = parseInt(prompt("10 미만의 숫자를 입력하십시오"));
        if( n <= 10){
            resolve(n);
        }
        else{
            reject("오류: ${n} 은 10 이상입니다..");
        }
    },1000);
});

promise.then(function(num){ 
    console.log('2^${num} = ${Math.pow(2,num)');
},function(error){
    console.log(error);
});

//promise.then의 성공콜백함수,실패콜백함수 둘다 적어 통합 처리할 수도있다.
//promise.then 의 첫번째 인수(처리가 성공적으로끝났을때 호출되는 콜백함수),
// 두번째인수(처리가 실패로 끝났을 때 호출되는 콜백함수)
//////////////////////////////////////////////////////////////////////