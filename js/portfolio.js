$(function(){
	/*주메뉴 클릭시 스크롤영역 이동*/
	$("a").on("click",function(event){
		if(this.hash !==""){
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate({scrollTop: $(hash).offset().top},1000,function(){
					window.location.hash = hash;
			});
		}
	});
	
	/*main 화면 글씨*/
	$("#main .name").delay(500).fadeIn();
	$("#main .high").delay(600).fadeIn();
	$("#main .university").delay(700).fadeIn();
	$("#main .florist").delay(800).fadeIn();
	$("#main .graphic").delay(900).fadeIn();
	$("#main .patience").delay(1000).fadeIn();
	$("#main .sincerity").delay(1100).fadeIn();
	$("#main .web").delay(1200).fadeIn();
	$("#main .academe").delay(1300).fadeIn();
	$("#main .graduate").delay(1400).fadeIn();
	$("#main .motto").delay(1500).fadeIn();
	
	
	$("#section2 .logo li ").mouseover(function(){
		$(".webImg li a img").show();
	});
	
		
});