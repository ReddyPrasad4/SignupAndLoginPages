var allInputTags = document.querySelectorAll("input");
console.log(allInputTags);

var allSelectTags = document.querySelectorAll("select");

function userData()
{
    var fName = allInputTags[1].value;
    var sName = allInputTags[2].value;
    var phoneNo = allInputTags[3].value;
    var email = allInputTags[4].value;
    var pass = allInputTags[5].value;
    var date = allSelectTags[0].value;
    var day = allSelectTags[1].value;
    var year = allSelectTags[2].value;
    
    // console.log(fName,sName,phoneNo,email,pass,date,day,year, gender);

    localStorage.setItem("firstName",fName);
    localStorage.setItem("secondName",sName);
    localStorage.setItem("phoneNo",phoneNo);
    localStorage.setItem("emailID",email);
    localStorage.setItem("password",pass);
    localStorage.setItem("DOB",`${date}-${day}-${year}`);
   
    window.open("login page.html");
}

function genderFun(gen)
{
    var gender = gen;
    localStorage.setItem("gender",gender);
}
function gotoLoginPage()
{
    window.open("login page.html");
}