import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    Button,
    FormGroup,
    Input,
    Row,
    Col,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    Badge,
    Label,
} from 'reactstrap';
import {
    addNote as addNoteAction,
    updateNote as updateNoteAction,
} from '../store/actions/notes';

class FormNote extends React.Component {
    constructor(props) {
        super(props);
        let message = '';
        let selectedLabels = [];
        let title = '';
        if (props.note) {
            message = props.note.message || '';
            selectedLabels = props.note.labels || [];
            title = props.note.title || '';
        }
        this.state = {
            dropdownOpen: false,
            message,
            selectedLabels,
            title,
        };
    }

    handleLabel = (_label) => () => {
        let { selectedLabels } = this.state;
        if (!selectedLabels.find(label => label.id === _label.id)) {
            selectedLabels = [
                ...selectedLabels,
                _label,
            ];
        } else {
            selectedLabels = selectedLabels.filter(label => label.id !== _label.id);
        }
        this.setState({ selectedLabels });
    }

    handleSubmit = () => {
        if (this.props.note) {
            this.props.updateNote(this.props.note.id, this.state.selectedLabels, this.state.message, this.state.title);
        } else {
            this.props.addNote({
                id: Math.random(Date.now()),
                labels: this.state.selectedLabels,
                message: this.state.message,
                title: this.state.title,
            });
        }
        this.setState({
            dropdownOpen: false,
            message:'',
            selectedLabels:[],
            title:'',
        })
        this.props.toggle();
    }

    onChangeInput = (event, key) => {
        let { target } = event
        this.setState({
            [key]: target.value
        })
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        const {
            labels,
        } = this.props;
        const {
            message,
            selectedLabels,
            title,
        } = this.state;
        return (
            <React.Fragment>
                <FormGroup>
                    <Input type="text" name="title" placeholder="Title" value={title}
                        onChange={(value) => this.onChangeInput(value, "title")}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="note" placeholder="Notes" value={message}
                        onChange={(value) => this.onChangeInput(value, "message")}
                    />
                </FormGroup>
                <FormGroup>
                    {selectedLabels.map(label => (
                        <Badge color="secondary" key={label.id}>{label.value}</Badge>
                    ))}
                </FormGroup>

                <Row>
                    <Col>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle
                                tag="button"
                                className="btn btn-primary"
                                onClick={this.toggle}
                                data-toggle="dropdown"
                                aria-expanded={this.state.dropdownOpen}
                            >
                                Add Label
                            </DropdownToggle>
                            <DropdownMenu>
                                {labels.map(label => (
                                    <Col sm={{ size: 10 }} key={label.id}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" onChange={this.handleLabel(label)} checked={selectedLabels.find(l => l.id === label.id)} />{' '}
                                                {label.value}
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col className="text-right">
                        <Button
                            disabled={this.state.title === '' || this.state.message === '' || this.state.selectedLabels.length < 1}
                            onClick={this.handleSubmit}
                        >Simpan</Button>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

FormNote.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.object),
    note: PropTypes.objectOf(PropTypes.object),
    toggle: PropTypes.func,
}

FormNote.defaultProps = {
    labels: [],
    note: null,
    toggle: () => { }
}

const mapStateToProps = state => ({
    labels: state.labels,
});

const mapDispatchToProps = dispatch => ({
    addNote: payload => dispatch(addNoteAction(payload)),
    updateNote: (id, labels, message, title) => dispatch(updateNoteAction(id, labels, message, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormNote);