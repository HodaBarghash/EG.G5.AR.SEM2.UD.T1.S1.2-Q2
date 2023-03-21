function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XwlZKOoHYu":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyI_DaKrC2N0JZ2VYTECOd43p3rNI91SMIjJKNW7tDpMNAAHcHpzeuX7AD2pVAdpWlVWQ/exec"


var player=GetPlayer()


fetch(url,{

	method:"POST",

	mode: 'no-cors',

	cache:'no-cache',

	headers: {'Content-Type': 'application/json'},

	redirect:'follow',

	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect"),q4attempts:player.GetVar("q4attempts"),q4answeredcorrect:player.GetVar("q4answeredcorrect")
}

