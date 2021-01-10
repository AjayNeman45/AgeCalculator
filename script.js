// DOM Selection
let name = document.querySelector(".name");
let btn = document.querySelector(".con__btn");
let input = document.querySelector(".con__input");
let output = document.querySelector(".heading--2");

// event listener to the button
btn.addEventListener("click", calculate);

function calculate() {

  // collect the input value
  let inputData, inputArray, year, month, day;

  // store collect the input value
  inputData = input.value;

  //check the input value is blanck or not
  if (inputData !== "") {

    //split the input value and store into array
    inputArray = inputData.split("-");
    //deconstruct the value into variable
    [year, month, day] = inputArray;
    year = Number(year);
    month = Number(month);
    day = Number(day);

    // get the current date from the date constructor
    let current, currentYear, currentMonth, currentDate, Newdate, newMonth;

    // new date for current date
    current = new Date();
    currentYear = current.getFullYear();
    currentMonth = current.getMonth() + 1; // get month star with 0 // for that 1 added
    currentDate = current.getDate();

    // check birthday or not
    if (day === currentDate && month === currentMonth) {
      let birthday = currentYear - year;
      output.innerHTML = `Congratulation! Today Is your birthday your are <span class="year">${birthday}</span> Years Old. `;
    } else {

      //  calculate the day 
      if (day > currentDate) {
        Newdate = currentDate + 30;
        day = Newdate - day;
        currentMonth = currentMonth - 1;
      } else {
        day = currentDate - day;
      }
      // calcuclate the month
      if (month > currentMonth) {
        newMonth = currentMonth + 12;
        month = newMonth - month;
        currentYear = currentYear - 1;
      } else {
        month = currentMonth - month;
      }
      year = currentYear - year;
      output.innerHTML = `Your Age is : <span class="year">${year}</span> Years <span class="month">${month}</span> Months <span class="day">${day}</span> Days.`;
      document.getElementById("any").innerHTML="OR";
      }
    

  } else {
    alert("Please Enter your Birth date");
    calculate.close();
    
  }

}

//find the age in months, days , hours, seconds , seconds, miliseconds..
function out(){

  let uname=name.value;

  if(uname=="")
   {
  alert("Please Enter your name");
  calculate.close();
  out.close();
  } 
else{
  document.getElementById("username").innerHTML='Hello '+ uname + "!";
  }
 
 
  var dob=document.getElementById('in').value;
          //calculate milisecond between birth to 1st jan 1970.
          var birth=Date.parse(dob);
          //calculate milisecond from 1st jan 1970.
          var now =Date.now(); 
          var milisecond=now-birth;
         // general fact of timimg 
         var second=1000;      
         var minute=second*60;
         var hour=minute*60;
         var day=hour*24;
         var month=day*30;
         var year=day*365;
     
       // calculating age by using above calculation
         var years=Math.round(milisecond/year);
         var months=years*12;
         var days=years*365;
         var hours=Math.round(milisecond/hour);
         var seconds=Math.round(milisecond/second);
      
         document.getElementById("other").innerHTML=" <br> "+  months + " Months old <br>OR <br>" + days  + " Days old <br>OR<br>" + hours + " Hours old<br>OR<br>" + seconds  + ' Seconds old<br>OR<br>' + milisecond + " Miliseconds old <br>";

}
