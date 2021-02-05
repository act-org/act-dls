/* eslint-disable immutable/no-mutation */
/**
 * @prettier
 */

import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Input, InputProps } from '.';
import { PlayGround } from '../../helpers/argBlocks';

export const Template: Story<InputProps> = (args) => {
  const [value, setValue] = React.useState<string>(args.value as string);
  return (
    <Input
      value={value}
      onChange={(newValue) => {
        setValue(newValue.target.value);
      }}
      {...args}
    />
  );
};

export const argTypes: Record<string, any> = PlayGround({
  autoFocus: {},
  color: {},
  disabled: {},
  error: {},
  onChange: {action: 'change'},
  multiline: {},
  placeholder: {},
  required: {},
  type: {},
  value: {type: 'string'},
  variant: {}
}, Input);
