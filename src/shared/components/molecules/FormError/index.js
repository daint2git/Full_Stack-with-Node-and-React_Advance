import PropTypes from 'prop-types'
import { compose, setPropTypes, branch, renderNothing } from 'recompose'

import Spacer from 'shared/components/atoms/Spacer'
import Span from 'shared/components/atoms/Span'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const Presentational = compose(
  setPropTypes({ errorMessage: PropTypes.string }),
  branch(({ errorMessage, children }) => !errorMessage && !children, renderNothing),
)(({ errorMessage, children, ...rest }) => (
  <>
    <Spacer />
    <div className={loadClass`root`} {...rest}>
      <Span color="danger" align="center">{errorMessage || children}</Span>
    </div>
  </>
))

export default Presentational