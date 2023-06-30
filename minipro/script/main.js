window.onload = () => {
  const body = document.body;

  // elem
  const header = document.querySelector('#header');

  // gnb
  const gnb = document.querySelector('#gnb');

  gnb.addEventListener('click', (e) => {
    let target = e.target;

    if (target.tagName === 'A') {
      e.preventDefault();

      let moveTo = target.getAttribute('href');
      let moveTarget = document.querySelector(`${moveTo}`).offsetTop;
      window.scrollTo({top: moveTarget, behavior: 'smooth'});
    }
  });

  const themeBtn = document.querySelector('.theme-btn');

  themeBtn.addEventListener('click', (e) => {
    body.classList.toggle('light');

    if (body.getAttribute('class') === 'light') {
      themeBtn.innerHTML = '<i class="icon-moon-inv"></i>';
    } else {
      themeBtn.innerHTML = '<i class="icon-sun-inv"></i>';
    }
  });

};