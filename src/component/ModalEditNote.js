import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalHeader,
} from 'reactstrap';
import FormNote from './FormNote';

class ModalEditNote extends React.Component {
    state = {
        modal: false,
    }
    toggle = () => this.setState(prevState => ({ modal: !prevState.modal }))
    render() {
        const {
            note
        } = this.props;
        const {
            modal,
        } = this.state;
        return (
            <React.Fragment>
                <Button onClick={this.toggle}>
                    Edit
                </Button>
                <Modal isOpen={modal} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Edit Note</ModalHeader>
                    <ModalBody>
                        <FormNote note={note} toggle={this.toggle} />
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalEditNote;