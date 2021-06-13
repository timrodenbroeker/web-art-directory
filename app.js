var theData;

fetch("./data/sites.json")
  .then((response) => response.json())
  .then((data) => prepareHTML(data));

function prepareHTML(data) {
  data.sort(() => Math.random() - 0.5);

  theData = [...data];

  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i];

    let item = document.createElement("a");

    item.addEventListener("click", function (e) {
      toggleModal();
      populizeModal(i);
    });

    // item.setAttribute("href", dataItem.url);
    // item.setAttribute("target", "_blank");

    let img = document.createElement("img");
    if (dataItem.thumb != false) {
      img.src = dataItem.thumb;
    } else {
      img.src = "./img/nothumb.jpg";
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

function toggleModal() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("modalActive");
}

function collapseModal() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.remove("modalActive");
}

document.onkeydown = function (e) {
  if (e.key === "Escape") {
    collapseModal();
  }
};

var silk = document.getElementById("silk");

silk.addEventListener("click", function (e) {
  toggleModal();
});

function populizeModal(index) {
  let dataItem = theData[index];

  let browserMockup = document.createElement("div");
  browserMockup.classList.add("browser-mockup");

  let img = document.createElement("img");
  if (dataItem.thumb != false) {
    img.src = dataItem.thumb;
  } else {
    img.src = "./img/nothumb.jpg";
  }

  browserMockup.appendChild(img);

  let modalHeader = document.getElementById("modalHeader");
  modalHeader.innerHTML = "";
  modalHeader.appendChild(browserMockup);

  let modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = "";

  let title = document.createElement("h2");
  title.innerHTML = dataItem.title;
  modalContent.appendChild(title);

  if (dataItem.artist != false) {
    let by = document.createElement("p");
    by.append("By ");
    by.append(dataItem.artist);
    modalContent.appendChild(by);
  }

  if (dataItem.artist != false) {
    let desc = document.createElement("p");
    desc.append(dataItem.description);
    modalContent.appendChild(desc);
  }

  let button = document.createElement("a");
  button.setAttribute("href", dataItem.url);
  button.setAttribute("target", "_blank");
  button.classList.add("btn");
  button.innerHTML = "Launch";
  modalContent.appendChild(button);
}

var infoMarkup = `

        
<p>With this archive I want to explore and catalog expressions and tendencies in the genre of Web Art. The selection of works in this collection is strictly based on the following criteria: 

</p>
<ul style="margin-bottom: 50px;">
  <li>Built with HTML, CSS and Javascript</li>
  <li>A purely artistic purpose</li>
  <li>A very simple, distinct idea</li>
</ul>

<p>This project is run by <a href="https://www.timrodenbroeker.de" target="_blank">Tim Rodenbröker</a></p>


`;

var learnMoreBtn = document.getElementById("learnMore");
learnMoreBtn.addEventListener("click", function (e) {
  learnMore();
});

function learnMore() {
  let img = document.createElement("img");
  img.src = "./img/globe00057.png";

  let modalHeader = document.getElementById("modalHeader");
  modalHeader.innerHTML = "";
  // modalHeader.appendChild(img);

  let modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = infoMarkup;

  toggleModal();
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var preloader = document.getElementById("preloader");
    setTimeout(() => preloader.classList.add("hide"), 1000);
  },
  false
);
