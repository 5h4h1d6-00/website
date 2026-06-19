
let collections =
JSON.parse(
localStorage.getItem("collections")
) || ["Default"];

const container =
document.getElementById(
"collectionsContainer"
);

function renderCollections(){

container.innerHTML = "";

collections.forEach(name=>{

const card =
document.createElement("div");

card.className =
"collection-card";

card.innerHTML = `

<h3>${name}</h3>

`;

container.appendChild(card);

});

}

renderCollections();
document
.getElementById(
"newCollectionBtn"
)
.onclick = ()=>{

const name =
prompt(
"Collection Name"
);

if(!name) return;

collections.push(name);

localStorage.setItem(
"collections",
JSON.stringify(collections)
);

renderCollections();

};
