$(document).ready(function(){
    k.onload();
});
var k = {
	onload	: function() {
		var time = 400;
		$('.socialLink').each(function(){
            $(this).stop().animate({'opacity':'1','top':'0px'},time,'easeOutCubic',function(){
	                if($(this).is(':last-child')){
	                    k.triggers();
	                }
            	}
            );
            time+=400;
        });
	},
	triggers : function(){
        $(document).on('mouseover','.socialLink',function(){
            $(this).stop().animate({'opacity':'0.5','top':'-10px'},400);
        });
        
        $(document).on('mouseout','.socialLink',function(){
            $(this).stop().animate({'opacity':'1','top':'0px'},1000);
        });
    }
};