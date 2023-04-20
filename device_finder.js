const download_text = document.getElementsByClassName("download-text")[0];
const signup_text = document.getElementsByClassName("signup-text")[0];
const body_content_text =
  document.getElementsByClassName("body-content-text")[0];
const browser_button = document.getElementsByClassName("browser-button")[0];
const google_button_padding = document.getElementsByClassName(
  "google-play-button2"
)[0];
const login_button = document.getElementsByClassName("login-button")[0];
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}

if (getMobileOperatingSystem() == "Android") {
  download_text.innerText = "Download from Google Play";
  signup_text.innerText = "Download";
  body_content_text.innerText = "Download from Google Play";
  browser_button.style.display = "none";
} else if (getMobileOperatingSystem() == "iOS") {
  download_text.innerText = "Download from App Store";
  signup_text.innerText = "Download";
  body_content_text.innerText = "Download from App Store";
  browser_button.style.display = "none";
  login_button.style.display = "none";
} else {
  download_text.innerText = "Download for Linux";
  signup_text.innerText = "Sign up";
  body_content_text.innerText = "Download for Linux";
  browser_button.style.display = "block";
  google_button_padding.style.marginRight = "24px";
  login_button.style.display = "block";
}
