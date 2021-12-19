function login(){
    Player1_name = document.getElementById("login_player1").value;
    Player2_name = document.getElementById("login_player2").value;
    localStorage.setItem("Player1_name", Player1_name);
    localStorage.setItem("Player2_name", Player2_name);
    window.location = "quiz_game_page.html";
}