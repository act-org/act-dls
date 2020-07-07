/**
 * @prettier
 */

import { DIMS, TYPOGRAPHY } from '~/constants';
import { grey } from '~/colors';
import { makeStyles } from '~/styles';

export default makeStyles({
  inputBaseInput: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    fontSize: 14,
    height: DIMS.HEIGHTS.INPUT,
    minHeight: DIMS.HEIGHTS.INPUT,
    padding: `0 ${DIMS.LAYOUT_PADDING}px`,
  },
  inputBaseInputPassword: {
    fontSize: 22,
    fontWeight: TYPOGRAPHY.WEIGHT_BOLD,
    letterSpacing: 4,
  },
  inputBaseRoot: {
    backgroundColor: grey[100],
    border: `1px solid ${grey[300]}`,
    borderRadius: 2,
    marginTop: 8,
  },
});
