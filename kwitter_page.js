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
username = localStorage.getItem("userName");
roomname = localStorage.getItem("roomName");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}