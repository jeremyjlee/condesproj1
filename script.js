function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

function randomize() {
  const pictureData = [
    {
      title: "glow",
      img1: "images/1.png",
      img2: "images/1-1.png",
    },
    {
      title: "silver",
      img1: "images/2.png",
      img2: "images/2-2.png",
    },
    {
      title: "sequence",
      img1: "images/3.png",
      img2: "images/3-3.png",
    },
    {
      title: "quirky",
      img1: "images/4.png",
      img2: "images/4-4.png",
    },
    {
      title: "motif",
      img1: "images/5.png",
      img2: "images/5-5.png",
    },
    {
      title: "furnishing",
      img1: "images/6.png",
      img2: "images/6-6.png",
    },
    {
      title: "diamond",
      img1: "images/7.png",
      img2: "images/7-7.png",
    },
    {
      title: "bizarre",
      img1: "images/8.png",
      img2: "images/8-8.png",
    },
    {
      title: "pattern",
      img1: "images/9.png",
      img2: "images/9-9.png",
    },
    {
      title: "pendant",
      img1: "images/10.png",
      img2: "images/10-10.png",
    },
    {
      title: "variety",
      img1: "images/11.png",
      img2: "images/11-11.png",
    },
    {
      title: "tiara",
      img1: "images/12.png",
      img2: "images/12-12.png",
    },
    {
      title: "design",
      img1: "images/13.png",
      img2: "images/13-13.png",
    },
    {
      title: "shape",
      img1: "images/14.png",
      img2: "images/14-14.png",
    },
    {
      title: "jewelry",
      img1: "images/15.png",
      img2: "images/15-15.png",
    },
    {
      title: "gold",
      img1: "images/16.png",
      img2: "images/16-16.png",
    },
    {
      title: "ornament",
      img1: "images/17.png",
      img2: "images/17-17.png",
    },
    {
      title: "crown",
      img1: "images/18.png",
      img2: "images/18-18.png",
    },
    {
      title: "colors",
      img1: "images/19.png",
      img2: "images/19-19.png",
    },
    {
      title: "diagram",
      img1: "images/20.png",
      img2: "images/20-20.png",
    },
    {
      title: "procedure",
      img1: "images/21.png",
      img2: "images/21-21.png",
    },
    {
      title: "medal",
      img1: "images/22.png",
      img2: "images/22-22.png",
    },
    {
      title: "gem",
      img1: "images/23.png",
      img2: "images/23-23.png",
    },
    {
      title: "garnishing",
      img1: "images/24.png",
      img2: "images/24-24.png",
    },
    {
      title: "arrangement",
      img1: "images/25.png",
      img2: "images/25-25.png",
    },
  ];

  const randomNum = Math.floor(Math.random() * pictureData.length);

  document.getElementsByClassName("word1")[0].innerHTML =
    pictureData[randomNum].title;

  document.documentElement.style.setProperty(
    "--first",
    `url(${pictureData[randomNum].img1})`
  );
  document.documentElement.style.setProperty(
    "--second",
    `url(${pictureData[randomNum].img2})`
  );
}

randomize();
