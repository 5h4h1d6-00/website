const params =
new URLSearchParams(location.search);

const bookId =
Number(params.get("book"));

const chapterId =
Number(params.get("chapter"));

const currentBook =
booksData[bookId];

const chapter =
currentBook.chapters.find(
c => c.id === chapterId
);

const hadiths =
currentBook.hadiths.filter(
h => h.chapterId === chapterId
);

let currentIndex = 0;

const arabicText =
document.getElementById("arabicText");

const narrator =
document.getElementById("narrator");

const englishText =
document.getElementById("englishText");

const reference =
document.getElementById("reference");

const counter =
document.getElementById("hadithCounter");

document.getElementById(
"chapterTitle"
).textContent =
chapter.english;

function renderHadith(){

const h =
hadiths[currentIndex];

arabicText.textContent =
h.arabic;

narrator.textContent =
h.english.narrator;

englishText.textContent =
h.english.text;

reference.textContent =
`Hadith ${h.idInBook}`;

counter.textContent =
`${currentIndex+1} / ${hadiths.length}`;

}

renderHadith();

function nextHadith(){

if(
currentIndex <
hadiths.length-1
){

currentIndex++;

renderHadith();

}

}

function prevHadith(){

if(
currentIndex > 0
){

currentIndex--;

renderHadith();

}

}

document
.getElementById("nextBtn")
.onclick = nextHadith;

document
.getElementById("prevBtn")
.onclick = prevHadith;

document
.getElementById("backBtn")
.onclick = ()=>{

history.back();

};