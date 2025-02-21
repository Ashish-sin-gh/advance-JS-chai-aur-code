const reqURL = "https://randomuser.me/api/";
const xhrRequest = new XMLHttpRequest();
xhrRequest.onreadystatechange = () => {
  // console.log(xhrRequest.readyState);
  if (xhrRequest.readyState === 4) {
    const data = xhrRequest.responseText;
    // console.log(data);
    const jsonData = JSON.parse(data);
    console.log(
      jsonData.results[0].name.title + " " + jsonData.results[0].name.first
    );
  }
};
xhrRequest.open("GET", reqURL);
xhrRequest.send();
