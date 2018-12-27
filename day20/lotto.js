$(document).ready(function(){
    /*
    html() : 해당 객체의 html 코드를 가져옴
    html(xx) : 해당 객체에 html 코드를 입력
    */
    var str = new String();
    for(var i=1; i<=45; i++){
        str += '<input type="text" class="box" value="'+i+'" readonly>';
    }
    
    //console.log(str);
    var str2 = new String();
    for(var i = 0; i<6; i++){
        str2 += '<input type="text" class="box" readonly>';
    }
    str2 += '<button id="reset" type="reset"> 리셋 </button>'
    $('#boxes').html(str);
    $('#input').html(str2);
    $('#boxes>.box').click(function(){
        //selected 클래스가 있는 객체의 갯수
        var selectedCnt = $('.selected').length;
        //selectedCnt가 6보다 작거나 클릭된 객체의 클래스에 selected가 있으면
        //클릭된 객체의 클래스 값을 가져와서(문자열) selected라는 문자열이
        //있는지 없는지 확인하여 있으면
        //$(this).prop('class').indexOf('selected') != -1
        //hasClass('A') : 해당 객체의 클래스 중 A를 포함하면 true를 반환
        //                포함하지 않으면 false를 반환
        if(selectedCnt <6 || $(this).hasClass('selected')){
            //배열에 클릭한 객체의 value가 없으면 배열에 저장
            //있으면 배열에서 제거
            //위의 주석과 같은 의미
            //해당 객체에 selected 클래스가 있으면 배열에서 객체의 value를 제거
            //없으면 객체의 value를 배열에 추가 
            if($(this).hasClass('selected')){
                //arr.splice(번지) : 해당 번지부터 뒤에 나오는 모든 값을 없앰;
                //arr = [1,3,4,6]
                //$(this).val() == 3
                //[1]
                arr.splice(arr.indexOf($(this).val()),1);
            }else{
                arr.push($(this).val());
            }

            matchArr();
            $(this).toggleClass('selected');
        }else{
            alert('최대 6개까지 선택 가능합니다.');
        }
    });
    var arr = [];
    //matchArr();
    function matchArr(){
        var cnt = 0;        
        arr.sort(function(a,b){
            return a-b;
        })
        /*$('#input>.box').each(function(){
            if(arr.length > cnt){
                $(this).val(arr[cnt++]);
            }else{
                $(this).val('')
            }
        });
        */
        for(cnt =0; cnt <6; cnt++){
            if(cnt < arr.length)
                $('#input>.box').eq(cnt).val(arr[cnt]);
            else
                $('#input>.box').eq(cnt).val('');
        }
    }
    $('#reset').click(function(){
        arr = new Array();
        $('.selected').removeClass('selected');
    });

    var str3 = "Hello.";
    str3 = "My name is jone."
    
    str3 = "Hello.";
    //str3 = str3 + " My name is jone.";
    str3 += " My name is jone.";
    console.log(str3);
    var cnt = 7;
    str3 = '현재 학생수는 ' + cnt + '명입니다.';
    console.log(str3);
});