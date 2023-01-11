import breakpoints from './breakpoints';
import colors from './colors';
import typography from './typography';
import shadows from './shadows';
import radii from './radius';

const foundations = {
    breakpoints,
    colors,
    ...typography,
    shadows,
    radii,
};

export default foundations;
