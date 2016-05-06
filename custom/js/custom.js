$(document).ready(function () {
  function init () {
    var href, $lastLink;
    
    $("a[aria-label=Search]").remove();
    $("a.toggle-search").remove();

    $lastLink = $(".custom-link:last");
    href = $lastLink.prop("href");
    href = "https://ed-era.com/books/" + _.last(href.split("-"));
    $lastLink.prop("href", href);
    $("img#map1").hide();
    $("img#map2").hide();
    $("img#map3").hide();
    $(document).on('click', '.show-map', function() {
      if($('input#map1').prop( "checked" ))
        $("img#map1").show();
      if(!$('input#map1').prop( "checked" )){
        $("img#map1").hide();
      }
      if($('input#map2').prop( "checked" ))
        $("img#map2").show();
      if(!$('input#map2').prop( "checked" )){
        $("img#map2").hide();
      }
      if($('input#map3').prop( "checked" ))
        $("img#map3").show();
      if(!$('input#map3').prop( "checked" )){
        $("img#map3").hide();
      }
    });
  }

  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});