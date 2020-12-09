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
})
.catch(function(error){
    console.log(error);
});

//앞 코드에 등장하는 buyAsync함수는 Promise객체를 반환하는 함수이다
// buyAsync(500) 함수에 넘긴 인수를 Promise객체가 실행하는 함수 안에서 사용할 수 있다.