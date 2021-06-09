let theData;

fetch("./data/sites.json")
    .then((response) => response.json())
    .then((data) => prepareHTML(data));

function prepareHTML(data) {
    data.sort(() => Math.random() - 0.5);

    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];

        var item = document.createElement("a");
        item.setAttribute("href", dataItem.url);
        item.setAttribute("target", "_blank");

        var img = document.createElement("img");
        if (dataItem.thumb != false) {
            img.src = dataItem.thumb;
        } else {
            img.src = "./img/nothumb.jpg";
        }

        item.appendChild(img);

        var title = document.createElement("h3");
        title.innerHTML = dataItem.title;

        item.appendChild(title);

        var parent = document.getElementById("theGrid");
        parent.appendChild(item);
    }
}
