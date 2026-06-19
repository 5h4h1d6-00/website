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

const collectionData =
JSON.parse(
localStorage.getItem(
"collectionData"
)
) || {};

const count =
collectionData[name]
? collectionData[name].length
: 0;

card.innerHTML = `

<h3>${name}</h3>

<p>${count} Hadiths</p>

<div class="collection-actions">

<button class="rename-btn">
✏️
</button>

<button class="delete-btn">
🗑️
</button>

</div>

`;

/* Rename */

const renameBtn =
card.querySelector(
".rename-btn"
);

renameBtn.onclick = (e)=>{

e.stopPropagation();

const newName =
prompt(
"Rename Collection",
name
);

if(!newName) return;

collections =
collections.map(c=>

c === name
? newName
: c

);

localStorage.setItem(
"collections",
JSON.stringify(
collections
)
);

const collectionData =
JSON.parse(
localStorage.getItem(
"collectionData"
)
) || {};

if(collectionData[name]){

collectionData[newName] =
collectionData[name];

delete collectionData[name];

localStorage.setItem(
"collectionData",
JSON.stringify(
collectionData
)
);

}

renderCollections();

};

/* Delete */

const deleteBtn =
card.querySelector(
".delete-btn"
);

deleteBtn.onclick = (e)=>{

e.stopPropagation();

if(
!confirm(
`Delete "${name}" ?`
)
){
return;
}

collections =
collections.filter(
c => c !== name
);

localStorage.setItem(
"collections",
JSON.stringify(
collections
)
);

const collectionData =
JSON.parse(
localStorage.getItem(
"collectionData"
)
) || {};

delete collectionData[name];

localStorage.setItem(
"collectionData",
JSON.stringify(
collectionData
)
);

renderCollections();

};

/* Open Collection */

card.onclick = ()=>{

location.href =
`collection.html?name=${encodeURIComponent(name)}`;

};

container.appendChild(
card
);

});

}

renderCollections();

/* New Collection */

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

if(
collections.includes(
name
)
){
alert(
"Collection already exists"
);
return;
}

collections.push(
name
);

localStorage.setItem(
"collections",
JSON.stringify(
collections
)
);

renderCollections();

};
