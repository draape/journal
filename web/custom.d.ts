declare namespace NodeJS {
  export interface ProcessEnv {
    GATSBY_SANITY_PROJECT_ID: string
    GATSBY_SANITY_TOKEN: string
    GATSBY_SANITY_DATASET: string
    GATSBY_AUTH0_DOMAIN: string
    GATSBY_AUTH0_CLIENTID: string
  }
}

declare module "*.svg"
