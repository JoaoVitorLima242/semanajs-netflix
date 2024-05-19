class VideoMediaPlayer {
  constructor({ json }) {
    this.json = json
    this.videoElement = null
    this.sourceBuffer = null
  }

  initializeCoded() {
    this.videoElement = document.getElementById('vid')
    const mediaSourceSupported = window.MediaSource

    if (!mediaSourceSupported) {
      alert('Browser nao suporta a MSE')
    }

    const codedSupported = MediaSource.isTypeSupported(this.json.codec)

    if (!codedSupported) {
      alert('Browser nao suporta o codec')
    }
  }
}
