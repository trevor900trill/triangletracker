//SYARY WEBSITE
var firstValue = document.getElementById("the-input1");
var secondValue = document.getElementById("the-input2");
var thirdValue = document.getElementById("the-input3");
//check if all the input fields are there while button is not clicked
//this is to rmind the user to input values when the page is idle
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
              //render elements here;
              document.getElementsByClassName("triangleimage")[0].setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Triangle.Equilateral.svg/220px-Triangle.Equilateral.svg.png");
              document.getElementsByClassName("descriptiontext")[0].textContent="Equilateral triangle";
              document.getElementsByClassName("show1")[0].textContent=ans1;
              document.getElementsByClassName("show2")[0].textContent=ans2;
              document.getElementsByClassName("show3")[0].textContent=ans3;

            }
            else if(ans1 === ans2 || ans2 === ans3 || ans1 === ans3)
            {
              alert("it is an isoceles Triangle");
              //render elements
              document.getElementsByClassName("triangleimage")[0].setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Triangle.Isosceles.svg/200px-Triangle.Isosceles.svg.png");
              document.getElementsByClassName("descriptiontext")[0].textContent="isosceles triangle";
              document.getElementsByClassName("show1")[0].textContent=ans1;
              document.getElementsByClassName("show2")[0].textContent=ans2;
              document.getElementsByClassName("show3")[0].textContent=ans3;
            }
            else
            {
              alert("it is a scalene triangle");
              //render elements here;
              document.getElementsByClassName("triangleimage")[0].setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Triangle.Scalene.svg/245px-Triangle.Scalene.svg.png");
              document.getElementsByClassName("descriptiontext")[0].textContent="scalene triangle";
              document.getElementsByClassName("show1")[0].textContent=ans1;
              document.getElementsByClassName("show2")[0].textContent=ans2;
              document.getElementsByClassName("show3")[0].textContent=ans3;
            }
        }
      }
      check(function(){
        //not a triangle logic goes here
        document.getElementsByClassName("triangleimage")[0].setAttribute("src","#");
        document.getElementsByClassName("descriptiontext")[0].textContent="Not a triangle";
        document.getElementsByClassName("show1")[0].textContent=ans1;
        document.getElementsByClassName("show2")[0].textContent=ans2;
        document.getElementsByClassName("show3")[0].textContent=ans3;
        alert("not a triangle");
      });
  }  
});
