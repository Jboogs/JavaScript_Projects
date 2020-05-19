function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
    else if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    else if (z == "") {
        alert("Email must be entered");
        return false;
    }
    else {
        alert("Your information has been submitted, Thank you!");
        return true;
    }
  } 