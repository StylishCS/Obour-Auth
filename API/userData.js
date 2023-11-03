document.addEventListener("DOMContentLoaded", async function () {
  const token = localStorage.getItem("token");
  if (!token) {
    document.getElementById("welcomeMsg").innerHTML = "Not Authorized";
    return;
  }
  const username = localStorage.getItem("username");
  document.getElementById("welcomeMsg").innerHTML = `Welcome ${username}`;
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  document.getElementById("userId").innerHTML = `ID: ${id}`;
  document.getElementById("userEmail").innerHTML = `Email: ${email}`;
  document.getElementById("userRole").innerHTML = `Role: ${role}`;
  document.getElementById("userSession").innerHTML = `Session Key: ${token}`;
});

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

/*
createdAt
: 
"2023-11-03T02:21:29.157Z"
email
: 
"user1@example.com"
name
: 
"User 1"
role
: 
"ADMIN"
updatedAt
: 
"2023-11-03T02:21:29.157Z"
verified
: 
true
__v
: 
0
_id
: 
"6544592842c02410128803c4"
*/
