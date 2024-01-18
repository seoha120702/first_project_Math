/**
 * css 선택자 넣으면 그의 대한 querySelector 변환 해줌
 * @param {*} css선택자 css선택자 넣으셈
 * document.querySelector(css선택자)
 */

// jquery 비스무리 창조
function html조작(css선택자) {
    return document.querySelector(css선택자)
}

// 최대공약수, 최소공배수 가져오기
const p1 = html조작("#p1")
const p2 = html조작("#p2")

//함수 정의
function 입력받기() {
    //input 값 가져오기
    const input1 = html조작("#input1").value
    const input2 = html조작("#input2").value
    //테스트용 변수
    let test = 0

    //input 값이 숫자인지 판별
    if (isNaN(input1) || input1 === "") {
        //아닐 때
        html조작("#input1").value = "숫자 쓰라고"
        test = 1
    }
    if (isNaN(input2) || input2 === "") {
        //아닐 때
        html조작("#input2").value = "숫자 쓰라고"
    }
    //숫자가 맞을 때 
    else {
        if (test == 1) {}
        //두 input 값 중 큰 값 찾기
        else {if (input1 < input2) {
                max_answer = input1
            }
            else if (input2 < input1) {
                max_answer = input2
            }
            else {
                max_answer = input1
            }
            //최대공약수 구하기
            for (i = max_answer; i > 0; i--) {
                if (input1 % i == 0 && input2 % i == 0) {
                    p1.textContent = i
                    break
                    
                }
            }
            //최소공배수 구하기
            for (i = max_answer; true; i++) {
                if (i % input1 == 0 && i % input2 == 0) {
                    p2.textContent = i
                    break
                }
            }
        }}} 