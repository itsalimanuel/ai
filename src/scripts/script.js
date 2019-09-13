const $ = window.$;
$(document).ready(function () {
    $('form .selected a[data-role=tab]').click(function (e) {
        e.preventDefault();
        $('span').text($(this).text());
        console.log('work');
        $(this).parent().parent().children(".selected").removeClass("active-orange");
        $(this).parent().addClass("active-orange");
        $("#" + $(this).data("target-id")).addClass("active-orange");

    });
    $('.cancle').click(function () {
        $('.selected').removeClass('active-orange');
        $('span').text($(this).text());
    })
    $('img#photo').imgAreaSelect({
        keys: { arrows: 15, ctrl: 5, shift: 'resize' }
    });
    $('idchanged').text($(this).text());
})


function preview(img, selection) {
    if (!selection.width || !selection.height)
        return;
    
    var scaleX = 100 / selection.width;
    var scaleY = 100 / selection.height;

    $('#photo img').css({
        width: Math.round(scaleX * 300),
        height: Math.round(scaleY * 300),
        marginLeft: -Math.round(scaleX * selection.x1),
        marginTop: -Math.round(scaleY * selection.y1)
    });

 

   
   console.log('x1 = ' + selection.x1)
   console.log('y1 = ' + selection.y1)
   console.log('x2 = ' + selection.x2)
   console.log('y2 = ' + selection.y2)
   console.log('Width = ' + selection.width)
   console.log('Height = ' + selection.height)

}

$(function () {
    $('#photo').imgAreaSelect({ 
       
        handles: true,
        shift: 'resize',
        fadeSpeed: 200,
        onSelectChange: preview });
});
