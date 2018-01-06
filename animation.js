$(window).on("load", startPige);

function startPige() {
    console.log("pige kommer ind");


    $("#pige_container").removeClass("pige_start_pos");

    $("#pige_container").addClass("pige_move_right");
    $("#pige_sprite").addClass("pige_walkcycle");

    $("#pige_container").on("animationend", startBange);
}

//---------------------MAND BLIVER BANGE---------------------
function startBange() {
    console.log("mand bliver bange");

    $("#pige_container").off("animationend", startBange);

    $("#pige_sprite").addClass("pige_bange")

    $("#pige_container").on("animationend", startThinking);

}

//--------------------MAND TÆNKER---------------------
function startThinking() {
    console.log("mand tænker");
    $("#lion_container").removeClass("lion_start_pos");
    $("#lion_container").off("animationend", startThinking);

    $("#taleboble_svar").addClass("show_taleboble");

    $("#lion_container").on("animationend", startChoose);
}
