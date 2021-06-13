// Daten-Array
var theData;

// Daten holen
fetch("./data/sites.json")
  .then((response) => response.json())
  .then((data) => prepareHTML(data));

// Prepare HTML based on data

function clickItem(val) {
  toggleModal();
  populizeModal(val);
}

function prepareHTML(data) {
  // Datne zufällig sortieren
  data.sort(() => Math.random() - 0.5);

  // Kopie des Daten-Arrays in globalem Daten-Objekt ablegen
  theData = [...data];

  // Loop through data
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];

    let item = document.createElement("a");

    item.addEventListener("click", function (e) {
      clickItem(i);
    });

    // item.setAttribute("href", dataItem.url);
    // item.setAttribute("target", "_blank");

    let img = document.createElement("img");
    if (dataItem.thumb != false) {
      img.src = `./media/imgProcessed/${dataItem.thumb}`;
    } else {
      img.src = "./media/imgProcessed/nothumb.jpg";
    }

    item.appendChild(img);

    let title = document.createElement("h3");
    title.innerHTML = dataItem.title;

    item.appendChild(title);

    let parent = document.getElementById("theGrid");
    parent.appendChild(item);
  }

  // Künstler extrahieren

  let artistsArray = [];

  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];
    artistsArray.push(dataItem.artist);
  }

  let uniqueArtistsArray = [...new Set(artistsArray)];

  for (let i = 0; i < uniqueArtistsArray.length; i++) {
    console.log(uniqueArtistsArray[i]);
  }
}
