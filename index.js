$(document).ready(function () {
    $(".reference, .dependent, .inferior, .superior").hide()
});

$("#dpdType").change(function () {
    var type = $(this).val();
    if (type == "physicalPerson") {
        $("form").hide();
        $("form#physicalPerson-form").show();
    } else if (type == "legalPerson") {
        $("form").hide();
        $("form#legalPerson-form").show();
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
    } else {
        $(".dependent").hide();
        $(".reference").show();
    }
});

$("#dpdLimit").change(function(){
    if ($("#dpdLimit").val() === "inferior"){
        $(".superior").hide();
        $(".inferior").show();
    }
    else{
        $(".inferior").hide();
        $(".superior").show();        
    }
});
