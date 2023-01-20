import {defineCliConfig} from 'sanity/cli'
import imageUrlBuilder from '@sanity/image-url'

const client = defineCliConfig({
  api: {
    projectId: 'e2pcujok',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
  },
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client
