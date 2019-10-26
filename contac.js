array=randomOperation();
writeRandomOperation(array);

function randomOperation() {
    var a = Math.floor(Math.random() * 20);
    var b = Math.floor(Math.random() * 20);
    var array=[a,b];
    return array;
}
function writeRandomOperation(array)
{
    document.getElementById("operation").innerText = array[0] + " + " + array[1] + " = ?";
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateForm() {

    x = document.forms["form"]["name"].value;
    if (x == "") {
        document.getElementById("name_error").innerHTML = "Please fill out your name";
        return false;
    }
    else
        document.getElementById("name_error").innerHTML = "correct!";

    x = document.forms["form"]["email"].value;
    if (!validateEmail(x)) {
        document.getElementById("email_error").innerHTML = "Please fill out a valid email format";
        return false;
    }
    else
        document.getElementById("email_error").innerHTML = "correct!";

 
    sum = array[0] + array[1];
    if (sum != document.forms["form"]["operation"].value) {
        document.getElementById("ope_error").innerHTML = "Please fill out a correct answer";
        return false;
    }
    else {
        document.getElementById("ope_error").innerHTML = "correct!";
        window.alert("Thank you for your information!");
        return true;
    }
}






