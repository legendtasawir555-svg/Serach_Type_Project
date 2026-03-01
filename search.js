const animeSeries = [
  {
    seriesName: "Solo Leveling",
    SeriesImg: "https://i.pinimg.com/736x/f8/95/eb/f895eb4272badf0c58b27c3bcc393452.jpg",
    seriesDesc: "First webtoon adaptation volume cover, featuring Sung Jin-woo",
  },
  {
    seriesName: "Attack on Titan",
    SeriesImg: "https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg",
    seriesDesc: "Humanity fights for survival against giant humanoid creatures known as Titans.",
  },
  {
    seriesName: "Naruto",
    SeriesImg: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    seriesDesc: "A young ninja strives to become the strongest and earn his village's respect.",
  },
  {
    seriesName: "One Piece",
    SeriesImg: "https://i.pinimg.com/736x/c6/79/d1/c679d1686eb0ffeef8de5a755db59e5c.jpg",
    seriesDesc: "Monkey D. Luffy sails the seas to become the King of the Pirates.",
  },
  {
    seriesName: "Demon Slayer",
    SeriesImg: "https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg",
    seriesDesc: "A boy becomes a demon slayer to save his sister and avenge his family.",
  },
  {
    seriesName: "One Punch Man",
    SeriesImg: "https://i.pinimg.com/1200x/90/c2/64/90c264b93718b7b7cb1c7971cf36c5ad.jpg",
    seriesDesc: "A superhero who can defeat any enemy with a single punch struggles with boredom.",
  },
  {
    seriesName: "My Hero Academia",
    SeriesImg: "https://i.pinimg.com/1200x/ac/e9/77/ace9779153b6783f6d01a1d34ce688a0.jpg",
    seriesDesc: "In a world of superpowers, a quirkless boy dreams of becoming the greatest hero.",
  },
  {
    seriesName: "Devil May Cry",
    SeriesImg: "https://i.pinimg.com/1200x/0d/36/10/0d36102ffc528fc09d3b9294ca61069c.jpg",
    seriesDesc: "A demon hunter named Dante battles supernatural enemies  his dark past."
  },
  {
    seriesName: "Death Note",
    SeriesImg: "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
    seriesDesc: "A notebook grants the power to kill anyone whose name is written in it.",
  },
  {
    seriesName: "Dragon Ball Z",
    SeriesImg: "https://i.pinimg.com/1200x/d1/ec/56/d1ec56eaea2b1f7fb17834880083b383.jpg",
    seriesDesc: "Goku protects Earth from powerful villains using his incredible strength.",
  },
  {
    seriesName: "Jujutsu Kaisen",
    SeriesImg: "https://i.pinimg.com/736x/2d/fb/4e/2dfb4ef099e53935d25f133ff5ddb209.jpg",
    seriesDesc: "A student enters the world of curses and sorcery after a tragic incident.",
  },
  {
    seriesName: "Tokyo Ghoul",
    SeriesImg: "https://i.pinimg.com/736x/b1/68/7f/b1687f2db68b8fd7aab4d523a7e1376f.jpg",
    seriesDesc: "A college student becomes half-ghoul and struggles between two worlds.",
  },
];
// function AnimeSeries
function seriesList(arr){
  arr.forEach(function (like){
   

    // series-list
const seriesList = document.createElement("div");
seriesList.className = "series-list";

// image
const img = document.createElement("img");
img.src = like.SeriesImg;

// content div
const content = document.createElement("div");
content.className = "content";

// h4
const title = document.createElement("h4");
title.innerText = like.seriesName;

// p
const desc = document.createElement("p");
desc.innerText = like.seriesDesc;

// append
content.appendChild(title);
content.appendChild(desc);

seriesList.appendChild(img);
seriesList.appendChild(content);


// jahan chaho wahan add karo
document.querySelector(".series-content").appendChild(seriesList);
document.querySelector("#container").appendChild(document.querySelector(".series-content"));
// document.querySelector("#main").appendChild(document.querySelector("#container"));
// document.querySelector("body").appendChild(document.querySelector("#main"));
  })
}
seriesList(animeSeries);
let inp = document.querySelector("input");
inp.addEventListener("input", function () {
 let newseries = animeSeries.filter(function (hulu) {
  return hulu.seriesName.toLowerCase().includes(inp.value.toLowerCase());
 })
 document.querySelector(".series-content").innerHTML = "";
 seriesList(newseries);
 if(newseries == false){
  document.querySelector("#resultnothing").style.display = "block";
  document.querySelector("#resultnothing").innerText = "No results found";
 }
 else{
   document.querySelector("#resultnothing").style.display = "none";
 }
})
