$(window).on("load", startPige);

function startPige() {
    console.log("pige kommer ind");


    $("#pige_container").removeClass("pige_start_pos");

    $("#pige_container").addClass("pige_move_right");
    $("#pige_sprite").addClass("pige_walkcycle");

    $("#pige_container").on("animationend", startShow);
}

//---------------------MAND BLIVER BANGE---------------------
function startShow() {
    console.log("pigen viser teksten");

    $("#pige_container").off("animationend", startShow);

    $("#pige_sprite").addClass("pige_show")

    $("#pige_container").on("animationend")

}
