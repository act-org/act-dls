/**
 * @prettier
 */

import * as React from 'react';
import { TableCell, TableCellProps } from '@material-ui/core';

import mergeClasses from '~/helpers/mergeClasses';

import useStyles from './styles';

export type Props = TableCellProps;

const TableCellBody: React.FC<Props> = ({
  classes: classesProp,
  ...otherProps
}: Props): React.ReactElement<any> => {
  const classes = useStyles();

  return (
    <TableCell
      classes={mergeClasses(
        {
          root: classes.tableCellRoot,
        },
        classesProp,
      )}
      component="td"
      padding="none"
      {...otherProps}
    />
  );
};

export default TableCellBody;
