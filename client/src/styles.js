import {injectGlobal} from 'react-emotion';
import '@elastic/eui/dist/eui_theme_light.css';

export const unit = 8;
export const colors = {
    primary: '#006BB4',
    secondary: '#017D73',
    accent: '#DD0A73',
    background: '#FFFFFF',
    grey: '#D3DAE6',
    text: '#69707D',
    textSecondary: '#98A2B3'
};

export default () => injectGlobal({
    [['html', 'body']]: {
        height: '100%',
    },
    body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Source Sans Pro', sans-serif",
        backgroundColor: colors.background,
        color: colors.text,
    },
    '#root': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
    '*': {
        boxSizing: 'border-box',
    },
    [['h1', 'h2', 'h3', 'h4', 'h5', 'h6']]: {
        margin: 0,
        fontWeight: 600,
    },
    h1: {
        fontSize: 48,
        lineHeight: 1,
    },
    h2: {
        fontSize: 40,
    },
    h3: {
        fontSize: 36,
    },
    h5: {
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: 4,
    }
});
