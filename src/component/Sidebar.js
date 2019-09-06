import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Label,
    Row,
    Input
} from 'reactstrap'
import ModalEditLabel from './ModalEditLabel';

const Sidebar = (props) => {
    const {
        addFilteredLabel,
        labels,
    } = props;
    return (
        <div>
            <Label>Labels</Label>
            <ul>
                {labels.map(label => (
                    <div className="form-group" key={label.id}>
                    <Row>
                        <Input type="checkbox" onClick={() => addFilteredLabel(label.id)}/>
                        <span className="ml-3" key={label.id}>
                        <label>{label.value}</label>
                    </span>
                    </Row>
                    </div>
                ))}
            </ul>
            <ModalEditLabel />
        </div>
    );
}

Sidebar.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
}

Sidebar.defaultProps = {
    labels: [],
}

const mapStateToProps = state => ({
    labels: state.labels,
});

export default connect(mapStateToProps)(Sidebar);