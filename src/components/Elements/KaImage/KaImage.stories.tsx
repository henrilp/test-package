import React from 'react'
import { KaImage } from '.'
import '../../../styles/TEMP_stories.scss'
import { ComponentStory } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'full-components/KaImage',
  component: KaImage,
  decorators: [
    (Story: ComponentStory<any>) => (
      <div style={{ margin: '2rem', marginTop: 0, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export const Galaxy = () => (
  <KaImage
    code="k-image"
    options={{
      // lazyOptions: {
      //   throttle: 200,
      //   once: true,
      //   intersection: { threshold: 0.1 },
      // },
      alt: `Image`,
    }}
  >
    https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg
  </KaImage>
)
// <KaImage
//   code="k-image"
//   :options="{
//     animationIn: `fadeIn`,
//     lazyOptions: {
//       throttle: 200,
//       once: true,
//       intersection: { threshold: 0.1 },
//     },
//     alt: `Image`,
//   }"
// >
//   https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg
// </KaImage>
