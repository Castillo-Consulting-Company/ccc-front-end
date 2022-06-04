window.onload = function() {
  document.querySelector("#current-year").appendChild(document.createTextNode(new Date().getFullYear()))
  document.body.appendChild(document.createElement("center")).innerText = "Last Updated: " + document.lastModified
}
