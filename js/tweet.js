var degree = 1;
var left = 1;
var pos = 0;



$(document).ready(function(){

	$("#work ul li a").fancybox();



	
	GetLastTweet('zcodernet');
rotate();
//submarine();
	//	setInterval("rotate()",500);
	
	jQuery('input').focus(function(){
		var defVal = $(this)[0].defaultValue; 

		
		if(jQuery(this).val(defVal))
		{
			jQuery(this).val('');
	
			jQuery(this).css('color','black');
		}
		});
		
			jQuery('input').blur(function(){
		var defVal = $(this)[0].defaultValue; 

		
		if(jQuery(this).val() == "" )
		{
			jQuery(this).val(defVal);
	
		jQuery(this).css('color','#ccc');
		}
			
		});
		
		jQuery('textarea').focus(function(){
		var defVal = $(this)[0].defaultValue; 

		
		if(jQuery(this).val(defVal))
		{
			jQuery(this).val('');
	
			jQuery(this).css('color','black');
		}
		});
		
			jQuery('textarea').blur(function(){
		var defVal = $(this)[0].defaultValue; 

		
		if(jQuery(this).val() == "" )
		{
			jQuery(this).val(defVal);
	
		jQuery(this).css('color','#ccc');
		}
			
		});
			
	
		
	jQuery("#sendmail a").click(function(){
				jQuery(".error").remove();
				var er =0;
		jQuery('#error').append('<div class="error"></div>');
			if( jQuery('#name').val() == "Your Name" ||  jQuery('#name').val() == "")
			{
				er =1;
				
				jQuery(".error").append('<p>Name is Required</p>');
				jQuery(".error").css('display','block');
			}
			
			if( jQuery('#email').val() == "Your Email" ||  jQuery('#name').val() == "")
			{
				er =1;
				jQuery(".error").append('<p>Email is Required</p>');
				jQuery(".error").css('display','block');
			}
			
			if( jQuery('#website').val() == "Your WebSite" ||  jQuery('#name').val() == "")
			{
				er =1;
				jQuery(".error").append('<p>Website is Required</p>');
				jQuery(".error").css('display','block');
			}
			
			if( jQuery('#message').val() == "Your Message" ||  jQuery('#name').val() == "")
			{
				er =1;
				jQuery(".error").append('<p>Message is Required</p>');
				jQuery(".error").css('display','block');
			}
			if ( er == 0)
			{
				
				var name =jQuery("#name").val();
				var email = jQuery('#email').val();
				var web = jQuery('#website').val() ;
				var msg =jQuery('#message').val();
			jQuery.ajax(
						{
		url: "http://eshbeata.com/dev2/includes/send.php",
							type: 'POST',
							data: "name=" + name + "&email=" + email   + "&web=" + web  + "&msg=" + msg ,
							success: function(result) 

							{
								
									
		var defVal = $('input')[0].defaultValue; 
			jQuery('input').val(defVal);
				var defVal2 = $('textarea')[0].defaultValue; 
			jQuery('input').val(defVal2);
								jQuery("#error").append('<div class="sucess" style="display: block; "><p>Thank You</p></div>')	;
							}
								
							}
						
					);

			
			}
			});
			
			
	//tooltip shortcode
		jQuery(".submarine").click(function(){
			submarine();
			});
			
			jQuery(".mole").click(function(){
			mole();
			});

	//jQuery(".tooltip").tooltip({ effect: "slide", relative: true, offset: [20, 0], tipClass: "tool_tip" });
	jQuery(".tooltip").hover(function(){
		var pos = jQuery(this).offset();
		jQuery('body').append('<div style="position:absolute;left:'+ (pos.left + 20) +'px;top:'+ (pos.top -20 )+'px;" class="tooltip_container">'+jQuery(this).attr('rel')+'</div>');
	
		
	});
	jQuery(".tooltip").mouseout(function(){
		jQuery(".tooltip_img").remove();
		jQuery(".tooltip_container").remove();
		});
			
    
});

function GetLastTweet(UserName) {
    url = 'http://api.twitter.com/1/statuses/user_timeline/' + UserName + '.json?callback=?';
    $.getJSON(url, function (tweet) {
        $("#tweet").append('<li><p>' + tweet[0].text + '</p></li>');
		$("#tweet").append('<li><p>' + tweet[1].text + '</p></li>');
		$("#tweet").append('<li><p>' + tweet[2].text + '</p></li>');
		jQuery('#tweet li').linkify();
    });
}

function GetTweets(UserName, NoOfTweets) {
    url = 'http://api.twitter.com/1/statuses/user_timeline/' + UserName + '.json?callback=?';
    $.getJSON(url, function (tweets) {
        for (var i = 0; i < NoOfTweets; i++) {
            $("#tweet-div").append(tweets[i].text + "<br />");
        }
    });
}

function GetProfileImage(UserName) {
    url = 'http://api.twitter.com/1/statuses/user_timeline/' + UserName + '.json?callback=?';
    $.getJSON(url, function (image) {
        $("#ProfileImage").attr('src', image[0].user.profile_image_url);
    });
}

  
// Define: Linkify plugin
(function($){


  var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
      url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,

      linkifyThis = function () {
        var childNodes = this.childNodes,
            i = childNodes.length;
        while(i--)
        {
          var n = childNodes[i];
          if (n.nodeType == 3) {
            var html = $.trim(n.nodeValue);
            if (html)
            {
              html = html.replace(/&/g, '&amp;')
                         .replace(/</g, '&lt;')
                         .replace(/>/g, '&gt;')
                         .replace(url1, '$1<a href="http://$2">$2</a>$3')
                         .replace(url2, '$1<a href="$2">$2</a>$5');
              $(n).after(html).remove();
            }
          }
          else if (n.nodeType == 1  &&  !/^(a|button|textarea)$/i.test(n.tagName)) {
            linkifyThis.call(n);
          }
        }
      };

  $.fn.linkify = function () {
    return this.each(linkifyThis);
  };
  

})(jQuery);

 

(function($){

      rotate = function () {
		  
	
		      var $elie = $(".merwa"),  timer;

	  // For webkit browsers: e.g. Chrome
       $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
          // For Mozilla browser: e.g. Firefox
       $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
	     $elie.css({ '-ms-transform': 'rotate(' + degree + 'deg)'});
		   $elie.css({ 'transform': 'rotate(' + degree + 'deg)'});
		   $elie.css({ '-o-transform': 'rotate(' + degree + 'deg)'});
		       $elie.css({ filter: "progid:DXImageTransform.Microsoft.Matrix(rotation="+degree+")"});
		

          // Animate rotation with a recursive call
        timer = setTimeout(function() {
            ++degree; 
			rotate();
        },30);
		
	
  };
  
  

})(jQuery);


(function($){

  submarine = function () {
	  if(left == 450){pos =1
	 
		$(".submarine").css({ '-moz-transform': ' scaleX(-1)'});
		$(".submarine").css({ '-webkit-transform': ' scaleX(-1)'});
		$(".submarine").css({ '-o-transform': ' scaleX(-1)'});
		$(".submarine").css({ 'transform': ' scaleX(-1)'});
		$(".submarine").css({ 'filter': ' FlipH'});
		$(".submarine").css({ '-ms-transform': 'FlipH'});
	  }
	    if(left == 0){pos =0
			$(".submarine").css({ '-moz-transform': ' scaleX(1)'});
		$(".submarine").css({ '-webkit-transform': ' scaleX(1)'});
		$(".submarine").css({ '-o-transform': ' scaleX(1)'});
		$(".submarine").css({ 'transform': ' scaleX(1)'});
		$(".submarine").css({ 'filter': ' -FlipH'});
		$(".submarine").css({ '-ms-transform': '-FlipV'});
		
		}
	  if (  pos ==0)
	  {
	
	  
		     var $elie = $(".submarine"),  timer;
	  // For webkit browsers: e.g. Chrome
       $elie.css('margin-left',left);

		

          // Animate rotation with a recursive call
        timer = setTimeout(function() {
            ++left; 
		  submarine ();
        },30);
	  }
	  
	  else
	  
	  {
		   var $elie = $(".submarine"),  timer;
	  // For webkit browsers: e.g. Chrome
	    $elie.css('direction','tb');
       $elie.css('margin-left',left);
            

          // Animate rotation with a recursive call
       timer = setTimeout(function() {
left--;
				  submarine ();
        },30);
		  
	  }
		   
		
	
  };
  
  
  

})(jQuery);



(function($){

  mole = function () {
	 
		
	
	  
		     var $elie = $(".mole"),timer;
			 
	$elie.removeClass("tooltip");
	    $elie.css('float','left');
		$('#social').css('opacity','0.2');
		$('.right ul li').css('opacity','0.2');
		
	
	
  $elie.css('left','200px');
    $elie.css('top','50px');
	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">This my Illustration</div>');

				setTimeout(step2,1000);

  };
  
 step2 = function () {
	   var $elie = $(".mole"),timer;
		$(".tooltip_container2").remove();
	  $elie.css('left','280px');
    $elie.css('top','250px');
	  
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">I am Eshbeata and i work as Front-End Engineer now  but also i do Freelane</div>');

setTimeout(step3,1000);
		 
  };
  
   step3 = function () {
	   var $elie = $(".mole"),timer;
	   $('.ground .left img').css('opacity','0.2');
	      $('.ground .left p').css('opacity','0.2');
		    $('.ground .left h2 ').css('opacity','0.2');
	   $('#social').css('opacity','1');
		$(".tooltip_container2").remove();
	  $elie.css('left','250px');
    $elie.css('top','330px');
	  
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">This My Social Links !</div>');

setTimeout(step4,1000);
		 
  };
   step4 = function () {
$('#social li.tw a').css('background-position-y',' -64px');   
setTimeout(step5,1000);
		 
  };
   step5 = function () {
	   $('#social li.tw a').css('background-position-y',' 0px');
$('#social li.fb a').css('background-position-y',' -64px');   
setTimeout(step6,1000);
		 
  };
  
   step6 = function () {
	   $('#social li.fb a').css('background-position-y',' 0px'); 
$('#social li.in a').css('background-position-y',' -64px');   
setTimeout(step7,1000);
		 
  };
  
    step7 = function () {
		$('#social li.in a').css('background-position-y',' 0px'); 
$('#social li.youtube a').css('background-position-y',' -64px');   
setTimeout(step8,1000);
		 
  };
  
    step8 = function () {
		$('#social li.youtube a').css('background-position-y',' 0px');
$('#social li.blog a').css('background-position-y',' -64px');   
setTimeout(step9,1000);
		 
  };
  
    step9 = function () {
		$('#social li.blog a').css('background-position-y',' 0px');
$('#social li.cv a').css('background-position-y',' -64px');   
setTimeout(step10,1000);
		 
  };
  
   step10 = function () {
$(".tooltip_container2").remove();
$('#social li.cv a').css('background-position-y',' 0px');  
  var $elie = $(".mole"),timer;
	   $('#social').css('opacity','0.2');
	   	   $('.ground .right ul li.first').css('opacity','1');
	  $elie.css('left','850px');
    $elie.css('top','0px');
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">Thats Me !</div>');
setTimeout(step11,1000);
		 
  };



step11 = function () {
$(".tooltip_container2").remove();
  var $elie = $(".mole"),timer;
	   $('.ground .right ul li').css('opacity','0.2');
	   	   $('.ground .right ul li.second').css('opacity','1');
	  $elie.css('left','850px');
    $elie.css('top','100px');
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">Thats Me !</div>');
setTimeout(step12,1000);
		 
  };
  
  step12 = function () {
$(".tooltip_container2").remove();
  var $elie = $(".mole"),timer;
	   $('.ground .right ul li').css('opacity','0.2');
	   	   $('.ground .right ul li.third').css('opacity','1');
	  $elie.css('left','850px');
    $elie.css('top','200px');
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">Thats Me !</div>');
setTimeout(step13,1000);
		 
  };
  
  step13 = function () {
$(".tooltip_container2").remove();
  var $elie = $(".mole"),timer;
	   $('.ground .right ul li').css('opacity','0.2');
	   	   $('.ground .right ul li.foruth').css('opacity','1');
	  $elie.css('left','850px');
    $elie.css('top','300px');
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">Thats Me !</div>');
setTimeout(step14,1000);
		 
  };
  
  
    step14 = function () {
$(".tooltip_container2").remove();
  var $elie = $(".mole"),timer;
	   $('.ground .right ul li').css('opacity','0.2');
	   	   $('.ground .right ul li.last').css('opacity','1');
		   $('.ground .right ul li.last ul').css('opacity','1'); 
		      $('.ground .right ul li.last ul li').css('opacity','1'); 
	  $elie.css('left','750px');
    $elie.css('top','600px');
	  	var pos = $elie.offset();
$('body').append('<div style="position:absolute;left:'+ (pos.left -50) +'px;top:'+ (pos.top - 20) + 'px;" class="tooltip_container2">Thats Me !</div>');
setTimeout(step15,1000);
		 
  };
step15 = function () {
$('#skills li.t1 span').css('display','block');
$('#skills li.t1').css('color','#fff');
setTimeout(step16,1000); 
};
step16 = function () {
$('#skills li').css('color','#9D7437');
$('#skills li.t2').css('color','#fff');
$('#skills li.t1 span').css('display','none');
$('#skills li.t2 span').css('display','block');
setTimeout(step17,1000); 
};
step17 = function () {
		$('#skills li').css('color','#9D7437');
	$('#skills li.t3').css('color','#fff');

$('#skills li.t2 span').css('display','none');
$('#skills li.t3 span').css('display','block');
setTimeout(step18,1000); 
};
step18 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t4').css('color','#fff');
	
$('#skills li.t3 span').css('display','none');
$('#skills li.t4 span').css('display','block');
setTimeout(step19,1000); 
};
step19 = function () {
		$('#skills li').css('color','#9D7437');
	$('#skills li.t5').css('color','#fff');

$('#skills li.t4 span').css('display','none');
$('#skills li.t5 span').css('display','block');
setTimeout(step20,1000); 
};
step20 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t6').css('color','#fff');
	
$('#skills li.t5 span').css('display','none');
$('#skills li.t6 span').css('display','block');
setTimeout(step21,1000); 
};
step21 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t7').css('color','#fff');
	
$('#skills li.t6 span').css('display','none');
$('#skills li.t7 span').css('display','block');
setTimeout(step22,1000); 
};
step22 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t8').css('color','#fff');
	
$('#skills li.t7 span').css('display','none');
$('#skills li.t8 span').css('display','block');
setTimeout(step23,1000); 
};
step23 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t9').css('color','#fff');
	
$('#skills li.t8 span').css('display','none');
$('#skills li.t9 span').css('display','block');
setTimeout(step24,1000); 
};
step24 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t10').css('color','#fff');
	
$('#skills li.t9 span').css('display','none');
$('#skills li.t10 span').css('display','block');
setTimeout(step25,1000); 
};
step25 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t11').css('color','#fff');
	
$('#skills li.t10 span').css('display','none');
$('#skills li.t11 span').css('display','block');
setTimeout(step26,1000); 
};
step26 = function () {
	$('#skills li').css('color','#9D7437');
	$('#skills li.t12').css('color','#fff');
	
$('#skills li.t11 span').css('display','none');
$('#skills li.t12 span').css('display','block');
setTimeout(step27,1000); 
};  
  
   step27 = function () {
	   $('#skills li').css('color','#9D7437');
	   $('#skills li.t12 span').css('display','none');
$(".tooltip_container2").remove();

	   $('.ground .left img').css('opacity','1');
	      $('.ground .left p').css('opacity','1');
		    $('.ground .left h2 ').css('opacity','1');
$('#social').css('opacity','1');
	   $('.ground .right ul li').css('opacity','1');
	   	   $('.ground .right ul li.last').css('opacity','1');
		   $('.ground .right ul li.last ul').css('opacity','1'); 
		      $('.ground .right ul li.last ul li').css('opacity','1'); 
			    $('#skills li').removeAttr("style");
					    $('#social li a').removeAttr("style");
  $('#skills li span').removeAttr("style");
		 
  };
})(jQuery);
