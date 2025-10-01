if ((prediction[i].probability * 100) >= 60) {
  if (prediction[i].className === "Green") {
      greend.style.opacity = "1";
      greend.style.boxShadow = "0 0 20px 0 #00ff00, 0 0 20px 0 #00ff00";
      redd.style.opacity = "0.5";
      blued.style.opacity = "0.5";
      blackd.style.opacity = "0.5";
  } 
  else if (prediction[i].className === "Red") {
      redd.style.opacity = "1";
      redd.style.boxShadow = "0 0 20px 0 #ff0000, 0 0 20px 0 #ff0000";
      greend.style.opacity = "0.5";
      blued.style.opacity = "0.5";
      blackd.style.opacity = "0.5";
  }
  else if (prediction[i].className === "Blue") {
      blued.style.opacity = "1";
      blued.style.boxShadow = "0 0 20px 0 #0000ff, 0 0 20px 0 #0000ff";
      greend.style.opacity = "0.5";
      redd.style.opacity = "0.5";
      blackd.style.opacity = "0.5";
  }
  else if (prediction[i].className === "Black") {
      blackd.style.opacity = "1";
      blackd.style.boxShadow = "0 0 20px 0 #000000, 0 0 20px 0 #000000";
      greend.style.opacity = "0.5";
      redd.style.opacity = "0.5";
      blued.style.opacity = "0.5";
  }
  else{
      blackd.style.opacity = "0.5";
      greend.style.opacity = "0.5";
      redd.style.opacity = "0.5";
      blued.style.opacity = "0.5"; 
  }
}