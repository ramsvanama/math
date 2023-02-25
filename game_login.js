// Create function addUser()
function addUser(){
  // Get value of user by id player1_name_input and player2_name_input
  var name1 = document.getElementById("player1_name_input").value;
  var name2 =  document.getElementById("player2_name_input").value;
  // Store these values locally
    localStorage.setItem("player1_name",name1);
    localStorage.setItem("player2_name",name2);
  //Assign "game_page.html" to window.location
    window.location = "game_login.html";
}

