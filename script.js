document.getElementById('burger-container').onclick = function () {toggleMenu()};

function toggleMenu() {
  document.querySelector('#burger-container').classList.toggle('invisible');
  document.querySelector('#nav').classList.toggle('invisible');
}

const speakers = [
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/rpire-img.jpg'],
    name: 'Rubén Pire',
    occupation: 'Japanese Teacher at Obelisk Language Center',
    info: 'Rubén Pire is one of Obelisk\'s English and Japanese. In this ocasion he will be talking about the cultural differences between Japanese and Latin American culture, and explain how each of these cultures can learn from each other.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/alopez-img.jpeg'],
    name: 'Antonieta López',
    occupation: 'Former Student at Obelisk Language Center',
    info: 'Antonieta López is a former student of Obelisk Language Center. She will be talking about the whole Obelisk experience, answering questions about teachers, langauges and courses',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/fmontero-img.jpeg'],
    name: 'Freddy Montero',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Freddy Montero will be talking about survival English while traveling through English-speaking countries around the world, regular expressions and frequent questions and answers.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/alopez-img.jpeg'],
    name: 'Freddy Montero',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Freddy Montero will be talking about survival English while traveling through English-speaking countries around the world, regular expressions and frequent questions and answers.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/alopez-img.jpeg'],
    name: 'Freddy Montero',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Freddy Montero will be talking about survival English while traveling through English-speaking countries around the world, regular expressions and frequent questions and answers.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/alopez-img.jpeg'],
    name: 'Freddy Montero',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Freddy Montero will be talking about survival English while traveling through English-speaking countries around the world, regular expressions and frequent questions and answers.',
  },
];
let btn = document.querySelector('.speaker-btn');
window.addEventListener('resize', widthTeller);
btn.onclick = function() {toggleSpeakers()};

function toggleSpeakers() {
  let btnValue = document.getElementById('morles').innerHTML;
  console.log(btnValue);
  if (btnValue === "MORE ") {
    document.getElementById('morles').innerHTML = "LESS ";
    document.getElementById('chevron').classList.replace('fa-chevron-down', 'fa-chevron-up');
    return widthTeller();
  } else if (btnValue === "LESS ") {
    document.getElementById('morles').innerHTML = "MORE "
    document.getElementById('chevron').classList.replace('fa-chevron-up', 'fa-chevron-down');
    return widthTeller();
  }
}

function spkBtnValid() {
  if (document.querySelector('#morles').innerHTML === 'MORE ') {
    return false;
  } else {
    return true;
  }
}

function widthTeller() {
  console.log(window.innerWidth);
  if (spkBtnValid() || window.innerWidth > 768) {
    document.getElementById('speaker-container').innerHTML = "";
    for (let i = 0; i < speakers.length; i += 1) {
      const spkCard = `
          <div class="speaker-card">
            <img src="./media/11-chess-board-removebg-preview.png" alt="" id="speaker-deco" class="speaker-deco">
            <img src="./media/preview-headshot.jpeg" alt="Headshot picture" id="speaker-img" class="speaker-img">
            <div class="speaker-info">
              <h3 id="speaker-name">Youchai Benkler</h3>
              <h4 id="speaker-occ" >Berkman Professor of Entrepeneurial Legal Studies at Harvard Law School</h4>
              <hr>
              <p id="speaker-info" >
                Benkler studies commons-based peer production, and published his
                seminal book. The Wealth of Networks in 2006.
              </p>
            </div>
          </div>
      `;
    
      document.getElementById('speaker-container').innerHTML += spkCard;
    
      let deco = document.querySelectorAll('.speaker-deco');
      let img = document.querySelectorAll('.speaker-img');
      let name = document.querySelectorAll('#speaker-name');
      let occ = document.querySelectorAll('#speaker-occ');
      let info = document.querySelectorAll('#speaker-info');
    
      deco[i].setAttribute('src', `${speakers[i].imagesURL[0]}`);
      img[i].setAttribute('src', `${speakers[i].imagesURL[1]}`);
      name[i].innerHTML = speakers[i].name;
      occ[i].innerHTML = speakers[i].occupation;
      info[i].innerHTML = speakers[i].info;
    }
  } else {
    document.getElementById('speaker-container').innerHTML = "";
    for (let i = 0; i < 2; i += 1) {
      const spkCard = `
          <div class="speaker-card">
            <img src="./media/11-chess-board-removebg-preview.png" alt="" id="speaker-deco" class="speaker-deco">
            <img src="./media/preview-headshot.jpeg" alt="Headshot picture" id="speaker-img" class="speaker-img">
            <div class="speaker-info">
              <h3 id="speaker-name">Youchai Benkler</h3>
              <h4 id="speaker-occ" >Berkman Professor of Entrepeneurial Legal Studies at Harvard Law School</h4>
              <hr>
              <p id="speaker-info" >
                Benkler studies commons-based peer production, and published his
                seminal book. The Wealth of Networks in 2006.
              </p>
            </div>
          </div>
      `;
    
      document.getElementById('speaker-container').innerHTML += spkCard;
    
      let deco = document.querySelectorAll('.speaker-deco');
      let img = document.querySelectorAll('.speaker-img');
      let name = document.querySelectorAll('#speaker-name');
      let occ = document.querySelectorAll('#speaker-occ');
      let info = document.querySelectorAll('#speaker-info');
    
      deco[i].setAttribute('src', `${speakers[i].imagesURL[0]}`);
      img[i].setAttribute('src', `${speakers[i].imagesURL[1]}`);
      name[i].innerHTML = speakers[i].name;
      occ[i].innerHTML = speakers[i].occupation;
      info[i].innerHTML = speakers[i].info;
    }
  }
  return window.innerWidth;
}

widthTeller();