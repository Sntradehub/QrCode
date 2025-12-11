let qrText = document.getElementById("qrText");;
let qrImage = document.getElementById("qrImage");
let imgBox = document.querySelector("imgBox");

function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
        // alert("Please enter a text or URL");
        // imgBox.classList.remove("show-img");
    }
}