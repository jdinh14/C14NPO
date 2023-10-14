function validator() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
    if (document.myForm.fName.value == "") {
        alert("must fill in name");
        document.myForm.fName;
        return false;
    }
    if (document.myForm.lName.value == "") {
        alert("must fill in last name");
        document.myForm.lName;
        return false;
    }
    if (document.myForm.userEmail.value == "") {
        alert("must fill in email");
        document.myForm.userEmail;
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(document.myForm.userEmail.value.trim())) {
        alert(document.myForm.userEmail.value + " Passed");
    } else {
        alert(document.myForm.userEmail.value + ' Email is not valid');
    }
    // if (!isEmail(userEmail)) {
    //     alert(document.myForm.userEmail.value + " is not valid email");
    //     return false;
    // } 
    // if (document.myForm.userEmail.value.match(validRegex)) {
    //     alert("Passed");
    // } else {
    //     alert(document.myForm.userEmail.value + " is not valid email");
    //     return false;

    // }

    return (true);

}