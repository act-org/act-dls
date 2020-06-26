/**
 * @prettier
 */

import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import DIMS from '~/constants/dims';

export default makeStyles({
  tableCellRoot: {
    padding: `${DIMS.LAYOUT_PADDING}px !important`,
  },
  tableCellRootSortApplied: {
    backgroundColor: grey[50],
  },
});
