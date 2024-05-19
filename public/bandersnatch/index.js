const MANIFEST_URL = 'manifest.json'
const LOCALHOST = ['127.0.0.1', 'localhost']

async function main() {
  const isLocal = !!~LOCALHOST.indexOf(window.location.hostname)
  const manifestJSON = await (await fetch(MANIFEST_URL)).json()
  const host = isLocal ? manifestJSON.localhost : manifestJSON.productionHost
  const videoComponent = new VideoComponent()
  const videoPlayer = new VideoMediaPlayer({
    json: manifestJSON
  })

  videoComponent.initializePlayer()
}

window.onload = main
