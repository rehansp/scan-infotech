$(document).ready(function(){
    $("#submit_btn").click(function() {
        $("#myform").validate({
            rules : {
                PosCode: {
                    required : true
                },
    
                Type: {
                    required : true
                },
    
                BillSeries: {
                    required : true
                },
    
                LastNo: {
                    required : true
                },
                
                Codes: {
                    required : true
                },
    
                Names : {
                    required : true
                },
    
                PropertyCode: {
                    required : true
                }, 
    
                BillNote: {
                    required : true
                }
            },
            messages : {
                PosCode : "please select an option from the list",
                Type : "please select an option from the list",
                BillSeries : "This field is required",
                LastNo : "This field is required",
                Codes : "please select an option from the list",
                Names : "please select an option from the list",
                PropertyCode : "This field is required",
                BillNote : "This field is required",
    
            },
            submitHandler : function(form){
                form.submit(alert("Thanks!"));
            }
        })
    })
    
})