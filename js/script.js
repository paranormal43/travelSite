const gotoTopbtn = document.getElementById('gotoTopbtn');

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    gotoTopbtn.style.display = 'block';
  } else {
    gotoTopbtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
gotoTopbtn.addEventListener('click', topFunction);
