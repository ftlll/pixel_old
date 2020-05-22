import React from 'react';
import { connect } from 'react-redux';
import FileSaver from 'file-saver';

const Download = props => {
    const { canvas } = props;
    const downloadIMG = (type) => {
        fetch('./api/img', {
            headers: {
                'Access-Control-Allow-Origin': true,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                type,
                grids: canvas.get('grids'),
                columns: canvas.get('columns'),
                rows: canvas.get('rows'),
                size: canvas.get('size'),
                active: canvas.get('active'),
            }),
        }).then(res => {
            return res.blob();
        })
        .then(blob => {
            if (type === 'gif') {
                FileSaver.saveAs(blob, 'pil.gif');
            } else if (type === 'png'){
                FileSaver.saveAs(blob, 'pil.png');
            }
            
        })
    }

    return (
        <div onClick={downloadIMG}>DOWNLOAD</div>
    );
};

const mapStateToProps = state => {
    const canvas = state.present.get('canvas');
    return {
        canvas
    };
};

const mapDispatchToProps = dispatch => ({
  
});

const DownloadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Download);
export default DownloadContainer;