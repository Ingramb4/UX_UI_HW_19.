console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $("#p1").hover(function(){
      alert("Welcome to my Portfolio!");
    },
    function(){
      alert("Thank you so much for visiting!");
    }); 
  });