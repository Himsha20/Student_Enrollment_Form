function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateform(){  
    // var name=document.getElementById('#name_field');  
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var website = document.contactForm.website.value;
    var imagelink = document.contactForm.imagelink.value;
    var gender = document.contactForm.gender.value;
    
    var skill =[];
    var checkboxes = document.getElementsByName("skill[]");
    var x =  document.getElementById("my");

     var nameErr = emailErr = websiteErr = imagelinkErr = genderErr = skillErr = true;
   
// Validate Name
    if(name == "") {
        printError("nameErr", " *Please enter your name");
        return false;
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", " *Please enter a valid name");
             return false;
        } else {
            printError("nameErr", "");
            document.getElementById('show_name').innerHTML = name;
             nameErr = false;
             
        }
        
    }


     // Validate email address
     if(email == "") {
        printError("emailErr", "*Please enter your email");
        return false;
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "*Please enter a valid email");
            return false;
        } else{
            printError("emailErr", "");
            document.getElementById('show_email').innerHTML = email;
         
            emailErr = false;
        }
    }
// Validate Website address
     if(website == ""){
         printError('websiteErr',"*Please Enter Your Website");
         return false;
     }else {
        var regex= /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
         if(regex.test(website) === false) {
            printError("websiteErr", "*Please enter a valid Website");
            return false;
        } else{
            printError("websiteErr", "");
            document.getElementById('show_website').innerHTML =  website;
            
            websiteErr = false;
        }
     }


   // Validate Image address
     if(imagelink == ""){
        printError('imagelinkErr',"*Please Enter Your link");
        return false;
    }else {
        var regex= /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
        if(regex.test(imagelink) === false) {
           printError("imagelinkErr", "*Please enter a valid link");
           return false;
       } else{
           printError("imagelinkErr", "");
           document.getElementById('show_imagelink').innerHTML = '<img src="'+imagelink+'" alt="Image"  style="height:205px;width:170px"/>'
           imagelinkErr = false;
       }
    }

    // Validate Gender
    if(gender == "") {
        printError("genderErr", "*Please select your Gender");
        return false;
    } else {
        printError("genderErr", "");
        document.getElementById('show_gender').innerHTML = gender;
        genderErr = false;
    }


    // function for Skill Select
    for(var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            skill.push(checkboxes[i].value);
            document.getElementById('show_skill').innerHTML = skill;
          
    }   
     } 
  



    if((nameErr || emailErr || websiteErr || imagelinkErr || genderErr) == true) {
        return false;
     } else {
         // Creating a string from input data for preview
         var dataPreview = "You've entered the following details: \n" +
                           "Name: " + name + "\n" +
                           "Email: " + email + "\n" +
                           "Website: " + website +"\n" +
                           "Imagelink: " + imagelink +"\n" +
                           "Gender: " + gender +"\n" +
                           "Skills: " + skill +"\n";
                           
         // Display input data in a dialog box before submitting the form
         alert(dataPreview);

        
     }

     // function for Skill Display
     if (x.style.visibility = "hidden") {
       x.style.visibility = "visible";
      } else {
        x.style.visibility = "visible";
      }


   
               
    return false;

      }  
     
      // Function For Website Open In New Tab
      function myFunction() {
        var x = document.contactForm.website.value;
        document.getElementById("demo").href = x;
        
      }