/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { FormCheckbox, FormCheckboxProps } from '.';
import { Playground } from '~/helpers/playground';
import { Story } from '@storybook/react/types-6-0';

export const Template: Story<FormCheckboxProps> = args => (
  <FormCheckbox {...args} />
);
export const argTypes = Playground(
  {
    checked: {},
    disabled: {},
    id: {},
    label: { type: 'string' },
    labelPlacement: {},
    onChange: { action: 'change' },
  },
  FormCheckbox,
);
