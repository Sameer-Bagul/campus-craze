function showContent(contentId) {
  var content = document.getElementById('content');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          content.innerHTML = this.responseText;
      }
  };
  xhttp.open("GET", contentId + ".html", true);
  xhttp.send();
}
