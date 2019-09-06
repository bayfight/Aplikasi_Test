import React from 'react';
import { connect } from 'react-redux';
import {
    Badge,
    Card,
    Button,
    CardBody,
    FormGroup,
    Col,
    Row,
} from 'reactstrap';
import { deleteNote as deleteNoteAction } from '../store/actions/notes';
import ModalEditNote from './ModalEditNote';

class ItemNote extends React.Component {
    handleDelete = () => this.props.deleteNote(this.props.note.id)
    render() {
        const {
            note,
        } = this.props;
        return (
            <Card className="mt-3">
                <CardBody>
                    <FormGroup>
                        <h2>{note.title}</h2>
                    </FormGroup>
                    <FormGroup>
                        <p>{note.message}</p>
                    </FormGroup>
                    <FormGroup>
                        {note.labels.map(label => (
                            <Badge color="secondary" key={label.id}>{label.value}</Badge>
                        ))}
                    </FormGroup>
                    <Row>
                        <Col className="text-right">
                            <ModalEditNote note={note} />
                            <Button onClick={this.handleDelete} className="ml-2">
                                Hapus
                            </Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteNote: id => dispatch(deleteNoteAction(id)),
});

export default connect(null, mapDispatchToProps)(ItemNote);