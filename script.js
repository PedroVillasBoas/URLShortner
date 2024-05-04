const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  let longUrl = document.getElementById("originalUrl").value;
  let apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);
  shortnedUrlTextArea = document.getElementById("shortnedUrl");

  fetch(apiUrl)
    .then((response) => response.text())
    .then((data) => {
      shortnedUrlTextArea.value = data;
    })
    .catch((error) => {
      shortnedUrlTextArea.value = "Error: Unable to shorten URL! " + error;
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});
