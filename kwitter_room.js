const firebaseConfig = {
      apiKey: "AIzaSyANTj-lvC1O3M3a1aIbPB970sdPqidtMeY",
      authDomain: "kwitter-2e560.firebaseapp.com",
      databaseURL: "https://kwitter-2e560-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e560",
      storageBucket: "kwitter-2e560.appspot.com",
      messagingSenderId: "385809595778",
      appId: "1:385809595778:web:59cfc5e79a8fd3caaaa39b",
      measurementId: "G-JVJ1LM1T2J"
};


firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
document.getElementById("userName").innerHTML = "Welcome " + userName + "!";

function addRoom() {
      roomName = document.getElementById("roomName").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding roomName"
      });
      localStorage.setItem("roomName", roomName);
      window.location = "kwitter_page.html";
}
      function getData() {
            firebase.database().ref("/").on('value', function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' > #" + Room_names + "</div><hr>";
                        document.getElementById("output").innerHTML += row;
                  });
            });
      }
      getData();

      
function redirectToRoomName(name) {
      localStorage.setItem("roomName", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}