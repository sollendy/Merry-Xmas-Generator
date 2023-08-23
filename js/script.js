const changeImageButton = document.querySelector('#cambia-img');
const changeTextButton = document.querySelector('#cambia-testo');
const previewImage = document.querySelector('#img-anteprima');
const previewText = document.querySelector('#testo-anteprima');
const previewSender = document.querySelector('.ante-mex');
const senderInput = document.querySelector('#mittente');
const downloadButton = document.querySelector('#scarica');
const previewArea = document.querySelector('.anteprima');

const contaGliElem = 4;

let indiceImg = 1;
let indiceTesto = 1;

function cambiaImg() {
    indiceImg++;
    if(indiceImg > contaGliElem) {
        indiceImg = 1;
    }
    // console.log("semplicemente giuliaaaa", indiceImg);
    previewImage.src = `./images/img_${indiceImg}.png`
}

function cambiaTesto() {
    indiceTesto++;
    if(indiceTesto > contaGliElem) {
        indiceTesto = 1;
    }
    previewText.src = `./images/txt_${indiceTesto}.png`
}

function mandaMittente() {
    // console.log("ah");
    const riga = senderInput.value;

    if(riga.trim().length > 0) {
        previewSender.innerText = riga;
    } else {
        previewSender.innerText = 'Auguroni';
    }
}

function scaricaImg() {
    htmlToImage.toJpeg(previewArea)
    .then(function (dataUrl) {
        const link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
    });
//     htmlToImage.toJpeg(document.getElementById('anteprima'), { quality: 0.95 })
//     .then(function (dataUrl) {
//     var link = document.createElement('a');
//     link.download = 'my-image-name.jpeg';
//     link.href = dataUrl;
//     link.click();
//   });
}

changeImageButton.addEventListener("click", cambiaImg);
changeTextButton.addEventListener("click", cambiaTesto);
senderInput.addEventListener("input", mandaMittente);
downloadButton.addEventListener('click', scaricaImg);