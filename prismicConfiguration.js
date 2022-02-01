//Imports
import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from '@prismicio/next';
import smConfig from "./sm.json";

if (!smConfig.apiEndpoint) {
  console.warn("Looks like Slice Machine hasn't been bootstraped already.\nCheck the `Getting Started` section of the README file :)");
}

// -- Prismic Repo API Endpoint
export const endpoint = smConfig.apiEndpoint;

// -- Prismic Repo Name
export const repositoryName = 'enterprise-proof-of-concept'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repositoryName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  if (doc.type === 'home-page') {
    return `/`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      "type":"page",
      "path":"/:uid"
    },
    {
      "type":"home-page",
      "path":"/"
    },
  ]
};


// -- @prismicio/client initialisation
// Initialises the Prismic Client that's used for querying the API and passes it any query options.
export const Client = (config) => {
  const client = prismic.createClient(endpoint, createClientOptions(config?.req, accessToken, routeResolver));

  enableAutoPreviews({
    client,
    context: config?.context,
    req: config?.req,
  });

  return client;
};

// Options to be passed to the Client
const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  const routesOption = routes ? { routes: routeResolver.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}

export default Client