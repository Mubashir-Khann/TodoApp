const firebaseConfig = {
  apiKey: "AIzaSyDUJxIHab0XxT07b1L52jgMHlgmX8PyDa4",
  authDomain: "tododata-4272c.firebaseapp.com",
  databaseURL: "https://tododata-4272c-default-rtdb.firebaseio.com",
  projectId: "tododata-4272c",
  storageBucket: "tododata-4272c.appspot.com",
  messagingSenderId: "603073305118",
  appId: "1:603073305118:web:bfbe34abb7d2a3cde66c0f",
};

const frb = firebase.initializeApp(firebaseConfig);

console.log(frb.database);

firebase
  .database()
  .ref("todos")
  .on("child_added", (data) => {
    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    liElement.appendChild(liText);
    console.log(liElement);

    //        DELETE BUTTON

    var dltBtn = document.createElement("button");
    var dltBtnText = document.createTextNode("Delete");
    dltBtn.appendChild(dltBtnText);

    dltBtn.setAttribute("id", data.val().key);
    dltBtn.setAttribute("class", "dltbtn");
    dltBtn.setAttribute("onclick", "deleteItem(this)");
    var list = document.getElementById("list");
    liElement.appendChild(dltBtn);
    list.appendChild(liElement);

    //        EDIT BUTTON

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("edit");
    editBtn.appendChild(editBtnText);

    editBtn.setAttribute("id", data.val().key);
    editBtn.setAttribute("class", "edidbtn");

    editBtn.setAttribute("onclick", "editItem(this)");
    liElement.appendChild(editBtn);
  });

function add() {
  var input = document.getElementById("inputVal");

  console.log(input.value);

  var key = firebase.database().ref("todo").push().key;

  let obj = {
    value: input.value,
    key: key,
  };
  firebase.database().ref("todos").child(key).set(obj);

  input.value = "";
}

function deleteAll() {
  var list = document.getElementById("list");

  firebase.database().ref("todos").remove();

  list.innerHTML = "";
}

function deleteItem(a) {
  console.log(a.id);

  firebase.database().ref("todos").child(a.id).remove();
  a.parentNode.remove();
}

function editItem(b) {
  //   var val = b.parentNode.firstChild.nodeValue;
  var userValue = prompt("Edit your value");

  var editTodo = {
    value: userValue,
    key: b.id,
  };
  firebase.database().ref("todos").child(b.id).set(editTodo);

  b.parentNode.firstChild.nodeValue = userValue;
}
