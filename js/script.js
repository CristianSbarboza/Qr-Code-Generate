const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")


const btnDownload = document.querySelector("#btn-download")
const linkDownload = document.querySelector("#link-download")


function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value

    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Qr Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerText = "Qr Code criado"
    })

    
}

function downloadQrCode() {
    linkDownload.href = qrCodeImg.src
    linkDownload.download = "QrCode.png"
    linkDownload.click()
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

3
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode()
    }
    
})



qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value){
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar Qr Code"
    }
})


btnDownload.addEventListener("click", downloadQrCode)


