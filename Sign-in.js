function showabout() {
  var divAbout = document.getElementById("onmouseover");

  divAbout.style.display = "block";
}

function hideabout() {
  var divAbout = document.getElementById("onmouseover");

  divAbout.style.display = "none";
}

//for contact

function contactInfo() {
  const visible = document.getElementById("onclick");
  if (visible.style.display === "none") {
    visible.style.display = "block";
  } else {
    visible.style.display = "none";
  }
}
