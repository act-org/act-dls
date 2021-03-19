/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { noop } from 'lodash';

import render from '~/helpers/test/render';

import { EmptyState } from '.';

describe('EmptyStatePrimary', () => {
  it('matches the snapshot', () => {
    const { container } = render(
      <EmptyState
        buttonProps={{
          children: 'Button Title',
          onClick: noop,
        }}
        description="Description"
        title="Title"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
