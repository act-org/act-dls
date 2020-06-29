/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import IconButtonBase from '.';

describe('IconButtonBase', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <IconButtonBase onClick={noop}>
        <div>Icon</div>
      </IconButtonBase>,
    );

    expect(container).toMatchSnapshot();
  });
});