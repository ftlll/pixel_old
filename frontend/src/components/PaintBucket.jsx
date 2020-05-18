import React from 'react';
import { connect } from 'react-redux';
import * as tool from '../redux/toolTypes';
import { switchTool } from '../redux/actions/action';

const PaintBucket = ({ usingPaintBucket, switchPaintBucket}) => {
    return (
        <i aria-label="Paint Bucket Tool"
          className='bucket fas fa-fill-drip'
          onClick={switchPaintBucket}/>
    );
};

const mapStateToProps = state => ({
    usingPaintBucket: state.present.get('drawingTool') === tool.PAINT_BUCKET
});
  
const mapDispatchToProps = dispatch => ({
    switchPaintBucket: () => dispatch(switchTool(tool.PAINT_BUCKET))
});

const PaintBucketContainer = connect(mapStateToProps, mapDispatchToProps)(PaintBucket);

export default PaintBucketContainer;
