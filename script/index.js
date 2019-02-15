//SYARY WEBSITE
var firstValue = document.getElementById("the-input1");
var secondValue = document.getElementById("the-input2");
var thirdValue = document.getElementById("the-input3");
//check if all the input fields are there while button is not clicked

function timer(){
  setInterval(function(){
    if(firstValue.value === "" || secondValue.value === "" || thirdValue.value === "")
    {
      //some or all the fields are empty
      alert("fill in ll the required fields please");
    }
    else
    {
        //all the fiels are there
    }
  },30000);
}
//UNCOMMENT BELOW;
//timer();
var clickFunction = (()=>{
  if(firstValue.value === "" || secondValue.value === "" || thirdValue.value === "")
  {
    //some or all the fields are empty
    alert("fill in ll the required fields please because a triangle has 3 sides");
  }
  else
  {
      //all the fiels are there
      console.log(firstValue.value + " " +secondValue.value+" "+ thirdValue.value);
      //logic for triangle tracker goes WHERE WHERE here
      //define for not a triangle;
      function check(callback){
        var ans1 = parseInt(firstValue.value);
        var ans2 = parseInt(secondValue.value);
        var ans3 = parseInt(thirdValue.value);
        function add(number1 , number2){
          return number1 + number2;
        }
        var possibility1 = add(ans1 , ans2);
        var possibility2 = add(ans2 , ans3);
        var possibility3 = add(ans1 , ans3);
        if(possibility1 === ans3 || possibility1 < ans3)
        {
          callback();
        }
        else if(possibility2 === ans1 || possibility2 < ans1)
        {
          callback();
        }
        else if(possibility3 === ans2 || possibility3 < ans2)
        {
          callback();
        }
        else
        {
          //it is a Triangle
          //which type logic goes here
            if(ans1 === ans2  && ans2 === ans3 && ans1 === ans3)
            {
              alert("it is an equilateral triangle");
            }
        }
      }
      check(function(){
        //not a triangle logic goes here
        alert("not a triangle");
      });
  }
});
