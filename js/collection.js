const params =
new URLSearchParams(
location.search
);

const collectionName =
params.get("name");

document.getElementById(
"collectionTitle"
).textContent =
collectionName;

const collectionData =
JSON.parse(
localStorage.getItem(
"collectionData"
)
) || {};

const hadiths =
collectionData[
collectionName
] || [];

const container =
document.getElementById(
"hadithContainer"
);

if(hadiths.length === 0){

container.innerHTML =

`
<div
style="
padding:20px;
text-align:center;
">

No Hadiths Found

</div>
`;

}

hadiths.forEach((hadith,index)=>{

const card =
document.createElement(
"div"
);

card.className =
"hadith-card";

card.innerHTML =

`
<div class="hadith-arabic">

${hadith.arabic}

</div>

<div class="hadith-narrator">

${hadith.narrator}

</div>

<div class="hadith-english">

${hadith.english}

</div>

<div class="hadith-reference">

Book ${hadith.bookId}
|
Hadith ${hadith.idInBook}

</div>

<button
class="delete-hadith-btn">

🗑 Remove

</button>
`;
  const deleteBtn =
card.querySelector(
".delete-hadith-btn"
);

deleteBtn.onclick = ()=>{

if(
!confirm(
"Remove this hadith from collection?"
)
){
return;
}

collectionData[
collectionName
].splice(index,1);

localStorage.setItem(

"collectionData",

JSON.stringify(
collectionData
)

);

location.reload();

};

container.appendChild(
card
);

});
