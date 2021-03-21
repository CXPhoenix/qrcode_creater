let data = ''
let size = ''
let api = 'https://api.qrserver.com/v1/create-qr-code/?'
let dataUrl = 'data='
let sizeUrl = '&size='
const img = document.querySelector('#image')
const imgData = document.querySelector('#qrcodeData')
const imgSize = document.querySelector('#sizeRange')
const createBtn = document.querySelector('#createBtn')
const realtimeSizeValue = document.querySelector('#sizeValue')
const loadingHint = document.querySelector('#qrcodeLoading')
realtimeSizeValue.innerHTML = imgSize.value

const realtimeSizeShow = () => {
    realtimeSizeValue.innerHTML = imgSize.value
}

imgSize.addEventListener('input', realtimeSizeShow)

createBtn.onclick = () => {
    img.style.display = 'none'
    console.log('begin')
    data = imgData.value
    if (data !== '') {
        loadingHint.style.display = 'block'
        imgData.readOnly = true
        imgSize.readOnly = true
        size = imgSize.value + 'x' + imgSize.value
        let endPoint = api + dataUrl + data + sizeUrl + size

        setTimeout(() => {
            img.src = endPoint
            img.alt = data
            img.title = data + '_' + size
            img.style.display = 'block'
            imgData.readOnly = false
            imgSize.readOnly = false
            imgSize.value = Math.round(((Number(imgSize.max) + Number(imgSize.min)) / 2) / 10) * 10
            realtimeSizeValue.innerHTML = imgSize.value
            loadingHint.style.display = 'none'
            imgData.value = ''
        }, 1500)
    } else {
        window.alert('你需要輸入欲轉換的文字或網址喔！')
        console.log("Fail")
    }
}

window.addEventListener('resize', () => {
    imgSize.max = Math.round(window.innerWidth / 10) * 10
    if (imgSize.max > 1000) {
        imgSize.max = 1000
        return
    }
    imgSize.value = Math.round(((Number(imgSize.max) + Number(imgSize.min)) / 2) / 10) * 10
    realtimeSizeValue.innerHTML = imgSize.value
})