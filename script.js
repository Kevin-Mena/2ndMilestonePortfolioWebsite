const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navlink');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});
document.querySelectorAll('.navlink').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('show');
}));

// create object array
const array = [
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/m1.png',
    desktopImage: 'img/first.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    link: '#',
    source: ' #',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/m2.png',
    desktopImage: 'img/second.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    link: '#',
    source: ' #',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/m3.png',
    desktopImage: 'img/third.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
    and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    link: '#',
    source: ' #',
  },
  {
    mobileTopic: 'Tonic',
    desktopTopic: 'Tonic',
    mobileImage: 'img/m4.png',
    desktopImage: 'img/fourth.png',
    desktopdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type
      and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    mobiledesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.`,
    link: '#',
    source: ' #',
  },
];
const extra = document.querySelector('#extra');
const project = document.querySelectorAll('#expand');
function display(main, i) {
  const play = `<div class="content">
      <div class="top">
        <h2 class="mobile">${main[i].mobileTopic}</h2>
        <h2 class="desktop">${main[i].desktopTopic}</h2>
        <ul>
          <li class="dark desktop cl">Uber</li>
          <li class="dark mobile">canopy</li>
          <li class="desktop">full Stack Dev</li>
          <li class="mobile">Back End Dev</li>
          <li class="desktop">2018</li>
          <li class="mobile">2015</li>
        </ul>
       </div>
      <div class="image">
        <img src="${main[i].mobileImage}"  class="mobile"/>
        <img src="${main[i].desktopImage}" class="desktop"/>
      </div>
      <div class="bottom">
        <div class="words">
          <p class="desktop">
            ${main[i].desktopdesc}
          </p>
          <p class="mobile">
            ${main[i].mobiledesc}
          </p>
        </div>
        <div class="other">
          <ul class="stack">
            <div class="stt">
            <li>html</li>
            <li>javascript</li>
            <li>css</li>
            </div>
            <li class="desktop">ruby </li>
            <li class="desktop">github</li>
            <li class="desktop">bootstrap</li>
          </ul>
          <div class="button">
            <a href="${main[i].link}" class="btn">
              see live
              <img src="img/seelive.png" alt="visit the website"/>
            </a>
            <a href="${main[i].source}" class="btn">
              see source
              <img src="img/seesource.png" alt=" see the sourcecode"/>
            </a>
          </div>
        </div>
        <img src="img/cancel.png" alt="To close panel" id="cancel-port"/>
      </div>`;
  const lay = document.createElement('div');
  lay.classList.add('popup');
  lay.innerHTML = play;
  extra.appendChild(lay);
}
project.forEach((pro, index) => {
  pro.addEventListener('click', () => {
    const v = index;
    for (let i = 0; i < array.length; i += 1) {
      if (i === v) {
        display(array, i);
        const view = document.querySelector('.popup');
        view.classList.add('show');
        const canc = view.querySelector('#cancel-port');
        canc.addEventListener('click', () => {
          extra.removeChild(view);
        });
      }
    }
  });
});
