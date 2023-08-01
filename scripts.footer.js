$(document).ready(function() {

//    $('#signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');

$(".top-nav-button-login").insertBefore($(".cart-count")); // Přesuneme prvek před prvek .cart-count

$(".benefitBanner").insertBefore($(".custom-footer")); // Přesuneme prvek před prvek .cart-count

$(".top-nav-button-login > span").addClass("visible-lg-inline-block");

$("#footer .container").wrapAll('<div class="conteiner-max-width"></div>');
$("#footer .footer-bottom").wrapAll('<div class="conteiner-max-width2"></div>');



//$('.slider-header  .to').after('<span class="db-az">až</span>');
//$('.slider-header').insertAfter('.slider-wrapper');

});