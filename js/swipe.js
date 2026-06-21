let startX = 0;

const card =
document.getElementById(
"hadithCard"
);

card.addEventListener(
"touchstart",
e=>{

startX =
e.touches[0].clientX;

}
);

card.addEventListener(
"touchend",
e=>{

const endX =
e.changedTouches[0].clientX;

const diff =
startX - endX;

if(diff > 70){

nextHadith();

}

if(diff < -70){

prevHadith();

}

}
);