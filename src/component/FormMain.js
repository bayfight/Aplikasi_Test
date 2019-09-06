import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Card,
    CardBody,
    Row,
} from 'reactstrap';
import FormNote from './FormNote';

class MainForm extends React.Component {

    render() {
        return (
            <Card className="mt-3">
                <CardBody>
                    <FormNote />
                </CardBody>
            </Card>
        )
    }
}

MainForm.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
}

MainForm.defaultProps = {
    notes: [],
}

const mapStateToProps = state => ({
    notes: state.notes,
});

export default connect(mapStateToProps)(MainForm);