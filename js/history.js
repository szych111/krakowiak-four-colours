const history = [
    {
      id: 1982,
      text:
        "Zespół Pieśni i Tańca Krakowiak zostaje założony przez przewodniczącego Związku Polaków w Niemczech &quot;Lech&quot; w Griesheim Pana Władysława Patrzałka",
    },
    {
      id: 1994,
      text:
        "Magda Borucińska i Zbigniew Krasnopolski zajmują się choreografią zespołu",
    },
    {
      id: 1995,
      text:
        "Zespół Pieśni i Tańca Krakowiak zostaje zarejestrowany w Darmstadt jako odrębne stowarzyszenie użyteczności publicznej. W skład pierwszego zarządu wchodzą jego założycielki: Beata Korzewska i Edda Schnegelsberg",
    },
    {
      id: 1997,
      text:
        "Choreografem zespołu zostaje Renata Lapuk-Breitner",
    },
    {
      id: 2004,
      text:
        "Zespół Krakowiak nawiązuje współpracę z Zespołem Pieśni i Tańca „Mały Bolesławiec”",
    },
    {
      id: 2006,
      text:
        "Osobą odpowiedzialną za przygotowanie artystyczne zespołu zostaje choreograf, absolwent Państwowej Szkoły Baletowej w Bytomiu, tancerz oraz pedagog baletu Zbigniew Michalik",
    },
    {
      id: 2008,
      text:
        "Ważnym wydarzeniem w historii zespołu jest powstanie grupy dziecięcej",
    },
    {
      id: 2010,
      text:
        "Wyjazd zespołu do Bolesławca na zaproszenie zespołu „Mały Bolesławiec” w celu nauki nowego układu tanecznego z tamtejszego regionu. Warsztaty taneczne owocują wspólnym występem",
    },
    {
      id: 2011,
      text:
        "Zespół Krakowiak udaje się na 15 Światowy Festiwal Polonijnych Zespołów Folklorystycznych w Rzeszowie, gdzie bierze udział w warsztatach tanecznych",
    },
    {
      id: 2013,
      text:
        "Występ zespołu Krakowiak na festiwalu poświęconym Polsce oraz polskiej kulturze w Stuttgarcie",
    },
    {
      id: 2015,
      text:
        "Choreografem grupy dziecięcej zostaje Katarzyna Kulling, tancerka oraz instruktorka tańca modern dance i folkloru z wieloletnim stażem.",
      text2: "Zespół Pieśni i Tańca Krakowiak ma już 20 lat!!! Z tej okazji odbywa się koncert jubileuszowy, na którym zostaje zaprezentowany przekrój całej twórczości zespołu.",
    },
    {
      id: 2016,
      text:
        "W zespole Krakowiak zostaje utworzona grupa młodzieżowa, w skład której wchodzą m.in. absolwenci grupy dziecięcej oraz pozostała młodzież pragnąca uczy się tańców ludowych",
      text2: "Choreografem grupy dziecięcej zostaje Natalia Zawadzka, tancerka Zespołu Krakowiak.",
    },
    {
      id: 2018,
      text:
        "Adam Burzyński przewodniczący Zarządu i wieloletni członek zespołu obejmuje funkcję Kierownika Zespołu.",
      text2: "Koncert w Orangerie – Darmstadt z Okazji 100-lecia Odzyskania Niepodległości."
    },
    {
      id: 2019,
      text:
        "Choreografem zespołu zostaje Artur Stala, pochodzący z Belgii, syn pomysłodawców Festiwalu Zespołów Polonijnzch w Rzeszowie, przez wiele lat związany z Zespółem Pieśni i Tańca Krakus.",
    },
    {
      id: 2020,
      text:
        "Zespół Pieśni i Tańca Krakowiak świętuje 25 lecie, a na świecie wybucha pandemia Covid-19. Obchody jubileuszu odsuwają się w bliżej nieokreśloną przyszłość...",
    },
  ];

  const histBeads = document.querySelector('.history-beads');
  const cardDate = document.querySelector('.history--card__date');
  const cardText = document.querySelector('.history--card__text');
  const nextBead = document.querySelector('.hist-date-next');
  const prevBead = document.querySelector('.hist-date-prev');
  const beadsArray = Array.from(histBeads.children);
  console.log(nextBead)

  const historyCardFill = (date, text) => {
    cardDate.innerText = date;
    cardText.innerText = text;
  }

  histBeads.addEventListener('click', (e) => {
    const text = e.target.dataset.toolTip;
    const date = e.target.innerText;
    const targetBead = e.target.closest("button");

    targetBead.classList.add("current-bead");
    
    if(!targetBead) return;
    historyCardFill (date, text)
  })

  // nextBead.addEventListener('click', () => {
  //   const currentIndex = beadsArray.findIndex(class => {class === '.current-bead'});
  //   console.log(currentIndex)
  // })



// bead pushed hist card updated
// bead changes e.g. color
// prev bead returns to red
// next button pushed: target btn = next sibling of div

