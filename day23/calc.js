$(document).ready(function(){
	var pointCnt = 0;
	var op = '+'; //눌린 연산자를 저장하는 변수
	var isPushOp = false;//연산자가 눌린적이 있는지 없는지 확인하는 변수
	var input = $('#dataNum');
	var num1 = 0;
	/* 임시 문자열이 필요한 이유는 =을 제외한 연산자를 연달아 누르면
	마지막에 누른 연산자가 출력되야 하기 때문에 연산자를 누른 후 다음 숫자가
	눌리기전까지의 문자열을 임시 문자열에 저장하고 이후 숫자가 누르면 해당 
	해당 문자열을 최종 문자열에 저장*/
	var str="";	//최종 문자열
	var strTmp=""; //임시 문자열

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
		str = strTmp;
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
			input.val(num1);
			//1+2+-
			//연산자가 처음 눌리면 
			str = str + tmp;
		}
		op = $(this).text();
		strTmp = str + op;
		
		$('#dataStr').val(strTmp);
		if(op == '='){
			str="";
			strTmp="";
		}
		
		isPushOp = true;
	});
});