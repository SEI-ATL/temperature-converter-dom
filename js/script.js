const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function() {
    const tempF = document.getElementById('input1');
    const answer = document.getElementById('answer');
    answer.innerText = Math.ceil(((tempF.value - 32) * 5) / 9);
})
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click',function() {
    answer.innerText = "Answer cleared. Enter a new value above!";
})