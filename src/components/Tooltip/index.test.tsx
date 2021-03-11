/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';

import render from '~/helpers/test/render';

import { Tooltip } from '.';
import { HelpCircleOutline } from '~/icons';

describe('Switch', () => {
  it('ACT theme matches the snapshot', () => {
    const { container } = render(
      <Tooltip title="test text">
        <HelpCircleOutline />
      </Tooltip>,
      'ACT',
    );
    expect(container).toMatchSnapshot();
  });

  it('ACT_ET theme matches the snapshot', () => {
    const { container } = render(
      <Tooltip title="test text">
        <HelpCircleOutline />
      </Tooltip>,
      'ACT_ET',
    );
    expect(container).toMatchSnapshot();
  });
});
