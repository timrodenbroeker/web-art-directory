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
}

function toggleModal() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("modalActive");
}

var silk = document.getElementById("silk");

silk.addEventListener("click", function (e) {
    toggleModal();
});

function populizeModal(index) {
    let dataItem = theData[index];
    let img = document.createElement("img");
    if (dataItem.thumb != false) {
        img.src = dataItem.thumb;
    } else {
        img.src = "./img/nothumb.jpg";
    }

    let modalHeader = document.getElementById("modalHeader");
    modalHeader.innerHTML = "";
    modalHeader.appendChild(img);

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
