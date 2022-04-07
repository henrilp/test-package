import React from 'react'
import { KaText } from '.'
import '../../../styles/TEMP_stories.scss'
import { ComponentStory } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'full-components/KaText',
  component: KaText,
  decorators: [
    (Story: ComponentStory<any>) => (
      <div style={{ margin: '2rem', marginTop: 0, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export const Odyssey = () => (
  <KaText code="k-texte" options={{ animation: 'left-rotation' }}>
    {'<p>Votre odyssée commence</p>'}
  </KaText>
)
// <KaText
//   code="k-texte"
//   :options="{
//     animation: `left-rotation`,
//     animationIn: `fadeInLeftBig`,
//     animationOut: `fadeOutRight`,
//   }"
// >
//   {{
//     t(
//       'home.sansTitre.conteneur.unifyFlexRow.texte.value',
//       `Votre odyssée commence`
//     )
//   }}
// </KaText>
