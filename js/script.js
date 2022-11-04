function createGame(country1, hour, country2) {
  return `
    <li>
      <img
        src="./assets/icon-${country1}.svg"
        alt="Bandeira ${country1}"
      />
      <strong>${hour}</strong>
      <img
        src="./assets/icon-${country2}.svg"
        alt="Bandeira ${country2}"
      />
    </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "23/11",
    "Quarta-Feira",
    createGame("moroco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa-rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta-Feira",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south-korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta-Feira",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united-states")
  )
