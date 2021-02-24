var json = { content: "Didn't ask"};
jsonStr = JSON.stringify(json);
document.getElementById("applyBtn").addEventListener("click", postToWebhook(jsonStr));
function postToWebhook(json){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://discord.com/api/webhooks/814152452239654912/pmdbBrtGL-o1hgPg5KbsCPmXsHtIgB68VmEKZZHz7Z9AYq0v92Va905HUYqStcq871SI", true);
  xhttp.send(jsonStr);
}
