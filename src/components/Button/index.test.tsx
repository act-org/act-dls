/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '../../helpers/test/render';

import { Button } from '.';

describe('Button', () => {
  it('matches the snapshot', () => {
    const { container } = render(<Button onChange={noop} value="Value" />);
    expect(container).toMatchSnapshot();
  });
});
