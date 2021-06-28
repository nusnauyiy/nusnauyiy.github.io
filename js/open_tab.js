function open_tab(evt, id, content_container, tab_name) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName(content_container);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
  }

  tabcontent = document.getElementsByClassName("art-card-container");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.visibility = "hidden";
  }

  tablinks = document.getElementsByClassName(tab_name);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  tablinks = document.getElementsByClassName("art-tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(id).style.visibility = "visible";
  evt.currentTarget.className += " active";
}