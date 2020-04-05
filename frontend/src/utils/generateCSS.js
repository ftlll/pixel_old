import {
    getImageData,
    getImageCssClassOutput,
    getAnimationKeyframes,
    getAnimationCssClassOutput
} from 'box-shadow-pixels';
  
const PIXELART_CSS_CLASS_NAME = 'pixelart-to-css';

export function generatePixelDrawCss(frame, columns, cellSize, type) {
    return getImageData(frame, {
        format: type,
        pSize: cellSize,
        c: columns
    });
}
  
export function getCssImageClassOutput(frame, columns, cellSize) {
    return getImageCssClassOutput(frame, {
        format: 'string',
        pSize: cellSize,
        c: columns,
        cssClassName: PIXELART_CSS_CLASS_NAME
    });
}
  
export function exportAnimationData(frames, columns, cellSize, duration) {
    return getAnimationCssClassOutput(frames, {
        pSize: cellSize,
        c: columns,
        duration,
        cssClassName: PIXELART_CSS_CLASS_NAME
    });
}
  
export function generateAnimationCSSData(frames, columns, cellSize) {
    return getAnimationKeyframes(frames, {
        pSize: cellSize,
        c: columns
    });
}