
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function openTab(tabname){
  for(tablink of tablinks){
      tablink.classList.remove("active-link");
  }
  for(tablink of tabcontents){
      tablink.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx0e9G8Cce3l8HExOFol2oehXR3aLWYbrBJxGjWr_6fBc7pPSNrfgh_6QUxaudNiN0O/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
