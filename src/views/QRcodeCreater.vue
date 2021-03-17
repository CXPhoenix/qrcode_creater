<template>
<div class="container">
    <form @submit.prevent class="mt-3 mb-2">
      <div class="row mb-5">
        <div class="col-md-6">
          <label for="inputQRcodetext" class="form-label fs-2">Your Text</label>
        </div>
        <div class="col-md-6 d-grid">
          <input type="text" class="form-control-lg" id="inputQRcodetext" placeholder="input some text here.."
            v-model="textValue">
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-md-6">
          <label for="customRange3" class="form-label fs-2">QRcode尺寸大小: {{ size }}</label>
        </div>
        <div class="col-md-6 align-self-center">
          <input type="range" class="form-range" min="100" :max="maxRange" step="10" id="customRange3" v-model="size">
        </div>
      </div>
    </form>
    <div class="row justify-content-end mb-5">
      <div class="col-md-3 d-grid"> 
        <button class="btn btn-success" @click="getQRcode">送出</button>
      </div>
    </div>
    <!-- <div class="container mt-4 justify-content-center" v-show="qrcodeGet"> -->
      <!-- <div class="row justify-content-center" v-show="qrcodeGet">
        <div class="col-md-8 mx-auto">
          <img id="qrcodeImage" :src="endpoint" alt="" title="" />
        </div>
      </div> -->
    <!-- </div> -->
    <img id="qrcodeImage mx-auto" v-show="qrcodeGet" :src="endpoint" alt="" title="" />
    </div>
</template>

<script>
  import {
    onMounted,
    onUpdated,
    ref
  } from 'vue'

  let textValue = ref(null)
  let qrcodeGet = ref(false)
  let endpoint = ref('test')
  const url = 'http://api.qrserver.com/v1/create-qr-code/'
  let dataParams = '?data='
  const sizeParams = '&size='
  let size = ref(300)
  let maxRange = ref(500)

  export default {
    setup() {
      const dynamicSetRange = () => {
        maxRange.value = window.innerWidth
        size.value = Math.round(((maxRange.value + 100) / 2)/10)*10
        qrcodeGet.value = false
      }
      onMounted(() => {
        maxRange.value = window.innerWidth - 150
        size.value = Math.round(((maxRange.value + 100) / 2)/10)*10
        window.addEventListener('resize', dynamicSetRange)
      })
      const getQRcode = () => {
        qrcodeGet.value = false
        setTimeout(() => {
          const qrcodeSize = size.value + 'x' + size.value
          endpoint.value = url + dataParams + textValue.value + sizeParams + qrcodeSize
          qrcodeGet.value = true
          const qrcodeImage = document.querySelector("#qrcodeImage")
          qrcodeImage.src = endpoint.value
          qrcodeImage.alt = textValue.value
          qrcodeImage.title = textValue.value
          textValue.value = null
          size.value = Math.round(((maxRange.value + 100) / 2)/10)*10
        }, 1000)
      }
      return {
        textValue,
        qrcodeGet,
        getQRcode,
        endpoint,
        maxRange,
        size,
      }
    }
  }
</script>