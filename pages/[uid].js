import { Client } from "../prismicConfiguration";
import { SliceZone } from '@prismicio/react'

import { components } from '../slices/ecommerce/tempIndex';

const Page = (props) => {
  return (
      <SliceZone {...props} components={components}/>
  );
};

export async function getStaticProps(context) {
  const document = await Client({context}).getByUID('page', context.params.uid) || {}
  return {
    props:{
      slices: document.data.slices
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {

  const documents = await Client().getAllByType('page')
  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: false,
  }
}

export default Page;
