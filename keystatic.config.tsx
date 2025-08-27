import { config, fields, collection } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'
import { Clapperboard } from 'lucide-react'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.date({ label: 'Published Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        categName: fields.relationship({
            label: 'Category',
            collection: 'categories'
        }),
        tagList: fields.text({ label: 'Tags' }),
        author: fields.text({
          label: 'Author',
          defaultValue: 'thewhiteh4t',
        }),
        layout: fields.text({
          label: 'Layout',
          defaultValue: '../../layouts/BlogPost.astro',
        }),
        cardImage: fields.image({
          label: 'Card Image',
          directory: 'src/assets/post_imgs',
          publicPath: '../../assets/post_imgs/',
        }),
        
        content: fields.markdoc({
          label: 'Content',
          components: {
            VideoLink: block({
                label: 'Video Link',
                schema: {
                    link: fields.text({
                        label: 'Add video URL',
                        description: 'Video URL'
                    })
                },
                icon: <Clapperboard />,
                ContentView: (props) => {
                    return <a href={props.value.link} target="_blank">{props.value.link}</a>
                }
            })
          },
        }),
      },
    }),
    categories: collection({
        label: 'Categories',
        slugField: 'categName',
        path: 'src/content/blog/category/*',
        schema: {
            categName: fields.slug({ name: { label: 'Name' } }),
        }
    }),
  },
})
