function shout(string)
{
  return string.toUpperCase()
}

function whisper(string)
{
  return string.toLowerCase()
}

function logShout(string)
{
  console.log(string.toUpperCase())
}

function logWhisper(string)
{
  console.log(string.toLowerCase())
}

var uppercase = "HELLO!"
var lowercase = 'hello!'
var mixedCase = 'Hi there!'

function sayHiToGrandma(string)
{
  if(string.toLowerCase() === lowercase){
    returns "I can't here you!"
  }else if(string.toUpperCase() === uppercase){
    returns "YES INDEED!"
  }else{
    returns "I love you, too."
  }
}