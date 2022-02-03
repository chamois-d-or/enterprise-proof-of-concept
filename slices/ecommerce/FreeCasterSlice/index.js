import React from 'react'
import { RichText } from 'prismic-reactjs'

const FreeCasterSlice = ({ slice }) => (
  <section>
   <div className="section-header">
      <div className="header-video m-hide  voile-noir">
        {
          slice.primary.video?
          <video className="fp-engine" playsInline webkit-playsinline loop autoplay="true" muted="true" src={slice.primary.video.video_url} />
          :<video className="fp-engine" playsInline webkit-playsinline loop autoplay="true" muted="true" src="https://vod.fl.freecaster.net/vod/lvmh/wG1Ekry2k2_1080p.mp4" />
        }
      </div>
  </div>
  </section>
)

export default FreeCasterSlice

