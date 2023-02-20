
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

const alert = (alertx,message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    '<div class="col-md-5 mt-2 mx-sm-3">',
    `<div class="alert alert-${type} alert-dismissible mt-2" role="alert">`,
    `   <p>${message}</p>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
    '</div>'
  ].join('')

  alertx.append(wrapper)
}


const alertTrigger = document.getElementById('liveAlertBtn')
const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert(alertPlaceholder,'Messaggio inviato,grazie per il supporto!', 'success')
  })
}

if (alertTrigger2) {
  alertTrigger2.addEventListener('click', () => {
    alert(alertPlaceholder2,'Messaggio inviato,grazie per il supporto!', 'success')
  })
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
