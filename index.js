var form=$("#form");
let home=$("#main");
var sec=$(".secondary");
form.hide();
sec.hide();
$(".Patient-form").click(function(){
    form.show();
    home.hide();
    sec.show();
})
$(".homepage").click(function(){
    form.hide();
    home.show();
    sec.hide();

})
$(".btn-secondary").click(function(){
    form.show();
    home.hide();
    sec.show();
})
$(".Home").click(function(){
    form.hide();
    home.show();
    sec.hide();
})

