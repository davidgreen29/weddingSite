const input = document.querySelector('input[name="name"]');
input.addEventListener('invalid', function (event) {
  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Please leave a first and last name.');
  }
})
input.addEventListener('change', function (event) {
  event.target.setCustomValidity('');
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbwA1Jt04vaQPdWnRWquIaDPgiqBmYP1MbGa-ip2eR3gbCoug-orbEtVSr9TagJ_Wooj/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response )=> {
      alert('Success! see you at the wedding',response);
      window.location.replace("index.html");
    } )
    .catch(error => console.error('Error!', error.message))
});