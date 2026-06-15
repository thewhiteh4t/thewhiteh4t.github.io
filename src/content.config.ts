import { glob, file } from 'astro/loaders'
import { defineCollection, z, reference } from 'astro:content'

const activity = defineCollection({
  loader: file('src/data/activity.yaml'),
  schema: z.object({
    id: z.string(),
    date: z.string(),
    text: z.string(),
    url: z.string(),
  }),
})

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.mdoc' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      categName: z.string(),
      tagList: z.string(),
      author: reference('author'),
      cardImage: image(),
    }),
})

const author = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  }),
})

const categories = defineCollection({
  loader: glob({ base: './src/content/blog/category', pattern: '**/*.yaml' }),
  schema: z.object({
    categName: z.string(),
  }),
})

export const collections = { activity, blog, categories }
