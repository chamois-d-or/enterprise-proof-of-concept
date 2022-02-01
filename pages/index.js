import { Client } from "../prismicConfiguration";
import { SliceZone } from '@prismicio/react'

import { components } from '../slices/ecommerce/tempIndex';

const HomePage = (props) => {
  return (
      <SliceZone slices={props.slices} components={components}/>
  );
};

export async function getStaticProps(context) {
    const document = await Client({context}).getSingle("home-page") || null
    if (!document) {
      return {
        notFound: true,
      }
    }
    return {
      props:{
        slices: document.data.slices || null
      }, // will be passed to the page component as props
    }
}

export default HomePage;
