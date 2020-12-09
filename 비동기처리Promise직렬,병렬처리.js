//비동기 여러개 직렬처리

function buyAsync(mymoney){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var payment = parseInt(prompt("지불하고자하는 금액을 입력하시오"));
            var balance = mymoney - payment;

            if(balance > 0)
            {
                console.log('${payment} 원을 지불했습니다.');
                resolve(balance);
            }
            else
            {
                reject('잔액은 ${mymoney} 원입니다. 구매할 수 없습니다.')
            }
        },1000);
    });
}

buyAsync(500)
.then(function(balance){
    console.log('잔액은 ${balance}원입니다.');
    return buyAsync(balance);
})
.then(function(balance){
    console.log('잔액은 ${balance}원입니다.');
    return buyAsync(balance);
})
.catch(function(error){
    console.log(error);
});
//한사람에 대한 잔액 컨트롤과정,여러번의 거래진행
//직렬로 순차적으로 처리됨
//본 예제에선모든 then 메서드가 같은 Promise객체를반환하지만
//then마다 다른 Promise 객체를 반환하게 할수도있다.

//////////////////////////////////////////////////////////////////////////
//비동기 여러개를 병렬로 실행하는 방법임

function buyAsync(name,mymoney){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var payment = parseInt(prompt("${name}님,지불하고자하는 금액을 입력하시오"));
            var balance = mymoney - payment;

            if(balance > 0)
            {
                console.log('${name}: ${payment} 원을 지불했습니다.');
                resolbe(balance);
            }
            else
            {
                reject('${name} :잔액은 ${mymoney} 원입니다. 구매할 수 없습니다.')
            }
        },1000);
    });
}

Promise.all([ //비동기 처리 여러개를 병렬로 실행가능하게됨
    //모든처리가 성공적으로 끝났을 때만 다음 작업을 실행하게된다.
    //모든 Promise 객체가 resolve함수를 호출하면!!! then 메서드에 지정한 함수 실행함
    //실패로 끝난 Promise객체가 하나라도 있다면 가장 먼저 실패로 끝난
    //Promise객체에서 실행한 reject함수의 인수가 실패 콜백함수의 인수로 들어간다.
    buyAsync("Tom",500),
    buyAsync("Huck",600),
    buyAsync("Becky",1000),
])
    .then(function(balance){
        console.log(balance);
    })
    .catch(function(error){
        console.log(error);
    })
  //여러사람에 대한 거래진행
  //입력창이 여러개가 한번에 뜬다.
  //콘솔출력
  // Tom: 200원을 지불했습니다.
  // Becky: 500원을 지불했습니다.
  // Huck: 300원을 지불했습니다.

    ///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// 추가!!! Promise.race 메서드
//여러개의 Promise 객체 병렬처리중, 가장먼저 종료한 Promise객체 하나의 결과만
//다음작업으로 보낼수 있다.
//즉, 먼저 종료한 작업이 성공했을때는 성공 콜백을 호출하고, 
//실패했을때는 실패 콜백을 호출합니다.
//나머지 Promise객체도 병렬이기 때문에 실행은되지만
// 가장 먼저 처리된 Promise객체에 대해서만 반환되어 ,하나의 객체만 .then or .catch가 진행된다.

function buyAsync(name,mymoney){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var payment = parseInt(prompt("${name}님,지불하고자하는 금액을 입력하시오"));
            var balance = mymoney - payment;

            if(balance > 0)
            {
                console.log('${name}: ${payment} 원을 지불했습니다.');
                resolbe(balance);
            }
            else
            {
                reject('${name} :잔액은 ${mymoney} 원입니다. 구매할 수 없습니다.')
            }
        },1000);
    });
}

Promise.all([ 
    buyAsync("Tom",500),
    buyAsync("Huck",600),
    buyAsync("Becky",1000),
])
    .then(function(balance){
        console.log(balance);
    })
    .catch(function(error){
        console.log(error);
    })

//출력창
// Tom:200원을 지불했습니다
// 300(가정먼저 처리된 Promise객체에 대한 .then만 진행됨)
// Becky:300원을 지불했습니다.
// Huck: 400원을 지불했습니다.