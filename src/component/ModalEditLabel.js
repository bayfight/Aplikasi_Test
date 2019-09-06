import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from 'reactstrap';
import InputEditLabel from './InputEditLabel';

class ModalEditLabel extends React.Component {
    state = {
        modal: false,
    }
    toggle = () => this.setState(prevState => ({ modal: !prevState.modal }))
    render() {
        const {
            labels,
        } = this.props;
        const {
            modal,
        } = this.state;
        return (
            <React.Fragment>
                <Button onClick={this.toggle}>
                    Edit label
                </Button>
                <Modal isOpen={modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Edit Labels</ModalHeader>
                    <ModalBody>
                        <Label>Add New Label</Label>
                        <InputEditLabel />
                        <br />
                        <Label>Edit Labels</Label>
                        {labels.map(label => (
                            <InputEditLabel
                                key={label.id}
                                id={label.id}
                                value={label.value}
                            />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        
                        <Button color="secondary" onClick={this.toggle}>Simpan</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

ModalEditLabel.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
}

ModalEditLabel.defaultProps = {
    labels: [],
}

const mapStateToProps = state => ({
    labels: state.labels,
});

export default connect(mapStateToProps)(ModalEditLabel);