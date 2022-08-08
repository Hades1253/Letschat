var firebaseConfig = { apiKey: "AIzaSyCqnxq6jITh8gTGH6s-lgCNLt_8Dyqjp9c", authDomain: "rishi-ed6c6.firebaseapp.com", databaseURL: "https://rishi-ed6c6-default-rtdb.firebaseio.com", projectId: "rishi-ed6c6", storageBucket: "rishi-ed6c6.appspot.com", messagingSenderId: "753075952227", appId: "1:753075952227:web:78108d92d87cc89031b656" }; // Initialize Firebase firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}