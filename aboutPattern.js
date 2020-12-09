//문자열 메서드
//----------------------------------------------------------------------------
// 문자열 검색하기 : search 메서드
// 인수로 받은 문지열과 일치하는 최초 문자열의 첫번째 문자 위치를 반환
//찾지 못하면 -1 반환 
var s = "1 little,2   little indeian";

//console.log(s.search(/1/));  //-> 0
//console.log(s.search(/lion/));  //-> -1
//console.log(s.search(/indeian/));  //-> 20
//console.log(s.search(/2/));  //-> 9
//console.log(s.search(/A/));  //-> -1

//-----------------------------------------------------------------------------
//문자열 치환하기 : replace 메서드
// 첫번째 인수로 받은 정규 표현식과 일치하는 문자열을 검색하고,
// 두번째 인수로 받은 문자열로 치환한 새로운 문자열을 반환한다.
//원본 문자열은 수정되지 않는다.
//정규 표현식에 g 플래그를 설정하면 일치하는 모든 문자열을 치환한다.
//g플래그가 없다면 가장 처음 일치한 문자열만 치환된다.

var s = "1 little, 2 little indian";
console.log(s.replace(/indian/,"boy")); //-> "1 little, 2 little boy"
console.log(s.replace(/little/,"big")); //-> "1 big, 2 little indian"
console.log(s.replace(/little/g,"big")); //-> "1 big, 2 big indian"
console.log(s); //->"1 little, 2 little indian"
//--------------------------------------------------------------------------------
//문자열 나누기 : split 메서드
//문자열을 분할한 다음 배열에 담아서 반환함.
console.log("172.20.51.65".split("."));

var names = "Tom Sawter ; Hucklebeery;becky thatcher";
var list = names.split(";");
console.log(list);