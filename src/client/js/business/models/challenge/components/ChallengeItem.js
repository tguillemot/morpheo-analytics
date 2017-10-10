import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {css} from 'emotion';
import {Calendar, CloudUpload, Trophy} from 'mdi-material-ui';


class ChallengeItem extends React.Component {
    style = css`
        background-color: #EAECF0;
        margin-top: 20px;
        padding: 20px;
        border-radius: 5px;

        &:hover {
            background-color: white;
        }

        & p {
            color: black;
            font-style: italic;
        }

        & ul {
            margin: 0;
            padding: 0;

            display: flex;
            justify-content: flex-end;
            list-style-type: none;
            color: #45464B;
        }

        & ul li {
            margin-right: 10px;
            color: #45464B;
            display: flex;
            align-items: center;
        }
    `;

    handleClick = () => {

    }

    render() {
        return (<div
            css={this.style}
            className={'success'}
            onClick={this.handleClick}
        >
            <h2>
                Sleep stage classification
            </h2>
            <p>
                Update constant values of neural network with a lot of new value.
            </p>
            <ul>
                <li>
                    <Calendar />
                    94 days ago
                </li>
                <li>
                    <CloudUpload />
                    35
                </li>
                <li>
                    <Trophy />
                    78.1
                </li>
            </ul>
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeItem);
