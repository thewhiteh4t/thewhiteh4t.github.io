type VideoPlayerProps = {
  link: string
}

function convertOdyseeToEmbedUrl(originalUrl: string): string | null {
  if (typeof originalUrl !== 'string') {
    console.warn('Input URL is not a string:', originalUrl)
    return null
  }

  if (
    (originalUrl.startsWith('https://odysee.com/') ||
      originalUrl.startsWith('http://odysee.com/')) &&
    !originalUrl.includes('/$/embed/')
  ) {
    const domainEndIndex = originalUrl.indexOf('odysee.com')
    if (domainEndIndex !== -1) {
      const insertPosition = domainEndIndex + 'odysee.com'.length
      const embedUrl =
        originalUrl.substring(0, insertPosition) +
        '/$/embed' +
        originalUrl.substring(insertPosition)
      return embedUrl
    }
  }
  console.warn('Invalid or already embedded Odysee URL provided:', originalUrl)
  return null
}

export default function VideoPlayer(props: VideoPlayerProps) {
  const { link, ...videoProps } = props
  const embedSrc = convertOdyseeToEmbedUrl(link)

  if (!embedSrc) {
    return (
      <div>
        <p>Add a video URL</p>
      </div>
    )
  }
  return (
    <div className="video-container">
      <iframe
        title="Odysee video player"
        id="odysee-iframe"
        src={embedSrc}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allowFullScreen
      ></iframe>
    </div>
  )
}
