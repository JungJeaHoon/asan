//lnb 슬라이더메뉴

const du = 400; //시간 설정 한번에 해놓고 파라미터에 넣기
let open = 0;  //메뉴가 닫혀 있는 상태(처음)

$('#lnb_btn').click(function(){
    if(open == 0 ){
    $('#wrap').animate({left:274},du);
    //전체화면 왼쪽으로 274px
    $('#lnb_btn').find('img').attr({'src':"img/bg_header_lnb_active.png",'art':'메뉴닫기'});
    //버튼 이미지 바꿈
    $('#lnb').animate({left:0},du);
    //서브메뉴 튀어나옴
    $('.cover').fadeIn(du);
    //메인 어두운 화면으로
    open = '열림';
    }else {    //반대의 경우 써서 들어가는 모션      
        $('#wrap').animate({left:0},du);
        $('#lnb_btn').find('img').attr({'src':"img/bg_header_lnb.png",'art':'메뉴열기'});
        $('#lnb').animate({left:-274},du);
        $('.cover').fadeOut(du);
        open = 0;
    }
    
})


$('.cover').click(function(){
    $('#wrap').animate({left:0},du);
    $('#lnb_btn').find('img').attr({'src':'img/bg_header_lnb.png','art':'메뉴열기'});
    $('#lnb').animate({left:-274},du);
    $('.cover').fadeOut(du);
    open=0;
})