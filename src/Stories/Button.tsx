import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs/react'
import Button from '../Components/Button'

export default (storybook: Story) => {
  storybook.add(
    'Button',
    withInfo({
      header: false,
      inline: true,
      source: true,
      text: 'Sample of Button component'
    })(() => {
      return (
        <Button
          label={text('Label', 'LIKE')}
          onClick={action('button-click')}
        />
      )
    })
  )
}
