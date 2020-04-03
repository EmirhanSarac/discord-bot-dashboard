// Auto animate for demo

var toggle = document.querySelector('.toggleButton input')
var animate = setInterval(() => {
    toggle.checked = !toggle.checked
}, 3000)

document.querySelector('body').addEventListener('click', () => {
  clearInterval(animate);
})