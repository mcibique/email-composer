export default function fileToDataUrl (file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader()

    reader.addEventListener('load', function () {
      resolve(reader.result)
    })

    reader.addEventListener('error', reject)

    reader.readAsDataURL(file)
  })
}
