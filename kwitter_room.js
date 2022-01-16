
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function add_room(){
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
