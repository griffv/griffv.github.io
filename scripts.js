var json = { content: "<:poggers:414170497711079434>",
             avatar: "https://cdn.discordapp.com/emojis/414170497711079434.png?v=1"};
jsonStr = JSON.stringify(json);
document.getElementById("poggersBtn").addEventListener("click", function(){postToWebhook(json)});
function postToWebhook(json){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://discord.com/api/webhooks/814152452239654912/pmdbBrtGL-o1hgPg5KbsCPmXsHtIgB68VmEKZZHz7Z9AYq0v92Va905HUYqStcq871SI", true);
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(jsonStr);
}

//pull request test
