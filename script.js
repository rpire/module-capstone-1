document.getElementById('burger-container').onclick = function () { toggleMenu() };

function toggleMenu() {
  document.querySelector('#burger-container').classList.toggle('invisible');
  document.querySelector('#nav').classList.toggle('invisible');
}

const speakers = [
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/rpire-img.jpg'],
    name: 'Rubén Pire',
    occupation: 'Japanese Teacher at Obelisk Language Center',
    info: 'One of Obelisk\'s English and Japanese teachers. He will be talking about the cultural differences between Japanese and Latin American culture, and how these cultures can benefit from each other.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/alopez-img.jpeg'],
    name: 'Antonieta López',
    occupation: 'Former Student at Obelisk Language Center',
    info: 'Antonieta is a former student of Obelisk Language Center. She will be talking about the whole Obelisk experience, answering questions about teachers, langauges and courses',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/fmontero-img.jpeg'],
    name: 'Freddy Montero',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Freddy will be talking about survival English for tourists in English-speaking countries, regular expressions, and frequent questions and answers that will help you survive out there.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/elopez-img.jpg'],
    name: 'Edna López',
    occupation: 'French Teacher at Obelisk Language Center',
    info: 'Freddy Montero will be talking about survival English while traveling through English-speaking countries around the world, regular expressions and frequent questions and answers.',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/acouttenye-img.jpeg'],
    name: 'Andrés Couttenye',
    occupation: 'German Teacher at Obelisk Language Center',
    info: 'Andrés will be speaking about the rising demand of professionals that it\'s taking place in Germany recently. How learning German could help you land a job will be discussed in this forum',
  },
  {
    imagesURL: ['./media/11-chess-board-removebg-preview.png', './media/11-chess-board-gray.png', './media/preview-headshot.jpg'],
    name: 'Keanu Reeves',
    occupation: 'English Teacher at Obelisk Language Center',
    info: 'Keanu is our special guest for the event. He will be talking about how music can boost the process of learning a new language and will discuss the different techniques that you can use to learn with music.',
  },
];

function htmlGen(num) {
  for (let i = 0; i < num; i += 1) {
    const spkCard = `
      <div class="speaker-card">
        <img src="#" alt="" class="speaker-deco">
        <img src="#" alt="Headshot picture" class="speaker-img">
        <div class="speaker-info">
          <h3 class="speaker-name"></h3>
          <h4 class="speaker-occ" ></h4>
          <hr>
          <p class="speaker-para"></p>
        </div>
      </div>
    `;

    document.getElementById('speaker-container').innerHTML += spkCard;

    let deco = document.querySelectorAll('.speaker-deco');
    let img = document.querySelectorAll('.speaker-img');
    let name = document.querySelectorAll('.speaker-name');
    let occ = document.querySelectorAll('.speaker-occ');
    let info = document.querySelectorAll('.speaker-para');

    if (window.innerWidth > 768) {
      deco[i].setAttribute('src', `${speakers[i].imagesURL[1]}`);
    } else {
      deco[i].setAttribute('src', `${speakers[i].imagesURL[0]}`);
    }

    img[i].setAttribute('src', `${speakers[i].imagesURL[2]}`);
    name[i].innerHTML = speakers[i].name;
    occ[i].innerHTML = speakers[i].occupation;
    info[i].innerHTML = speakers[i].info;
  }
}

let btn = document.querySelector('.speaker-btn');
window.addEventListener('resize', widthTeller);
btn.onclick = function () { toggleSpeakers() };

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
  if (spkBtnValid() || window.innerWidth > 768) {
    document.getElementById('speaker-container').innerHTML = "";
    htmlGen(6);
  } else {
    document.getElementById('speaker-container').innerHTML = "";
    htmlGen(2);
  }
  return window.innerWidth;
}

widthTeller();