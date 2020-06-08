function getWidth(selector){
    return $(selector).outerWidth();
}

$(function () { 
    const items = $(".photo_item");
    const itemsW = items.width();
    // items.each(function (item) { 
    //     console.log(item.width());
    //  });
    items.height(itemsW);

    // 

    $("#show-menu").on("click",function () { 
            $(".menu--mobile").addClass("show_m");
     });
     $(".closeMenu").on("click",function () { 
        $(".menu--mobile").removeClass("show_m");
    });
    $(".sub_menu").on("click",function () { 
        const parent = $(this).parent();
        parent.addClass("hide_parent");
        $(this).addClass("show_child");
    });
 
 })