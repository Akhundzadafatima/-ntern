let images = [
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF98sbQeNeSMz3nbGKwwnh4XyFU-ojyeNghA&s"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tAE8_jj23rjg7zASL0WcIt-Dd4w0ohaaYg&s"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS811sroiUOa0yfHiH5ddYsWCeaBZYid5YbgDuZ6xXBpnabzlyaASj3y-SyalbjpnwDQTY&usqp=CAU"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDB7qt0-xBEdTzq5WTyqFHg9EmrLArmLzeA&s"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiLCLJGEcWPjebMH66My-mDq8jfOlI0-cjA&s"},
  {url: "https://img.freepik.com/free-photo/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way_1258-150932.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727740800&semt=ais_hybrid"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcUlgYSZJ6POb97XLyEQN5Hm7bBLMymqvh2SCtePIW77Fh8L3z0jHcDpMteeTnUtvFF8&usqp=CAU"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdl87goKzndR_OcMf-7RmaUkX3886Xwdl6Ag&s"},
  {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSaubpwTBfUvIViOvlqmpi0MGLEl8kNIYsOQ&s"},
  {url: "https://img.freepik.com/free-vector/hand-painted-watercolor-galaxy-background_52683-63441.jpg"},
];



const input = document.querySelector("#input");
const showBtn = document.querySelector("#showBtn");
const deleteInp = document.querySelector("#deleteInp");
const deleteBtn = document.querySelector("#deleteBtn");
const imagesDiv = document.querySelector("#imagesDiv");
const addBtn=document.querySelector("#addBtn");
const linkInp=document.querySelector ("#linkInp")
const linkItem=document.querySelector("#linkItem")

function showImages() {
  const imageNumber = parseInt(input.value);
  imagesDiv.innerHTML = "";
  if (isNaN(imageNumber) || imageNumber <= 0) {
    alert("Yandakı xanaya keçərli nömrə daxil edin.");
    return;
  } else if (isNaN(imageNumber) || imageNumber > 10) {
    alert("Maximum 10 şəkil görüntülənə bilər.");
    return;
  }
  for (let i = 0; i < imageNumber; i++) {
    if (i < images.length) {
      const img = document.createElement("img");
      img.src = images[i].url;
      img.alt = `Şəkil ${i + 1}`;
      img.setAttribute("data-index", i);
      imagesDiv.appendChild(img);
    }
  
  }

}


addBtn.addEventListener("click", () => {
  console.log("test");
  
  const imageUrl = linkInp.value; 
  if (imageUrl) {
    images.push({ url: imageUrl }); 
    linkInp.value = ""; 

    
      showImages(); 

    console.log("imagess",images)
  } else {
    alert("Zəhmət olmasa, keçərli şəkil URL-si daxil edin.");
  }
});


  function deleteImage() {
    const imageIndex = parseInt(deleteInp.value) - 1;
  
    if (
      isNaN(imageIndex) ||
      imageIndex < 0 ||
      imageIndex >= images.length
    ) {
      alert("Neçənci şəkli silmək istədiyinizi yandakı xanaya qeyd edin.");
      return;
    }
  
    images.splice(imageIndex, 1);
    deleteInp.value = ""; 
    showImages(); 
  }




 
 
  showBtn.addEventListener("click", showImages);
  deleteBtn.addEventListener("click", deleteImage);
