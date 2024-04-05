const clock = document.getElementById("clock");
const sound = document.getElementById("sound");


const clockFunction = ()=>{
  const date = new Date();
  let hours = date.getHours();

  const ampm = hours>=12 ? "PM" : "AM";
  hours =  hours%12 || 12;
  
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `${hours<10? "0"+hours : hours}:${minutes<10 ? "0"+minutes : minutes}:${seconds<10 ? "0"+seconds : seconds} ${ampm}`;
  sound.play()
}

clockFunction()

setInterval(()=>{
  clockFunction()
},1000);