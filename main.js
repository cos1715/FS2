/* 
this file is about taking user name
and user age
*/

// alert("Hello world");
// this part of program takes info about user
{
  // debugger;
  const userName = prompt("Please enter your name"); // this works ok
  const userAge = +prompt("Please enter your age");
  const fullAge = userAge > 17;
  console.log(userName);
  console.log(userAge);
  console.log(fullAge);
}
