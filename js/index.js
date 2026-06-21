const books = [

{
id:1,
english:"Al-Bukhari",
arabic:"صحيح البخاري"
},

{
id:2,
english:"Muslim",
arabic:"صحيح مسلم"
},

{
id:3,
english:"Al-Nasai",
arabic:"سنن النسائي"
},

{
id:4,
english:"Abu Dawood",
arabic:"سنن أبي داود"
},

{
id:5,
english:"Al-Tirmidhi",
arabic:"جامع الترمذي"
},

{
id:6,
english:"Ibn Majah",
arabic:"سنن ابن ماجه"
},

{
id:7,
english:"Malik",
arabic:"موطأ مالك"
},

{
id:8,
english:"Ahmad",
arabic:"مسند أحمد"
},

{
id:9,
english:"Darimi",
arabic:"سنن الدارمي"
},
  {
id:10,
english:"Al-Adab Al-Mufrad",
arabic:"الأدب المفرد"
},

{
id:11,
english:"Bulugh al-Maram",
arabic:"بلوغ المرام"
},

{
id:12,
english:"Mishkat al-Masabih",
arabic:"مشكاة المصابيح"
},

{
id:13,
english:"Riyad as-Salihin",
arabic:"رياض الصالحين"
},

{
id:14,
english:"Shama'il Muhammadiyah",
arabic:"الشمائل المحمدية"
},

{
id:15,
english:"40 Nawawi",
arabic:"الأربعون النووية"
},

{
id:16,
english:"40 Hadith Qudsi",
arabic:"الأحاديث القدسية الأربعون"
},

{
id:17,
english:"40 Hadith Shah Waliullah",
arabic:"الأربعون للشاه ولي الله"
}

];

const grid =
document.getElementById("booksGrid");

books.forEach(book=>{

const card =
document.createElement("div");

card.className =
"book-card";

card.innerHTML = `

<div class="corner tl"></div>
<div class="corner tr"></div>
<div class="corner bl"></div>
<div class="corner br"></div>

<div class="arabic">
${book.arabic}
</div>

<div class="english">
${book.english}
</div>

`;

card.addEventListener("click",()=>{

location.href=
`book.html?book=${book.id}`;

});

grid.appendChild(card);

});
