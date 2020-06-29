/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles(({ typography }: any) => ({
  sortContainerRoot: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: 10,
    top: `calc(50% - 14px)`,
    width: 14,
  },
  sortIconRoot: {
    color: 'rgba(255, 255, 255, 0.35)',
    cursor: 'pointer',
    fontSize: typography.fontSize, // FIXME 14
    userSelect: 'auto',
  },
  tableCellRoot: {
    border: 'none',
    boxSizing: 'border-box',
    height: DIMS.HEIGHTS.TABLE_HEADER,
    position: 'relative',
  },
  tableCellRootSortable: {
    cursor: 'pointer',
    paddingRight: 30,
  },
  tableCellRootSortApplied: {
    backgroundColor: grey[900],
  },
  typographyRoot: {
    color: 'white',
    fontSize: typography.fontSize, // FIXME 16
    fontWeight: typography.fontWeightMedium, // FIXME 500
    lineHeight: 1,
    userSelect: 'none',
  },
}));