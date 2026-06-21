const params =
new URLSearchParams(location.search);

const bookId =
Number(params.get("book"));

const currentBook =
booksData[bookId];

const title =
document.getElementById("bookTitle");

const count =
document.getElementById("chapterCount");

const container =
document.getElementById("chaptersContainer");

const search =
document.getElementById("chapterSearch");

document
.getElementById("backBtn")
.onclick = ()=>{

location.href = "index.html";

};

title.textContent =
currentBook.metadata.english.title;

count.textContent =
`${currentBook.chapters.length} Chapters`;

function renderChapters(list){

container.innerHTML = "";

list.forEach(chapter=>{

const card =
document.createElement("div");

card.className =
"chapter-card";

card.innerHTML = `

<div class="chapter-left">

<div class="chapter-number">
${chapter.id}
</div>

<div class="chapter-text">

<div class="chapter-arabic">
${chapter.arabic}
</div>

<div class="chapter-english">
${chapter.english}
</div>

</div>

</div>

<div class="chapter-arrow">
›
</div>

`;

card.onclick = ()=>{

location.href =
`hadith.html?book=${bookId}&chapter=${chapter.id}`;

};

container.appendChild(card);

});

}

renderChapters(
currentBook.chapters
);

search.addEventListener(
"input",
e=>{

const keyword =
e.target.value.toLowerCase();

const filtered =
currentBook.chapters.filter(ch=>

ch.english
.toLowerCase()
.includes(keyword)

||

ch.arabic
.includes(keyword)

);

renderChapters(filtered);

});