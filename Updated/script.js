let answers = {};
const buttons = document.querySelectorAll('.answer');
for (const button of buttons) {
  button.addEventListener('click', function (event) {
    logIt(event);
    nextQuestion(event);
  });
}
function logIt(event) {
  if (event.target.parentNode.id === 'end') {
    window.location = 'https://google.com';
    return;
  }
  answers[event.target.parentNode.id] = event.target.innerText;
}
function nextQuestion(event) {
  document.querySelector(`#${event.target.parentNode.id}`).style.display = 'none';
  if (event.target.parentNode.id === 'q5') {
    document.querySelector('#end').style.display = 'block';
    return;
  } else if (event.target.parentNode.id === 'end') {
    return;
  }
  document.querySelector(`#q${Number(event.target.parentNode.id[1]) + 1}`).style.display = 'block';
}
