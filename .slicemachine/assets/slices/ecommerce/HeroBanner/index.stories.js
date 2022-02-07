import MyComponent from '../../../../../slices/ecommerce/HeroBanner';

export default {
  title: 'slices/ecommerce/HeroBanner'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":"unleash interactive content","description":"disintermediate end-to-end e-business","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=600&h=410&fit=crop"}},"cta":"exploit virtual content","CTALink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","name":"Without CTA","slice_type":"hero_banner","items":[],"primary":{"title":"embrace interactive applications","description":"engineer end-to-end partnerships","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=600&h=410&fit=crop"}}},"id":"_WithoutCta"}} />
_WithoutCta.storyName = 'Without CTA'
