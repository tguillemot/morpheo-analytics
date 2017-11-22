import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {onlyUpdateForKeys} from 'recompose';
import styled from 'react-emotion';

import {getPaneIdList} from './selector';
import Pane from './components/Pane';


const Container = styled.div`
    width: 100%;
    display: flex;
`;

const Editor = ({paneIdList, renderers}) => {
    console.log('Render editor');
    return (
        <Container>
            {paneIdList.map(paneId => (
                <Pane
                    key={paneId}
                    paneId={paneId}
                    renderers={renderers}
                />
            ))}
        </Container>
    );
};

Editor.propTypes = {
    paneIdList: PropTypes.arrayOf(PropTypes.string).isRequired,
    // renderers: PropTypes.shape({
    //     Content: PropTypes.func.isRequired,
    //     Title: PropTypes.func.isRequired,
    // }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    paneIdList: getPaneIdList(state),
});

export default connect(mapStateToProps)(onlyUpdateForKeys([
    'paneIdList',
])(Editor));
