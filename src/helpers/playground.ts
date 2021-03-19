/**
 * Copyright (c) ACT, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @prettier
 */

import { get } from 'lodash';

interface PropType {
  defaultValue: any;
  description: string;
  name: string;
  required: boolean;
  type: {
    name: string;
  };
}

interface DocGenType {
  __docgenInfo: {
    description: string;
    displayName: string;
    props: Record<string, PropType>;
  };
}

const cleanPropType = (prop: PropType): void => {
  if (get(prop, 'type.name')) {
    // eslint-disable-next-line no-param-reassign
    prop.type.name = prop.type.name.replace(' | undefined', '');
  }
};

const playgroundGroup = 'Playground';
const eventsGroup = 'Events';
const ariaGroup = 'Aria';
const elseGroup = 'Everything Else';

/**
 * Create a dictionary of StoryBook arg types.  Be default the type and control
 * will be automatically inferred and this helper does an ok job of setting up
 * a default UI.
 *
 * This method also groups the parameters specified in the args param in the
 * Playground group and then puts all methods that start with on* in the events
 * group, all props starting with aria* in the aria group and everthing else in
 * an Everthing Else group.
 *
 * @param args The arguments to put in the Playground group.
 * @param type The base type of the arguments.  If passed will group all
 * arguments by some basic rules.
 */
export const Playground = (args: Record<string, any>, type?: any): any => {
  // eslint-disable-next-line no-loops/no-loops, no-restricted-syntax
  for (const key in args) {
    if (!key.startsWith('on')) {
      // eslint-disable-next-line no-param-reassign
      args[key].table = { category: playgroundGroup };
    }
  }

  if (type) {
    const docType = (type as unknown) as DocGenType;
    // eslint-disable-next-line no-underscore-dangle
    const props = docType.__docgenInfo?.props;

    // eslint-disable-next-line guard-for-in, no-loops/no-loops, no-restricted-syntax
    for (const key in props) {
      cleanPropType(props[key]);

      let category: string = elseGroup;

      if (key.startsWith('aria')) {
        category = ariaGroup;
      } else if (key.startsWith('on')) {
        category = eventsGroup;
      }

      // eslint-disable-next-line no-param-reassign
      args[key] = {
        table: {
          category,
        },
        ...args[key],
      };
    }
  }

  return args;
};

export default Playground;
