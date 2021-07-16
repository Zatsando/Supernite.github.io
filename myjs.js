let brave = "choco install brave -a";
let firefox = "choco install firefox -a";
let vivaldi = "choco install vivaldi -a";
let chromium = "choco install ungoogled-chromium -a";
let code = "choco install code -a";
let intellij = "choco install intellij -a";
let android = "choco install android-studio -a";

const apps = [];

function addBrave() {
  apps.push(brave);
  alert("done!");
}

function addFirefox() {
  apps.push(firefox);
  alert("done!");
}
