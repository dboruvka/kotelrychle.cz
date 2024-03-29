$(document).ready(function () {

    function trideni01()
    {
        $('.category-header > div:nth-child(2)').remove()
    
        var $categoryHeader = $('.category-header');
        var $selected = $('<div class="selected">Řazení</div>').appendTo($categoryHeader);
        var $dropdown = $('<div class="dropdown2"></div>').appendTo($categoryHeader);
        
        
        $categoryHeader.find('label').each(function() {
            
            $(this).appendTo($dropdown);
    
        });
    
        
        $selected.on('click', function() {        
        
            $dropdown.toggle();
        });
    
        $dropdown.find('label').on('click', function() {        
            
            var text = $(this).text();
            $selected.text(text);
            $dropdown.hide();
        });
    
    
    }
    
    

     $('#signature').append(' &amp; <a href="https://davidboruvka.cz/?utm_source=footer&amp;utm_medium=link&amp;utm_campaign=shoptet" target="_blank" title="Tvorba eshopů na shoptetu">David Borůvka</a>');


     function do_kosiku() {
    
      $(".products-block .availability").each(function () {
          $(this).closest(".product").find(".p-bottom > div").append(this);
      });
      $( ".products-block .availability + .availability, .p-tools > .availability").remove();
      $(".products-block .p-tools").each(function () {
          $(this).closest(".product").find(".p-bottom").append(this);
      });
      $(
          '<span class="quantity"><input type="text" name="amount" value="1" class="amount" autocomplete="off" data-decimals="0" data-max="9999" data-min="1"><span class="increase" title="Zvýšit množství"></span><span class="decrease" title="Snížit množství"></span></span>'
      ).prependTo(".products-block .pr-action");
      
  
    }
    
    do_kosiku();
  
    document.addEventListener('ShoptetDOMPageContentLoaded', function () {
         do_kosiku();
  });


     


     $(".flag-freeshipping span.flag-text ").text("Doprava zdarma");


  if (dataLayer[0].shoptet.pageType === "cart")
  {
  
    $(".in-kosik .cart-summary h4").text("Slevový kód");  
    $(".top-nav-button-login").remove(); 
    
  
  }
  else
  {
    $(".top-nav-button-login").insertBefore($(".cart-count")); // Přesuneme prvek před prvek .cart-count
    
  }  
  



  $(".top-navigation-contacts").remove();
  
  //$(".top-navigation-bar-menu > li").addClass("cropped");
   $(".top-navigation-bar-menu > li").removeClass("cropped");
   $(".top-navigation-bar-menu-helper  > li").removeClass("cropped");
  $(".top-navigation-bar-menu > li:gt(5)").addClass("cropped");


// Procházíme všechny elementy v top-navigation-bar-menu ul li a
$('ul.top-navigation-bar-menu li').each(function() {
  // Uložíme si aktuální třídu
  var currentClass = $(this).attr('class');
  // Procházíme všechny elementy v top-navigation-bar-menu-helper li a
  $('ul.top-navigation-bar-menu-helper li').each(function() {
    // Porovnáme třídy
    if ($(this).attr('class') == currentClass) {
      // Přidáme třídu .noview k elementu s shodnou třídou
      $(this).addClass('noview');
    }
  });
});

  
  // $('.top-navigation-bar-menu-helper li').each(function() {
  //   var className = $(this).attr('class');
  //   var isNoView = $('.top-navigation-menu li').filter(function() {
  //     return $(this).hasClass(className);
  //   }).length > 0;
  
  //   if (isNoView) {
  //     $(this).addClass('noview');
  //   }
  // });

  



//  $(".top-navigation-bar-menu > li").addClass("cropped");
  // $(".top-navigation-bar-menu > li").removeClass("cropped");
  //$(".top-navigation-bar-menu > li:gt(2)").removeClass("cropped");

  

  $(".top-nav-button-login > span").addClass("visible-lg-inline-block");
  $("#footer .container").wrapAll('<div class="conteiner-max-width"></div>');
  $("#footer .footer-bottom").wrapAll(
    '<div class="conteiner-max-width2"></div>'
  );

  if (dataLayer[0].shoptet.pageType === "productDetail") 
  
  {
  
    $('.p-image .flag-freeshipping').appendTo('.p-detail-info .flags'); // doprava zdarma

//    $(".p-detail-info .flags").before($(".flag-freeshipping"));
  
    // $(".products-additional .p-in-in a").each(function() {

    //   var originalText = $(this).text();
    //   originalText += "…"; // Přidáme tři tečky, pokud byl text zkrácen
        
    //   $(this).text(originalText);

    // });      
    $(".products-additional .p-in-in a").each(function() {
      var originalText = $(this).text().trim();
      var truncatedText = originalText.substring(0, 50); // Omezíme text
      if (originalText.length > 50) {
        truncatedText += "…" // Přidáme tři tečky, pokud byl text zkrácen
      }
      $(this).text(truncatedText).attr("title", originalText);
    });


    if ($(".p-final-price-wrapper .price-save").length)
  {
   
    // $(".price-standard").filter(function() {
    //   return $(this).parent().hasClass("p-final-price-wrapper");
    // }).text("Nová cena");

    var price_standard = $(".p-info-wrapper .p-final-price-wrapper > span.price-standard span").text();
    
        var price_standard_number =  price_standard.replace(",", "."); // změní string na číslo
             
        price_standard_number = price_standard_number.replace(/[^0-9.]/g, "");  
    
    //var price_standard_number = str.split("").filter(function(char) {return /\d|\./.test(char);});
    var price = dataLayer[0].shoptet.product.priceWithVat;
    var mena = dataLayer[0].shoptet.product.currency;
    var usetreno =   price_standard_number - price;
    
    

    if (usetreno < 1000 &&  mena == "CZK" )
    {
      usetreno = usetreno.toFixed(2);
    
    }
    else if (usetreno >= 1000 &&  mena == "CZK" )
    {
      usetreno = usetreno.toFixed(0);
    
    }
    else if (usetreno > 100 &&  mena == "EUR" )
    {
      usetreno = usetreno.toFixed(0);
    
    } 
    else if (usetreno <= 100 &&  mena == "EUR" )
    {
    
      usetreno = usetreno.toFixed(2);
    } 
    else
    {
      usetreno = usetreno.toFixed(2);

    }

    
    
    usetreno = usetreno.split(/(?=(?:\d{3})+(?:\.|$))/g).join(' '); // naformátuje mezery




    if (mena == "CZK" )
   {
    mena = "Kč";
    usetreno_text = '<span class="usetreno"> Ušetříte '+usetreno+ " " +mena+ '</span>';
    usetreno_flag = '<span class="usetreno-flag"> Ušetříte <br>'+usetreno+ " " +mena+ '</span>';
  }
   else if (mena == "EUR" )
   {
    mena = "€";
        usetreno_text = '<span class="usetreno"> Ušetříte '+mena+ +usetreno+ '</span>';
        usetreno_flag = '<span class="usetreno-flag"> Ušetříte <br>'+mena+ +usetreno+ '</span>';        
   }
   usetreno_text =  usetreno_text.replace(".", ","); // změní string na číslo
   usetreno_flag =  usetreno_flag.replace(".", ","); // změní string na číslo   


   


   $(".p-info-wrapper .p-final-price-wrapper > span.price-standard").before(usetreno_text);
   
   $(".flags-extra > span > span.price-standard > span").remove()
   $(".flags-extra > span > span.price-standard").before(usetreno_flag);
   
   
   
   
   
  }
  

    $("#productsAlternative .products div").removeClass("inactive").addClass("active"); //podobné 
    $("#productsAlternative .products div").removeClass("related-sm-screen-hide") //pro mobilní zobrazení
    

    
  //$("span.flag-custom2:contains('Český produkt')").insertAfter(".availability-value");

    $(".p-info-wrapper")
      .contents()
      .wrapAll('<div class="p-info-wrapper-bg"></div>');
    
      
      
      
      if ($(".desktop").length) //desktop
      {
        
        $("h1").insertBefore($(".p-final-price-wrapper")); // přesune  nadpis do pravé části
        $(".p-detail-info .stars-wrapper").insertAfter("h1:first-child");
      }
      else
      {
        $(" .p-detail-info .stars-wrapper").insertAfter(".p-image-wrapper");
//          $(".p-detail-tabs ul").removeClass("active");
 
  //$("#p-detail-tabs > li.shp-tab").removeClass("active");
    $(".shp-tabs-holder li:first").addClass("active");
  
  $(".products-additional.p-switchable > div:nth-child(3)").removeClass("related-sm-screen-hide");
  $(".products-additional.p-switchable > div:nth-child(4)").removeClass("related-sm-screen-hide");
  
  //shp-tab active
  
  
  

  //  $("#tab-content > div").css("color", "red");
        
        
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

$(".p-info-wrapper-bg > .availability-value, .p-info-wrapper-bg > .detail-parameters").wrapAll("<div class='detail-parametrs-wrapper'><div class='detail-parametrs-wrapper-skladem'></div></div>");  // obalí .stars-wrapper a .p-code 

$("span.flag-custom2:contains('Český produkt')").insertAfter(".detail-parametrs-wrapper-skladem").text("Český výrobek");



    $(".products-related-header").replaceWith('<h2 class="p-related-head">Doporučujeme dokoupit</h2><p class="p-related-text">Další komponenty nemusíte jinde složitě shánět. Vše najdete u nás na jednom místě.</p>');    // Související produkty 

    // přidání článků z rubriky in-web do webu
    $(".extended-description .detail-parameters").after("<div class='in-web-zaruka'></div>"); // vloží nový div
    $(".in-web-zaruka").load("/in-web/detail-produktu-zaruka-a-servis/ .content-inner .text "); // nahraj článek
    
    var $detailcontact = $(".type-detail .detail-contact-button");       
    $(".type-detail .detail-contact-button").replaceWith("<div class='in-web-rozumime'></div>");
    $(".in-web-rozumime").load("/in-web/detail-produktu-nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek
    $detailcontact.insertBefore($(".in-web-rozumime"));  
 


    // $(".detail-tabs-wrapper .extended-description").replaceWith('<h4>Technické parametry</h4');  // 
  }

  
  if (dataLayer[0].shoptet.pageType === "homepage") {


    
  $(".welcome-wrapper h1").remove();
    // $(".in-index .banners-row .col-sm-4").remove();

    // $(".in-index .banners-row .col-sm-8").removeClass("col-sm-8").addClass("col-sm-12");
    
  
    
    
    



  $("span.flag-custom2:contains('Český produkt')").each(function() {
        var flag_remove = $(this).closest(".product").find(".p-in-in");
      $(this).insertAfter(flag_remove).removeClass("flag").text("Český výrobek");
    });

    $(".ratings-wrapper").each(function() {
      var remove = $(this).closest(".product").find(".p-in");
    $(this).insertBefore(remove);
  });



    }
      else
      {
            $('.benefitBanner').insertBefore($(".custom-footer")); // Přesuneme prvek před prvek .cart-count
      }

    

      if ( (dataLayer[0].shoptet.pageType === "category")   ||  (dataLayer[0].shoptet.pageType === "homepage") )
      
        {
      
          var cat = dataLayer[0].shoptet.pageType;


          

          


          $(".flags-extra .flag-discount").each(function() { 
      
            if (cat === "category")
            {
              var price_standard = $(this).closest(".p").find(".price-standard").text();
          
            
            
            
            
            
            }
            else
            {
              var price_standard = $(this).closest(".product").find(".price-standard").text();
              
            }


          
            var price_standard_number =  price_standard.replace(",", "."); // změní string na číslo
             price_standard_number = price_standard_number.replace(/[^0-9.]/g, "");  

             if (cat === "category")
             {
              var price = $(this).closest(".p").find(".price-final strong").text();
             }
             else
             {
              var price = $(this).closest(".product").find(".price-final strong").text();

            }
 

            

            var price_number =  price.replace(",", "."); // změní string na číslo
            price_number = price_number.replace(/[^0-9.]/g, "");  
           
         //  alert(price_standard_number);
       // šlo by přepsat na funkci
           if (price.includes('Kč')) {
               var mena = "CZK"
           } else if (price.includes('€')) {
             var mena = "EUR"
           } else {
               console.log('Řetězec neobsahuje ani Kč ani €');
           }
       
            var usetreno =   price_standard_number - price_number;
           
            
       
            if (usetreno < 1000 &&  mena == "CZK" )
            {
              usetreno = usetreno.toFixed(2);
            
            }
            else if (usetreno >= 1000 &&  mena == "CZK" )
            {
              usetreno = usetreno.toFixed(0);
            
            }
            else if (usetreno > 100 &&  mena == "EUR" )
            {
              usetreno = usetreno.toFixed(0);
            
            } 
            else if (usetreno <= 100 &&  mena == "EUR" )
            {
            
              usetreno = usetreno.toFixed(2);
            } 
            else
            {
              usetreno = usetreno.toFixed(2);
        
            }
            
            usetreno = usetreno.split(/(?=(?:\d{3})+(?:\.|$))/g).join(' '); // naformátuje mezery
            
            
            if (mena == "CZK" )
            {
             mena = "Kč";
             usetreno_text = '<span class="usetreno"> Ušetříte '+usetreno+ " " +mena+ '</span>';
             usetreno_flag = '<span class="usetreno-flag"> Ušetříte <br>'+usetreno+ " " +mena+ '</span>';
           }
            else if (mena == "EUR" )
            {
             mena = "€";
                 usetreno_text = '<span class="usetreno"> Ušetříte '+mena+ +usetreno+ '</span>';
                 usetreno_flag = '<span class="usetreno-flag"> Ušetříte <br>'+mena+ +usetreno+ '</span>';        
            }
            usetreno_text =  usetreno_text.replace(".", ","); // změní string na číslo
            usetreno_flag =  usetreno_flag.replace(".", ","); // změní string na číslo   
         
            //$(".p-info-wrapper .p-final-price-wrapper > span.price-standard").before(usetreno_text);
          

            if (cat === "category")
            {
              $(this).closest(".p").find(".price-standard > span").remove();
              $(this).closest(".p").find(".price-save").remove();
              
              $(this).closest(".p").find(".price-standard").before(usetreno_flag);
          
              
              document.addEventListener('ShoptetDOMPageContentLoaded', function () {
                $(this).closest(".p").find(".price-standard > span").remove();
                $(this).closest(".p").find(".price-save").remove();                
                $(this).closest(".p").find(".price-standard").before(usetreno_flag);
  
            });
            
            
        


            
            }
            else
            {
              $(this).closest(".product").find(".price-standard > span").remove();
              $(this).closest(".product").find(".price-save").remove();
              
              $(this).closest(".product").find(".price-standard").before(usetreno_flag);
            
  

           }


          

             
           });
       
       
       

           $(".flags-extra .flag-freeshipping").each(function() { // 
      
            var remove = $(this).closest(".p").find(".flags-default");
            //$(this).insertBefore(remove)
            $(this).appendTo(remove); // doprava zdarma
          });
      




        }



  if (dataLayer[0].shoptet.pageType === "category") {



    var width = $(window).width();

            if (width < 767)
            {
              $('.filters-wrapper').insertBefore('#category-header');
              trideni01();
              document.addEventListener('ShoptetDOMPageContentLoaded', function () 
              {
                  trideni01();
                  $('.filters-unveil-button-wrapper a').html("Upřesnit parametry");
                  $('.filters-wrapper').insertBefore('#category-header');
                });
  
               
               $('.filters-unveil-button-wrapper a').html("Upřesnit parametry");
    
              }

    
  
      $('.category-perex').each(function() {
          var lines = $(this).find('p, ul > li, h1, h2, h3');
          if (lines.length > 3) {
              lines.slice(3).wrap('<div class="hidden-line"></div>');
              $(this).append('<div class="read-more">Zobrazit více</div>');
          }
      });
  
      $('.read-more').click(function() {
        //$('.category-perex').find('.hidden-line').show();
        $('.hidden-line').css("display", "block");
          $(this).remove();
      });
  
  
  
           //if ($('#footer > div > div.container.footer-rows > div.benefitBanner.position--benefitCategory').length) 
     
     if ($("#footer .conteiner-max-width  .footer-rows .benefitBanner").length)
     {
      
      

      $('#footer .conteiner-max-width  .footer-rows .benefitBanner .benefitBanner__item:nth-child(1) img').each(function() {         
        
        if($(this).attr('src').indexOf('zbozi_rozumime') != -1) {
         $(this).attr('src', '/user/documents/upload/__nemazat__/footer_zbozi_rozumime.png?=1.01');
      }
      });
      


      $('#footer .conteiner-max-width  .footer-rows .benefitBanner .benefitBanner__item:nth-child(2) img').each(function() {         
        
        if($(this).attr('src').indexOf('siroky_sortiment') != -1) {
         $(this).attr('src', '/user/documents/upload/__nemazat__/footer_siroky_sortiment.png?=1.01');
      }
      });
      

      $('#footer .conteiner-max-width  .footer-rows .benefitBanner .benefitBanner__item:nth-child(3) img').each(function() {         
        
        if($(this).attr('src').indexOf('renomovani_vyrobci') != -1) {
         $(this).attr('src', '/user/documents/upload/__nemazat__/footer_renomovani_vyrobci.png?=1.01');
      }
      });
      $('#footer .conteiner-max-width  .footer-rows .benefitBanner .benefitBanner__item:nth-child(4) img').each(function() {         
                if($(this).attr('src').indexOf('doprava_zbozi') != -1) {
          $(this).attr('src', '/user/documents/upload/__nemazat__/footer_doprava_zbozi.png?=1.01');
      }
    });
    

  } 
  




  


    // if($('body.vetsinez').length){
    //   $('#textkonfig tr').each(function(){
    //       $(this).attr('data-height', $(this).height());
    //       var finddataheight = $(this).attr('data-height');
    //       if(finddataheight > 161){
    //          // console.log("mám to")
    //           $(this).find('td').append('<div class="text-center"><p class="showmoreopen">Zobrazit více</p></div>');
    //           $(this).find('td div.surcharge-parameter').addClass('showmore');
    //       }
    //   });
    //   }
      



      
      //  var readMore = $('<span>').addClass('read-more').text('Číst více');
      //  $('.category-perex').append(readMore);
  
      // $$('.category-perex').on('click', function() {
      //     $(this).css('-webkit-line-clamp', 'unset');
      //     $(this).find('.read-more').css('display', 'none');
      // });


      // function zobrazTřiPrvky(perex) {
      //   var lines = perex.split("\n");
      //   var html = "";
      //   for (var i = 0; i < lines.length; i++) {
      //     if (i === 0 && lines[i].match(/<ul>/)) {
      //       html += lines[i].slice(4);
      //     } else {
      //       html += lines[i] + "\n";
      //     }
      //   }
      //   if (html.length > 0) {
      //     html += "<a href=\"#\">číst více</a>";
      //   }
      //   return html;
      // }
      
      // document.querySelectorAll(".category-perex").forEach(function(perex) {
      //   perex.innerHTML = zobrazTřiPrvky(perex.textContent);
      // });
      
      
  


      $(".flags-extra .flag-freeshipping").each(function() { // 
      
        var remove = $(this).closest(".p").find(".flags-default");
        $(this).insertBefore(remove)
      });
  


  
    
$("span.flag-custom2:contains('Český produkt')").each(function() {
    var flag_remove = $(this).closest(".product").find(".p-in-in");
  $(this).insertAfter(flag_remove).removeClass("flag").text("Český výrobek");

});

document.addEventListener('ShoptetDOMPageContentLoaded', function () {
  $("span.flag-custom2:contains('Český produkt')").each(function() {
    var flag_remove = $(this).closest(".product").find(".p-in-in");
  $(this).insertAfter(flag_remove).removeClass("flag").text("Český výrobek");

});
});
 
document.addEventListener('ShoptetDOMPageMoreProductsLoaded', function () {
  $("span.flag-custom2:contains('Český produkt')").each(function() {
    var flag_remove = $(this).closest(".product").find(".p-in-in");
  $(this).insertAfter(flag_remove).removeClass("flag").text("Český výrobek");

});
 });



$(".product .ratings-wrapper").each(function() { // přesuň hvězdíčky nad nadpis
  var remove = $(this).closest(".product").find(".p-in-in");
  $(this).insertBefore(remove)
});





    $(".st-subcats  .subcategories  li").removeClass("col-xl-3").addClass("col-xl-4");
    $(".st-subcats  .subcategories  li").removeClass("col-lg-3").addClass("col-lg-4");

    
    var $detailcontact = $(".type-detail .detail-contact-button");
    $(".type-category .filters-wrapper").after("<div class='in-web-rozumime'></div>");
    $(".in-web-rozumime").load("/in-web/kategorie-nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek
    $detailcontact.insertBefore($(".in-web-rozumime"));  


// přidání článků z rubriky in-web do webu
//$(".box-filters").after("<div class='in-web-rozumime'></div>"); // vloží nový div
//$(".in-web-rozumime").load("/in-web/nasemu-zbozi-rozumime/ .content-inner .text "); // nahraj článek


  }


  });