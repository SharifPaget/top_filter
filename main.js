$(document).ready(function(){
  $(".filter").on("change", function(e){
    e.preventDefault();

    var filter = $(this).val();

    this_row.find(".percent").find("span").text(pre_tariff_cost);

    $(".item.active").removeClass("active");
    $("." + filter).addClass("active");
  });
});
