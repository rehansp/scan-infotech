$(document).ready(function(){
  $('#submit_btn').click(function () {
      $("#meraform").validate({
        rules : {
          ItemName : {
            required : true
          },
          PosCode : {
            required : true
          },
          MenuCode : {
            required : true
          },
          Popular : {
            required : true
          },
          PriceMonday : {
            required : true
          },
          PriceTuesday : {
            required : true
          },
          PriceWednesday : {
            required : true
          },
          PriceThursday : {
            required : true
          },
          PriceFriday : {
            required : true
          },
          PriceSaturday : {
            required : true
          },
          CostCenterCode:{
            required : true
          },
          AreaCode : {
            required : true
          }
        },
        messages : {
          ItemName : "This field is required",
          PosCode : "Please select an option from the list",
          MenuCode : "Please select an option from the list",
          PriceMonday : "This field is required",
          PriceTuesday : "This field is required",
          PriceWednesday : "This field is required",
          PriceThursday : "This field is required",
          PriceFriday : "This field is required",
          PriceSaturday : "This field is required",
          CostCenterCode : "Please select an option from the list",
        AreaCode : "Please select an option from the list",
        },
    
        submitHandler : function (form){
          form.submit(alert("Thanks for submitting details!"))
        }

      })
  })
})


 