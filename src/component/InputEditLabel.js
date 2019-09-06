import React from 'react';
import { connect } from 'react-redux';
import {
    Input,
    InputGroup,
    InputGroupAddon,
} from 'reactstrap';
import {
    addLabel as addLabelAction,
    deleteLabel as deleteLabelAction,
    updateLabel as updateLabelAction,
} from '../store/actions/labels';
import {FaCheck, 
        FaPencilAlt,
        FaTrashAlt, 
        FaWindowClose
} from 'react-icons/fa';


class InputEditLabel extends React.Component {
    state = {
        editMode: false,
        value: this.props.value || ''
    }
    changeValue = e => this.setState({ value: e.target.value })
    handleAdd = () => this.props.addLabel({
        id: Math.random(Date.now()),
        value: this.state.value,
        
    },
    this.handleReset()
    );
    handleCancel = () => {
        this.setState({ value: this.props.value }, () => this.toggleEdit());
    }
    handleDelete = () => this.props.deleteLabel(this.props.id);
    handleReset = () => this.setState({ value: '' });
    handleUpdate = () => {
        this.props.updateLabel(this.props.id, this.state.value);
        this.setState({ editMode: false });
    }
    toggleEdit = () => this.setState(prevState => ({ editMode: !prevState.editMode }))
    render() {
        const { editMode, value } = this.state;
        if (this.props.value && this.props.value !== '') {
            if (editMode) {
                return (
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" onClick={this.handleCancel} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaWindowClose/></div></InputGroupAddon>
                        <Input placeholder="Label" type="text" onChange={this.changeValue} value={value} />
                        <InputGroupAddon addonType="append" onClick={this.handleUpdate} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaCheck/></div></InputGroupAddon>
                    </InputGroup>
                );
            }
            return (
                <InputGroup>
                    <InputGroupAddon addonType="prepend" onClick={this.handleDelete} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaTrashAlt /></div></InputGroupAddon>
                    <Input placeholder="Label" type="text" value={value} disabled />
                    <InputGroupAddon addonType="append" onClick={this.toggleEdit} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaPencilAlt/></div></InputGroupAddon>
                </InputGroup>
            );
        }
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend" onClick={this.handleReset} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaWindowClose/></div></InputGroupAddon>
                <Input placeholder="Label" type="text" value={value} onChange={this.changeValue} />
                <InputGroupAddon addonType="append" onClick={this.handleAdd} style={{backgroundColor:"gainsboro", borderBottom: '1px solid grey'}}><div className="p-1"><FaCheck/></div></InputGroupAddon>
            </InputGroup>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addLabel: label => dispatch(addLabelAction(label)),
    deleteLabel: id => dispatch(deleteLabelAction(id)),
    updateLabel: (id, label) => dispatch(updateLabelAction(id, label)),
});

export default connect(null, mapDispatchToProps)(InputEditLabel);