$(document).ready(function () {  
		  $('.ba-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-nav'

		  });
		  $('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.ba-slider',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			 vertical: true,
			 verticalSwiping: true,
			 arrows: true		
		  });   
});



let d = document;
let onShowBtn = d.querySelector('.showBtn');
let asideMenu = d.querySelector('.aside_menu');
let icon_aside = d.querySelector('.dropdown_icon_aside');
let tabLinks = d.querySelectorAll(".tabs a");
let tabPanels = d.querySelectorAll(".tabs-panel");


onShowBtn.addEventListener('click', function () {
	asideMenu.classList.toggle('aside_menu');
	icon_aside.classList.toggle('aside_rotate')
});


for (let i = 0; i < tabLinks.length; i++) {
    let el = tabLinks[i];
    el.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(".tabs li.active").classList.remove("active");
        document.querySelector(".tabs-panel.active").classList.remove("active");

        var parenListItemIndex = el.parentElement.getAttribute('data-tab'),
            panelContentIndex = '[data-tab-index="' + parenListItemIndex + '"]';

        el.parentElement.classList.add('active');

        document.querySelector(panelContentIndex).classList.add('active');

        // for (let j = 0; j < tabPanels.length; j++) {
        //     if (tabPanels[j].matches(panelContentIndex)) {
        //         tabPanels[j].classList.add('active');
        //     }
        // }
    });
}


