$(document).ready(function() {

//    $('#signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');

$(".top-nav-button-login").insertBefore($(".cart-count")); // Přesuneme prvek před prvek .cart-count

$(".benefitBanner").insertBefore($(".custom-footer")); // Přesuneme prvek před prvek .cart-count

$(".top-nav-button-login > span").addClass("visible-lg-inline-block");

$("#footer .container").wrapAll('<div class="conteiner-max-width"></div>');
$("#footer .footer-bottom").wrapAll('<div class="conteiner-max-width2"></div>');


if (dataLayer[0].shoptet.pageType === "productDetail") // detail produktu
{
    $("h1").insertBefore($(".p-final-price-wrapper")); // přesune  nadpis do pravé části
    $(".p-detail-info > .stars-wrapper").insertAfter($("h1")); // přesune hodnocení pod H1
    $(".p-detail-inner-header > .p-code").insertAfter($(".stars-wrapper")); // přesune náš kód
    $(".stars-wrapper").wrap(".line-start"); // o
    $(".p-info-wrapper .stars-wrapper, .p-info-wrapper .p-code").wrapAll("<div class='stars-info-wrapper'></div>"); // obalí .stars-wrapper a .p-code do <div class='wrap-stars'>



    
    //$("p-info-wrapper > .stars-wrapper").insertAfter($(".stars-wrapper")); // přesune náš kód
    
    
    
    //$(".p-code").insertAfter($(".stars-wrapper")); // přesune hodnocení pod H1
    
    



}


//$('.slider-header  .to').after('<span class="db-az">až</span>');
//$('.slider-header').insertAfter('.slider-wrapper');

});