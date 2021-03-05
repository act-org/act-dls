/**
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import SearchBarSecondary from '.';

describe('SearchBarSecondary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <SearchBarSecondary onChange={noop} value="Value" />,
    );

    expect(container).toMatchSnapshot();
  });
});