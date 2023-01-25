/*5-Use AJAX to retrieve user data, and display: First Name, Last name and user avatar image 
(show the user image in an <img> tag) from the following test web API: https://reqres.in/api/users/1 
    a.Make a textbox where the user can enter user ID, and press display and then display the user 
    with the given ID.
    b.Use this web API: https://reqres.in/api/users to return all users data, and make a dropdown list 
    and fill it with students name returning form the API. (Loop on them and display all users).
    c.When user selects specific user (onchange event), display his data and image below the dropdown list.
 */

    
/*5-Use AJAX to retrieve user data, and display: First Name, Last name and user avatar image 
(show the user image in an <img> tag) from the following test web API: https://reqres.in/api/users/1 */
    var xhr = new XMLHttpRequest()
        xhr.open('GET','https://reqres.in/api/users/1',true)
        xhr.onload = function(){
            var userdata = xhr.responseText
            console.log(userdata)
            var usrdataconverted =  JSON.parse (userdata)
            console.log(usrdataconverted)
            document.getElementById("firstName").innerText+=usrdataconverted.data.first_name
            document.getElementById("lastName").innerText+=usrdataconverted.data.last_name
            document.getElementById("usrImage").setAttribute('src',usrdataconverted.data.avatar)          

        }
        xhr.send()
    
 /*a.Make a textbox where the user can enter user ID, and press display and then display the user 
    with the given ID.
  */  
   
 function getUserById(){

        var searchId = document.getElementById("id").value
        var xhr2 = new XMLHttpRequest()
    xhr2.open('GET','https://reqres.in/api/users',true)
    xhr2.send()
        
        var getteduser;
        var userdiv = document.getElementById("userdata")

        xhr2.onload = function(){
            var usersdata = xhr2.responseText
            console.log(usersdata)
            var usrsdataconverted =  JSON.parse (usersdata)
            console.log(usrsdataconverted)
            var uersarray=usrsdataconverted.data
            console.log(uersarray)
            console.log(searchId)
            //get user by id
            for (const user of uersarray) {
                console.log(user.id)
                if(user.id==searchId){
                    getteduser=user
                    var img = document.getElementById('usrImage1');
                    img.src =getteduser.avatar
                    img.style.visibility="visible"
                    document.getElementById("firstName1").innerText="first Name: "+getteduser.first_name
                    document.getElementById("lastName1").innerText="last Name: "+getteduser.last_name

                }
            }
 
        }
 }   
 /*b.Use this web API: https://reqres.in/api/users to return all users data, and make a dropdown list 
    and fill it with students name returning form the API. (Loop on them and display all users).*/
    var xhr3 = new XMLHttpRequest()
    xhr3.open('GET','https://reqres.in/api/users',true)
    xhr3.send()
    xhr3.onload=function(){
        var usersdata = xhr3.responseText
        var usrsdataconverted =  JSON.parse (usersdata)
        console.log(usrsdataconverted)
        var uersarray=usrsdataconverted.data
        var selecttag = document.getElementById("selectbar");
    var option= document.createElement("option")
    option.text="Select user name"
    selecttag.add(option)
    for (const user of uersarray) {
        console.log(selecttag)
         option=document.createElement("option")
        option.text =user.first_name+" "+ user.last_name
        option.id = user.id
        selecttag.add(option)
       
    }
/* c.When user selects specific user (onchange event), display his data and image below the dropdown list.
*/
    selecttag.addEventListener("change", () => {
       console.log( selecttag.value)
       for (const user of uersarray){
        if(selecttag.value==user.first_name+" "+user.last_name){
        console.log(user.id)
        var img = document.getElementById('usrImage2')
        img.src=user.avatar
        img.style.visibility="visible"
        
        document.getElementById("firstName2").innerText="first Name: "+user.first_name
        document.getElementById("lastName2").innerText="last Name: "+user.last_name
       
                    }
        }

     })

    }