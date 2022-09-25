function starEffect() {
  if (!document.getElementById("circle-background").classList.value.includes("star-effect")) {
    document.getElementById("circle-background").classList.add("star-effect");
  } else {
    document.getElementById("circle-background").classList.remove("star-effect");
  }
}

function openTab(event, tabName) {
  let i, tabContent, tabItems;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabItems = document.getElementsByClassName("tabs-item");
  for (i = 0; i < tabItems.length; i++) {
    tabItems[i].className = tabItems[i].className.replace(" active", "");
  }

  event.currentTarget.className += " active";
  document.getElementById(tabName).style.display = "block";
}
