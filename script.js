

function showPDF(pdfUrl) {

  // Create popup
  let popup = document.createElement("div");
  popup.classList.add("pdf-popup");
  // Add close button
  let close = document.createElement("button");
  close.innerHTML = "<i class='material-icons'>close</i>";
  close.onclick = function() {
    popup.remove();
    document.getElementById("header").style.zIndex = "100"; // Set z-index of header to 100
  }
  popup.appendChild(close);
  // Embed PDF viewer
  let embed = document.createElement("embed");
  embed.type = "application/pdf";
  embed.src = pdfUrl;
  popup.appendChild(embed);

  // Show popup
  document.body.appendChild(popup);
document.getElementById("header").style.zIndex = "-1"; // Set z-index of header to 100


}
