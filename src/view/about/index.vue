<template>
  <div>
    <button @click="fk">管理员发送信息</button>
  </div>
</template>

<script setup>
import msgpack from 'msgpack-lite'
import { ref } from 'vue'

const ws = ref('')

// eslint-disable-next-line no-undef
ws.value = new WebSocket(`ws://192.168.1.148:5398/Chat?session=abe603fdee674b62b458bff18de34516`)
// eslint-disable-next-line no-undef
ws.value.onmessage = async function (event) {
  try {
    let data
    if (event.data instanceof Blob) {
      // 异步地将 Blob 转换为 ArrayBuffer
      const arrayBuffer = await blobToArrayBuffer(event.data)
      data = msgpack.decode(new Uint8Array(arrayBuffer))
    } else {
      // 如果 event.data 已经是 ArrayBuffer 或 Uint8Array
      data = msgpack.decode(new Uint8Array(event.data))
    }
    console.log(data) // 解码后的数据
  } catch (error) {
    console.error('解码错误', error)
  }
}
const fk = () => {
  let Lee = [1, '我干死你[em_1]', '892d66f7ca7845459ba52873d14463f4']
  let buffer = msgpack.encode(Lee)
  // eslint-disable-next-line no-undef
  ws.value.send(buffer)
}

// 定义一个将 Blob 转换为 ArrayBuffer 的异步函数
function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsArrayBuffer(blob)
  })
}
</script>

<style lang="scss" scoped></style>
