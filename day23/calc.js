$(document).ready(function(){
	var pointCnt = 0;
	var op = '+'; //눌린 연산자를 저장하는 변수
	var isPushOp = false;//연산자가 눌린적이 있는지 없는지 확인하는 변수
	var input = $('input');
	var num1 = 0;

	$('.num').click(function(){
		var val = $(this).text();
		//연산자가 눌린 다음에 숫자를 누른 경우
		if(isPushOp){
			input.val('0');
			isPushOp = false;
		}
		if(val == "."){
			//.이 처음 눌린게 아니면 작업을 종료하여 .이 input창에 안찍히도록 한다.
			if(pointCnt != 0) return;
			//.이 처음 눌리면 점이 눌릿 횟수를 1로 만든다.
			pointCnt++;
		}
		//눌린 키와 input창에 있는 값을 이어 붙여서 출력
		if(input.val() == "0")
			input.val(val);
		else
			input.val(input.val() + val);
	});

	$('.op').click(function(){
		pointCnt=0;
		var tmp = parseFloat(input.val());
		if(!isPushOp || op == '='){
			switch(op){
			case '+':	num1 = num1 + tmp; break;
			case '-':	num1 = num1 - tmp; break;
			case 'X':	num1 = num1 * tmp; break;
			case '/':	num1 = num1 / tmp; break;
			case '=':	num1 = tmp; break;
			}
			op = $(this).text();
			input.val(num1);
		}
		isPushOp = true;
	});
});