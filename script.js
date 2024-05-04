// Code for URL shortner | Made by Pedro Vilas Bôas

// Get the elements from the HTML
const shortBtn = document.getElementById("short-btn");
const reloadBtn = document.getElementById("reload-btn");

// Add event listener to the button
shortBtn.addEventListener("click", shortenUrl);

// Function to shorten the URL
function shortenUrl() {
  let longUrl = document.getElementById("originalUrl").value; // Get the URL from the input field
  let apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);
  shortnedUrlTextArea = document.getElementById("shortnedUrl"); // Get the textarea to display the shortned URL

  // Fetch the API
  fetch(apiUrl)
    .then((response) => response.text()) // Get the response as text
    .then((data) => {
      // Handle the data
      shortnedUrlTextArea.value = data; // Display the shortned URL in the textarea
    })
    .catch((error) => {
      // Handle the error
      shortnedUrlTextArea.value = "Error: Unable to shorten URL! " + error;
    });
}

// Add event listener to the reload button
reloadBtn.addEventListener("click", () => {
  location.reload();
});
