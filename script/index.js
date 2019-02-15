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

  }
});
