/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import * as React from 'react';
import { standard } from '../../helpers/test';
import { Link } from '.';

describe('Link', () => {
  const Component = (
    <Link href="https://www.act.org" target="_blank">
      <div>children</div>
    </Link>
  );
  standard(Component);
});
