/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (https://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

import { ColorPicker } from '@Pimcore/components/color-picker/color-picker'
import { Form } from '@Pimcore/components/form/form'
import { Panel } from '@Pimcore/components/panel/panel'
import { Space } from '@Pimcore/components/space/space'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { isObject, has } from 'lodash'

const formatColor = (color: any): string => {
  if (isObject(color) && has(color, 'cleared') && color.cleared === true) {
    return ''
  }

  if (isObject(color)) {
    return (color as any).toHexString()
  }

  return ''
}

export const ColorPanel = (): React.JSX.Element => {
  const { t } = useTranslation()

  return (
    <Panel
      border={ false }
      collapsed={ false }
      collapsible
      contentPadding="extra-small"
      theme="card-with-highlight"
      title={ t('appearance-branding.color.title') }
    >
      <Space
        direction="vertical"
        size="extra-small"
      >
        <Form.Item label={ t('appearance-branding.color.brand-color.label') }>
          <Form.Item
            getValueFromEvent={ formatColor }
            name={ ['branding', 'brandColor'] }
            noStyle
          >
            <ColorPicker
              allowClear
              data-testid="appearance-branding-brand-color"
              defaultFormat="hex"
              showText
            />
          </Form.Item>
          <div style={ { marginTop: 8, fontSize: '12px', color: '#666' } }>
            {t('appearance-branding.color.brand-color.description')}
          </div>
        </Form.Item>

        <Form.Item label={ t('appearance-branding.color.background-shade.label') }>
          <Form.Item
            getValueFromEvent={ formatColor }
            name={ ['branding', 'backgroundShade'] }
            noStyle
          >
            <ColorPicker
              allowClear
              data-testid="appearance-branding-background-shade"
              defaultFormat="hex"
              showText
            />
          </Form.Item>
          <div style={ { marginTop: 8, fontSize: '12px', color: '#666' } }>
            {t('appearance-branding.color.background-shade.description')}
          </div>
        </Form.Item>
      </Space>
    </Panel>
  )
}
