import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const Eraser = ({ usingEraser, switchEraser}) => {
    return (
        <i aria-label="Eraser Tool"
          onClick={switchEraser}
          className="eraser fas fa-eraser" />
    );
};

const mapStateToProps = state => ({
    usingEraser: state.present.get('drawingTool') === tool.ERASER
});
  
const mapDispatchToProps = dispatch => ({
    switchEraser: () => dispatch(switchTool(tool.ERASER))
});

const EraserContainer = connect(mapStateToProps, mapDispatchToProps)(Eraser);

export default EraserContainer;
