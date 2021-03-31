$(function() {
	var thoigian = setInterval(function(){
		// $('.next').trigger('click');
		var slide_after = $('.slide.active').next();	

		//xu li cho phan nut khi nhan nut next
		var vitri = $('.slide.active').index() + 1;
		// console.log(vitri);

		if (slide_after.length != 0) {
			$('.slide.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobentrai').removeClass('bienmatobentrai').removeClass('active');
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			slide_after.addClass('active').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
			});

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child('+ (vitri + 1) +')').addClass('button-active');
		}
		else {
			$('.slide.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobentrai').removeClass('bienmatobentrai').removeClass('active')
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			$('.slide:first-child').addClass('active').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
			});

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child(1)').addClass('button-active');						
		}
	}, 5000);

	//viet code cho nut next
	$('.next').click(function(event) {
		clearInterval(thoigian);

		var slide_after = $('.slide.active').next();	

		//xu li cho phan nut khi nhan nut next
		var vitri = $('.slide.active').index() + 1;
		console.log(vitri);

		if (slide_after.length != 0) {
			$('.slide.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobentrai').removeClass('bienmatobentrai').removeClass('active');
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			slide_after.addClass('active').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
			});

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child('+ (vitri + 1) +')').addClass('button-active');
		}
		else {
			$('.slide.active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobentrai').removeClass('bienmatobentrai').removeClass('active')
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			$('.slide:first-child').addClass('active').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
			});

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child(1)').addClass('button-active');						
		}
	});
	// end nut next

	//start button previous
	$('.previous').click(function(event) {
		clearInterval(thoigian);

		var slide_prev = $('.slide.active').prev();

		//xu li cho phan nut khi nhan nut next
		var vitri = $('.button-active').index() + 1;

		if (slide_prev.length != 0) {
			$('.slide.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobenphai').removeClass('bienmatobenphai').removeClass('active');
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			slide_prev.addClass('active').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
			});

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child('+ (vitri - 1) +')').addClass('button-active');
		}
		else {
			$('.slide.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobenphai').removeClass('bienmatobenphai').removeClass('active')
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			$('.slide:nth-child(3)').addClass('active').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
			});			

			//xu li cho button slide
			$('.button-slide ul li').removeClass('button-active')
			$('.button-slide ul li:nth-child(3)').addClass('button-active');				
		}
	});
	//end button previous

		//code cho nut cham chuyen slide
	$('.button-slide ul li').click(function(event) {
		clearInterval(thoigian);

		//xu li cho phan nut khi nhan nut next
		var vitri = $('.button-active').index() + 1;
		var vitriclick = $(this).index() + 1;
		//tat ca khong nut nao xanh
		$('.button-slide ul li').removeClass('button-active');
		//click vao li nao thi li do se co class se co mau xanh
		$(this).addClass('button-active');
		console.log(vitri);
		console.log(vitriclick);
		if (vitriclick > vitri) {
			$('.slide .active').addClass('bienmatobentrai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobentrai').removeClass('bienmatobentrai').removeClass('active');
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			$('.slide:nth-child('+vitriclick+')').addClass('active').addClass('divaotubenphai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubenphai').addClass('active').removeClass('divaotubenphai');
			});
		}

		if (vitriclick < vitri) {
			$('.slide.active').addClass('bienmatobenphai').one('webkitAnimationEnd', function(event) {
				//class cua cai hinh da bien mat se bi xoa di
				$('.bienmatobenphai').removeClass('bienmatobenphai').removeClass('active');
			});

			//chon lai cai anh dau tien va cho di vao tu ben phai
			$('.slide:nth-child('+vitriclick+')').addClass('active').addClass('divaotubentrai').one('webkitAnimationEnd', function(event) {
				//them class active cho hinh dang xuat hien
				$('.divaotubentrai').addClass('active').removeClass('divaotubentrai');
			});
		}
	});

	//fixed hedaer
	$(window).scroll(function(event) {
		/* Act on the event */
		if($(this).scrollTop() > 200) {
			$(".top-header").addClass('fixed');
		}
		else {
			$(".top-header").removeClass('fixed');
		}
	});

	// scrollIt js
	$.scrollIt({
		topOffset: -20
	});

	//list-btn toggle 
	$(".list-btn").click(function(event) {
		/* Act on the event */
		$(".header .nav").slideToggle();
	});

	$(".header .nav a").click(function(event) {
		/* Act on the event */
		if ($(window).width() < 768) {
			$(".header .nav").slideToggle();
		}
	});

	// Js for angle up
	$('.angle-up__icon').click(function(){
 		$('html, body').animate({'scrollTop': 0});
 	})

 	// load more
 	$(".gallery-item").slice(0, 3).show();
    $(".btn-loadmore").on("click", function(){
        $(".gallery-item:hidden").slice(0, 3).slideDown()
        if ($(".gallery-item:hidden").length == 0) {
            $(".btn-loadmore").fadeOut('slow')
        }
    })

    //Tweenmax
    // TweenMax.staggerFrom($('.gallery-item'), 1 ,{top: 100, opacity: 0}, 0.2)

    //wow js
    new WOW().init();

    // preloading
    $(window).on('load', function(event) {
    	$('body').removeClass('preloading');
    	$('.loading').delay(500).fadeOut('fast');
    });
});
