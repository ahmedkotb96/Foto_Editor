let saturate = document.getElementById("saturate");
let constract = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("greyscale");
let blur = document.getElementById("blur");
let huerotate = document.getElementById("huerotate");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".imgBox");

function resetvalue(){
img.style.filter = "none";
saturate.value = "100";
contrast.value = "100";
brightness.value = "100";
grayscale.value = "0";
blur.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};
upload.onchange = function () {
    resetvalue()
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
};

let filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        img.style.filter = `
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            grayscale(${grayscale.value})
            blur(${blur.value}px)
        `;
  });
});
function downloadImage() {
    let img = document.getElementById('img');
    let link = document.createElement('a');
    link.href = img.src;
    link.download = 'image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


