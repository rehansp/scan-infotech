// http://www.designchemical.com/blog/index.php/jquery/email-validation-using-jquery/

$(document).ready(function (){
    $('#second_step').hide();
    $('#next_btn').click(function (){
       $(".error").hide();
          var hasError = false;
  
          var ClientNameVal = $('#client_name').val();
          var TelephoneVal = $('#TelephoneNo').val();
          var emailaddressVal = $("#email").val();
  
           var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
           var textRegex = /^[A-Za-z]+$/;
  
           var mobileRegex = /^[0]?[789]\d{9}$/;
          
          if(ClientNameVal == ''){
            $('#client_name').after('<span class="error">please enter your Name </span>')
            hasError = true;
            return false;
  
          }
          
          else if (TelephoneVal == ''){
            $('#TelephoneNo').after('<span class="error">please enter your Telephone No </span>')
            hasError = true;
            return false;
          }
          else if(!mobileRegex.test(TelephoneVal)){
            $('#TelephoneNo').after('<span class = "error">Please enter a valid mobile number</span>')
            hasError = true;
            return false;
          }
  
          else if(emailaddressVal == ''){  
            $("#email").after('<span class="error">please enter your email address </span>')
            hasError = true;
            return false;
          }
          else if(!emailReg.test(emailaddressVal)){
            $("#email").after('<span class="error">please enter valid email address </span>')
            hasError = true;
            return false;
          }
          else{
              $('#first_step').hide("fast");
              $('#second_step').show("slow");
              return true;
          }
  
          return true;
    })
  
    $('#prev_btn').click(function() {
      $('#second_step').hide("fast");
      $('#first_step').show("slow");
    })
  
  $('#Submit_btn').click(function () {
  
    $('#myform').validate({
      rules: {
        country : {
          required: true
        },
        State : {
          required: true
        },
        City : {
          required: true
        },
        Address1 : {
          required: true
        },
        Address2 : {
          required: true
        },
        Address3 : {
          required: true
        },
        Pincode : {
          required: true,
          number: true,
          maxlength : 6,
          minlength : 6
        }
      },
      messages : {
        country : "Please Select an option from list",
        State : "Please Enter Your State",
        City : "Please Enter Your City",
        Address1 : "Please Provide Address1",
        Address2 : "Please Provide Address2", 
        Address3 : "Please Provide Address3",
        Pincode : "Please Enter Your Pincode"
      },
  
      submitHandler : function(form){
        form.submit(
          alert("Thanks for submitting form!")
        )
      }
    })
    })
  });