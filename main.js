const imageFile = document.querySelector("#Imgfile");
const canvas = document.querySelector("#meme");
const topText = document.querySelector("#toptext");
const endText = document.querySelector("#endtext");

let image;

imageFile.addEventListener("change", () => {
  const imageDataUrl = URL.createObjectURL(imageFile.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener("load", () => { 
      updateMemeCanvas(canvas, image, topText.value, endText.value);
    },
    { once: true }
  );
});

topText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, endText.value);
});

endText.addEventListener("change", () => {
  updateMemeCanvas(canvas, image, topText.value, endText.value);
});

function updateMemeCanvas(canvas, image, topText, endText) {
  const ctx = canvas.getContext("2d");
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;
  const moveup = 10;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Prepare text
  ctx.strokeStyle = "black";
  ctx.lineWidth = Math.floor(fontSize / 3);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.lineJoin = "round";
  ctx.font = `${fontSize}px sans-serif`;

  // Add top text
  ctx.textBaseline = "top";
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Add bottom text
  ctx.textBaseline = "end";
  ctx.strokeText(endText, width / 2, height-80);
  ctx.fillText(endText, width / 2, height-80);
}
