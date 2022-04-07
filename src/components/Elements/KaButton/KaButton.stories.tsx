import React from 'react'
import { KaButton } from '.'
import '../../../styles/TEMP_stories.scss'
import { ComponentStory } from '@storybook/react'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'full-components/KaButton',
  component: KaButton,
  decorators: [
    (Story: ComponentStory<any>) => (
      <div style={{ margin: '2rem', marginTop: 0, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
}

export const Jeu = () => (
  <KaButton
    code="k-button-7"
    options={{ click: () => window.location.reload() }}
  >
    {'<p>jouez gratuitement dès maintenant</p>'}
  </KaButton>
)

// <KaButton code="k-button-7">
//   {{
//   t('home.sansTitre.conteneur.unifyFlexRow.container1.button7.value',
//   `
//   <p>jouez gratuitement dès maintenant</p>
//   `) }}
// </KaButton>
