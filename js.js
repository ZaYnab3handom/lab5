/*-	In the login form assignment in Day.6 lab, use local storage to save user name and password in the prev. assignment, 
  when user press login button, and retrieve them on page load and write them to the textboxes.
    a.	Can you use session storage in the previous assignment? Why? no,since session storage data delet with refresh
    b.	What’s the difference between local storage and session storage?sessionStorage data gets cleared when the page session ends –
    c.	Can you access local storage and session storage in another page than the page that created it (on the same site)?
 */

var userName = document.getElementById("usrName")
var userPass = document.getElementById("Pass")
var remstate = document.getElementById("rememberMe")

function setDataLocalStorge() {
  //console.log(userName.value)
  //console.log(userPass.value)
  if(remstate.checked)
  {localStorage.setItem("userName", userName.value)
  localStorage.setItem("Pass", userPass.value)}
}

/*2-In the previous Assignment, add “remember me” check box, and save user name and password only
 if the user checked this checkbox, and if the user didn’t check it,
 remove the saved user name and password from local storage if they saved before.
*/
function remeberMeLocaolStorge() {
  //localStorage.setItem("tes","test")
  //console.log(remstate.checked)
  if (remstate.checked) {
    setDataLocalStorge()
  }
  else {
    localStorage.removeItem("userName")
    localStorage.removeItem("Pass")
  }
}
/*3-Make JSON Object that holds Student data (ID, name, Age, Address, Skills (array), IsLeader (Boolean),
 address). [Use JSON object and don’t use string in keys].
*/
var studentData ='{"Id":1,"name":"ali","Age":20,"Adress":"suez","Skills":["c","c++","js"],"Isleader":true}'
var jsontojsobject = JSON.parse(studentData)
console.log(jsontojsobject.name)

/*4-Make an array (of 3 students) of the previous student object,and print each student name along with his skills
 (make the address null for one of the students).
    a.	Can JSON hold null and Boolean values? yes
    b.	What are the differences between XML and JSON?
 */
var arrOfStudent = [
  '{"Id":1,"name":"ali","Age":20,"Adress":"suez","Skills":["c","c++","js"],"Isleader":true}',
  '{"Id":2,"name":"sad","Age":20,"Adress":"suez","Skills":["c","c++","js"],"Isleader":true}',
  '{"Id":1,"name":"ali","Age":20,"Adress":null,"Skills":["c","c++","js"],"Isleader":true}'
]

for (const st of arrOfStudent) {
   //console.log(st)
   var JsonToObj = JSON.parse(st)
   //console.log(JsonToObj)
   console.log("student name:" ,JsonToObj.name)
   console.log("student Skill:",JsonToObj.Skills)
   console.log("student Skill:",JsonToObj.Adress)
}

/*6-In local storage Assignment (No.1) use cookies instead of local storage.
 */

const d = new Date();
function setDataCookies() {
  localStorage.removeItem("userName")
  localStorage.removeItem("Pass")
  
  d.setTime(d.getTime() + (10*24*60*60*1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "username" + "=" + userName.value + ";" +"Pass"+"="+userPass.value+";"+  expires + ";path=/";
}

// function removeCookies (){
// console.log("hellp")
//   // d.setTime(d.getTime() -(10*24*60*60*1000));
//   // expires = "expires=" + d.toUTCString();
//   // document.cookie = "username"+"="+" "+";"+"Pass"+"="+" "+expires+";path=/;";

// }

