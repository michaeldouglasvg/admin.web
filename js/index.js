
function showMail(){
  const mails = document.getElementById("mails");

  if(mails.style.display == "none") {
    mails.style.display = "block";
  }else{
    mails.style.display = "none";
  }

}


function showNotifications(){
  const notifications = document.getElementById("notifications");

  if(notifications.style.display == "none") {
    notifications.style.display = "block";
  }else{
    notifications.style.display = "none";
  }

}


function toggleSet(){
  const settings = document.getElementById("profile");

  if(settings.style.display == "none") {
    settings.style.display = "block";
  }else{
    settings.style.display = "none";
  }

}
