import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  //extends: [
  //  shiki({
  //    theme: 'tokyo-night',
  //    wrap: false,
  //  }),
  //],
  nodes: {
    document: {
      ...nodes.document,
      render: null,
    },
    heading: {
      ...nodes.heading,
      render: component('./src/components/Heading.astro'),
    },
    link: {
      ...nodes.link,
      render: component('./src/components/Link.astro'),
    },
    blockquote: {
      ...nodes.blockquote,
      render: component('./src/components/Quote.astro'),
    },
    fence: {
      render: component('./src/components/CustomCode.astro'),
      attributes: {
        ...nodes.fence.attributes,
        content: { type: String },
      },
    },
    image: {
      ...nodes.image,
      render: component('./src/components/CustomImage.astro'),
    },
    table: {
      ...nodes.table,
      render: component('./src/components/CustomTable.astro'),
    },
  },
  tags: {
    OdyseeVideo: {
      render: component('./src/components/Odysee.tsx'),
      attributes: {
        link: {
          type: String,
          required: true,
        },
      },
    },
    VideoLink: {
      render: component('./src/components/Videos.astro'),
      attributes: {
        link: {
          type: String,
          required: true,
        },
      },
    },
  },
})
