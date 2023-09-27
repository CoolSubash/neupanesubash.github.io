const aboutmoretext = document.querySelector('.aboutmore-text')
const aboutbtn = document.querySelector('.about-btn')
const mobilebar = document.querySelector('.mobile-bar')
const closenavbar = document.querySelector('.close-navbar')
const headermobile = document.querySelector('#header-mobile')
mobilebar.addEventListener('click', () => {
  if (headermobile.style.width == 240 + 'px') {
    headermobile.style.width = 0
  } else {
    headermobile.style.width = 240 + 'px'
  }
})

closenavbar.addEventListener('click', () => {
  if (headermobile.style.width == 240 + 'px') {
    headermobile.style.width = 0 + 'px'
  }
})

aboutbtn.addEventListener('click', () => {
  if (aboutmoretext.style.display == 'block') {
    aboutmoretext.style.display = 'none'
  } else {
    aboutmoretext.style.display = 'block'
  }
})

function sendEmail() {
  const name = document.getElementById('name').value
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value

  const mailtoLink = `mailto:neupanesubash2026@gmail.com?subject=${subject}&body=Name: ${name}%0ASubject: ${subject}%0AMessage: ${message}`
  window.location.href = mailtoLink
}
