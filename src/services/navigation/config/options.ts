import { Themes } from 'assets/themes'
import { CardStyleInterpolators } from '@react-navigation/stack'
import Metrics from 'assets/metrics'
import transition from './transition'

const navigationConfigs = {
    cardStyle: {
        backgroundColor: Themes.COLORS.white,
        paddingBottom: Metrics.safeBottomPadding,
    },
    headerShown: false,
    gestureEnabled: true,
    // gestureDirection: 'horizontal',
    cardShadowEnabled: true,
    cardOverlayEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
        open: transition,
        close: transition,
    },
}

export default navigationConfigs
