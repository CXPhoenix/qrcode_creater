<template>
    <form @submit.prevent class="mt-3 mb-2">
        <label for="inputQRcodetext" class="form-label display-3">Your Text</label>
        <input type="text" class="form-control" id="inputQRcodetext" placeholder="input some text here.." v-model="textValue">
    </form>
    <div class="row justify-content-end">
      <div class="col-md-3 d-grid">
        <button class="btn btn-success" @click="getQRcode">送出</button>
      </div>
    </div>
    <div class="container" v-show="qrcodeGet">
      <div id="qrcodeImage"></div>
    </div>
</template>

<script>
  import {
    onMounted,
    ref
  } from 'vue'

  let textValue = ref(null)
  let qrcodeGet = ref(false)
  const url = 'http://api.qrserver.com/v1/create-qr-code/'
  const dataParams = '?data='
  const sizeParams = '&size='
  const defaultSize = '50x50'

  export default {
    setup() {
      onMounted(() => {
        let qrcodeImage = document.getElementById('qrcodeImage')
      })
      const getQRcode = async () => {
        const endpoint = url + dataParams + textValue.value + sizeParams + defaultSize
        qrcodeGet.value = false
        try {
          const res = await fetch(endpoint, {
            cache: 'no-cache'
          })
          if (res.ok) {
            qrcodeGet.value = true
            qrcodeImage.innerHTML = `<img src="${endpoint}" alt="qrcode here" title="${textValue.value}"`
            console.log("success")
          }
        } catch (error) {
          console.log(error)
        }
      }
      return {
        textValue,
        qrcodeGet,
        getQRcode,
      }
    }
  }
</script>