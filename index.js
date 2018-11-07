$(document).ready(function () {
    $(".reference, .dependent, .inferior, .superior").hide();
    $('.phone').mask('(00) Z 0000-0000', {
        translation: {
            'Z': {
                pattern: /9/,
                optional: true
            }
        }
    });
    $('.phone').attr('placeholder',"(99) 9 9999-9999");
    $('.money').mask('#.##0,00', {
            reverse: true
        });
    
    $('.cpf').mask('000.000.000-00');
    $('.cpf').attr("placeholder", "999.999.999-99");
    
    $('.agency').mask('0000');
    $('.agency').attr("placeholder", "9999");
    
    $('.account').mask('#0-0',{reverse:true});
    $('.account').attr("placeholder", "99-9");
});

$("#dpdType").change(function () {
    var type = $(this).val();
    $("#btnSubmit").show();
    $("select#dpdLimit").get(0).selectedIndex = 0;
    $("select#dpdBank").get(0).selectedIndex = 0;
    $("select#dpdDependents").get(0).selectedIndex = 0;
    if (type == "physicalPerson") {
        $("form").hide();
        $("form#physicalPerson-form").show();
        $("#dpdDependents").change();
    } else if (type == "legalPerson") {
        $("form").hide();
        $("form#legalPerson-form").show();
        $("#dpdLimit").change();
    } else if (type == "noAccount") {
        $("form").hide();
        $("form#noAccount-form").show();
    } else {
        $("form").hide();       
    } 
});

$("#dpdDependents").change(function () {
    if ($("#dpdDependents").val() === "yes") {
        $(".reference").hide();
        $(".dependent").show();
    } else if($("#dpdDependents").val() === "no") {
        $(".dependent").hide();
        $(".reference").show();
    }
    else{
        $(".dependent").hide();
        $(".reference").hide();
    }
});

$("#dpdLimit").change(function(){
    if ($("#dpdLimit").val() === "inferior"){
        $(".superior").hide();
        $(".inferior").show();
    }
    else if($("#dpdLimit").val() === "superior"){
        $(".inferior").hide();
        $(".superior").show();        
    }
    else{
         $(".inferior").hide();
        $(".superior").hide();
    }
});

$(".btnSubmit").click(function(){
   var button = $(this).attr("id");
    if(button==="btnPhysicalPerson");  
});


