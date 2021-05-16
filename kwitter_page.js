 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyD3xqbNUT6bkp5vr1ooHJ0osaG_wH75xpQ",
      authDomain: "social-website-1.firebaseapp.com",
      databaseURL: "https://social-website-1-default-rtdb.firebaseio.com",
      projectId: "social-website-1",
      storageBucket: "social-website-1.appspot.com",
      messagingSenderId: "364224354674",
      appId: "1:364224354674:web:9382f551dc6c7c8436e5eb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}