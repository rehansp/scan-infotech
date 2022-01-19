$(document).ready(function(){
   $("#submit_btn").click(function(){
       $("#myform").validate({
            rules : {
                openingTime :{
                    required : true
                },
                closingTime: {
                    required : true
                },
                opSlotName :{
                    required : true
                }
            },
            messages : {
                openingTime : "Please Select Opening Time",
                closingTime : "Please Select closing Time",
                opSlotName : "This field is required",
            },

            submitHandler : function(form){
                form.submit(alert("Thanks!"));
            }
       });
    
   });
});