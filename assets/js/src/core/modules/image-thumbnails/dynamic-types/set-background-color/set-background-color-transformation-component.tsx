/**
 * This source file is available under the terms of the
 * Pimcore Open Core License (POCL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (https://www.pimcore.com)
 *  @license    Pimcore Open Core License (POCL)
 */

import React from 'react'
import { Flex } from '@Pimcore/components/flex/flex'
import { Form } from '@Pimcore/components/form/form'
import { ColorPicker } from '@Pimcore/components/color-picker/color-picker'
import type { Color } from 'antd/es/color-picker'
import type { TransformationComponent } from '../../types/transformation-component-types'

const formatColor = (color: Color | string | null | undefined): string => {
  if (color === null || color === undefined) return ''
  if (typeof color === 'string') return color
  if (typeof (color as Color).toHexString === 'function') {
    return (color as Color).cleared ? '' : (color as Color).toHexString()
  }
  return ''
}

export const SetBackgroundColorTransformationComponent: TransformationComponent = () => {
  return (
    <Flex
      gap="small"
      vertical
    >
      <Form.Item
        getValueFromEvent={ formatColor }
        initialValue="#ffffff"
        label="Background Color"
        name="color"
      >
        <ColorPicker
          defaultFormat="hex"
          showText
        />
      </Form.Item>
    </Flex>
  )
}

SetBackgroundColorTransformationComponent.displayName = 'SetBackgroundColorTransformationComponent'
