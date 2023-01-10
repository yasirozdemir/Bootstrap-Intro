function countNumberOfAlbums() {
  let cards1 = document.querySelectorAll("#favorites_container .card");
  let reviewAlbum = document.querySelectorAll;
  ("#review_container img");
  let cards2 = document.querySelectorAll("#hall-of-shame_container .card");
  let theBestAlbum = document.querySelectorAll("#the-best_container img");
  let tapestryAlbums = document.querySelectorAll("#tapestry_container img");

  return (totalNumOfAlbums =
    cards1.length +
    cards2.length +
    reviewAlbum.length +
    theBestAlbum.length +
    tapestryAlbums.length);
}

function showTotalNumberOfAlbums() {
  document.getElementById(
    "number-of-albums"
  ).innerText = `Number of albums: ${countNumberOfAlbums()}`;
}

window.onload = () => {
  showTotalNumberOfAlbums();
};
