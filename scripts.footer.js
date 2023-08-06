$(document).ready(function () {
     $('#signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');

  if( $('.admin-logged').length ) { 
      console.log("jsem admin");
    }
    else
    {
      console.log("NE admin");
    }

  $(".top-nav-button-login").insertBefore($(".cart-count")); // Přesuneme prvek před prvek .cart-count
  $(".benefitBanner").insertBefore($(".custom-footer")); // Přesuneme prvek před prvek .cart-count
  $(".top-nav-button-login > span").addClass("visible-lg-inline-block");
  $("#footer .container").wrapAll('<div class="conteiner-max-width"></div>');
  $("#footer .footer-bottom").wrapAll(
    '<div class="conteiner-max-width2"></div>'
  );

  if (dataLayer[0].shoptet.pageType === "productDetail") {
    // detail produktu
    $(".p-info-wrapper")
      .contents()
      .wrapAll('<div class="p-info-wrapper-bg"></div>');
    
      if ($(".desktop").length) //desktop
      {
        $("h1").insertBefore($(".p-final-price-wrapper")); // přesune  nadpis do pravé části
        $(".stars-wrapper").insertAfter("h1:first-child");
      }
      else
      {
        $(".stars-wrapper").insertAfter(".p-image-wrapper");
//        $(".description-inner").insertAfter(".p-detail-tabs");

      }   

      $(".type-detail .products-additional .flags").remove();
      $(".type-detail .products-additional .p-code").remove();
      $(".type-detail .products-additional .p-bottom").remove();
      $(".type-detail .products-additional .ratings-wrapper").remove();
      
      
    //    $(".p-detail-info > .stars-wrapper").insertAfter($("h1")); // přesune hodnocení pod H1
    $(".p-detail-inner-header > .p-code").insertAfter($(".stars-wrapper")); // přesune náš kód
    //$(".p-detail-inner-header > .p-code > .p-code-label.span:contains('Kód:')").html('Náš kód:'); // přesune náš kód
    $(".p-info-wrapper .p-code-label:contains('Kód:')").html('Náš kód:');
    
    //$(".category-header label:contains('Nejdražší')").html("Od nejdražšího");
    
    //$(".stars-wrapper").wrap(".line-start"); // o
    $(".p-short-description").insertBefore(".p-final-price-wrapper");
    $(".p-info-wrapper .stars-wrapper,  .p-info-wrapper .p-code").wrapAll("<div class='stars-pinfo-wrapper'></div>");  // obalí .stars-wrapper a .p-code do <ol class='wrap-stars'>
    
    $(".p-info-wrapper .stars-wrapper,  .p-info-wrapper .p-code").wrapAll("<div class='stars-pinfo-wrapper'></div>");  // obalí .stars-wrapper a .p-code 
   $(".p-final-price-wrapper .price-final,.p-final-price-wrapper .price-additional,.p-final-price-wrapper .price-measure").wrapAll("<div class='price-final-wrapper'></div>");  // obalí ceny, abych je mohl naformátovat do sloupce

    $(".social-buttons-wrapper").insertBefore(".p-info-wrapper-bg"); // prvek přidán kvůli bílému pozadí
    $(".availability-value").insertBefore(".p-final-price-wrapper");
    $(".p-info-wrapper-bg .detail-parameters").insertBefore(".p-final-price-wrapper");
    $(".detail-contact-button").insertAfter($(".p-info-wrapper-bg"));

    $(".products-related-header").replaceWith('<h2 class="p-related-head">Doporučujeme dokoupit</h2><p class="p-related-text">Další komponenty nemusíte jinde složitě shánět. Vše najdete u nás na jednom místě.</p>');    // Související produkty 

    // přidání článků z rubriky in-web do webu
    $(".extended-description .detail-parameters").after("<div class='in-web-zaruka'></div>"); // vloží nový div
    $(".in-web-zaruka").load("/in-web/detail-produktu-zaruka-a-servis/ .content-inner .text "); // nahraj článek
    
       
    $(".type-detail .detail-contact-button").replaceWith("<div class='in-web-rozumime'></div>");
    $(".in-web-rozumime").load("/in-web/detail-produktu-nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek
    




    // $(".detail-tabs-wrapper .extended-description").replaceWith('<h4>Technické parametry</h4');  // 
  }

  if (dataLayer[0].shoptet.pageType === "category") {

    $(".st-subcats  .subcategories  li").removeClass("col-xl-3").addClass("col-xl-4");
    $(".st-subcats  .subcategories  li").removeClass("col-lg-3").addClass("col-lg-4");

    
    $(".type-category .filters-wrapper").after("<div class='in-web-rozumime'></div>");
    $(".in-web-rozumime").load("/in-web/kategorie-nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek
    


// přidání článků z rubriky in-web do webu
//$(".box-filters").after("<div class='in-web-rozumime'></div>"); // vloží nový div
//$(".in-web-rozumime").load("/in-web/nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek


  }


  });