jQuery(document).ready(function(){
const btn = $(".podnaslov");
const brend = $('#brend');
const aktuelnosti = $('.active');
let test = "";
btn.each(function(i,e){
	$(e).on('click',function(){
		btn.find('h3').removeClass('click');
		$(this).find('h3').addClass("click");
		let test=$(this).attr('data-name');
		aktuelnosti.each(function(i,e){
		$(e).css("display","none");
		if(test==e.id){
			$(e).css("display","block");
		}
		});
		
	});
});
brend.on('click',function(){
	btn.find('h3').removeClass('click');
	aktuelnosti.each(function(i,e){
		$(e).css("display","none");
		aktuelnosti.eq(0).css("display","block");
	});
})
	
});