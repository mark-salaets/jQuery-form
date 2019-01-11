$(document).ready(function() {
  $("#reset").click(function(e) {
    e.preventDefault();

    //reset input fields
    $(".form-control").val("");
  })

  $("#send").click(function(e) {
    e.preventDefault();

    //check values of form
    let displayName = $("#display-name").val();
    let pwd = $("#pass").val();
    let pwdConfirm = $("#pass-confirm").val();
    let email = $("#email").val();

    let validName;
    let validPwd;
    let validEmail;

    //regex variables
    var emailRegex = new RegExp (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
    var testMail = emailRegex.test($("#email").val());
    var pwdRegex = new RegExp (/^[A-Za-z]\w{7,14}$/);
    var testPwd = pwdRegex.test($("#pass").val());

    //validate input
    if(
      (displayName.length >5) &&
      ($("#display-name").val() !== "" )
    ) {
      validName = true;
      $("#display-name").css("border", "3px solid green");
    } else {
      validName = false;
      $("#display-name").css("border", "3px solid red");
    }

    if(
      (pwd === pwdConfirm) &&
      ($("#pass").val() !== "" ) &&
      (testPwd)
      ) {
      validPwd = true;
      $("#pass").css("border", "3px solid green");
      $("#pass-confirm").css("border", "3px solid green");
    } else {
      validPwd = false;
      $("#pass").css("border", "3px solid red");
      $("#pass-confirm").css("border", "3px solid red");
    }

    if(
      ($("#email").val() !== "") &&
      (testMail)
      ) {
      validEmail = true;
      $("#email").css("border", "3px solid green");
    } else {
      validEmail = false;
      $("#email").css("border", "3px solid red");
    }

    console.log("is name valid? " + validName);
    console.log("is pwd valid? " + validPwd);
    console.log("is email valid? " + validEmail);

    if(validName === true && validPwd === true && validEmail === true) {
      //this code only runs when all values are valid
      $("#mistake").hide();
      console.log("all valid");
    } else {
      //this code runs when at least one value is invalid
      $("#mistake").show();

    }
  })
})
