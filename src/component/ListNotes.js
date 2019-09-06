import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { difference } from 'lodash';
import ItemNote from './ItemNote';

const filterLabels = (labels, filteredLabels) => {
    if (filteredLabels.length === 0) {
        return true;
    }
    console.log(labels.filter(label => filteredLabels.indexOf(label) > -1).length);
    return labels.filter(label => filteredLabels.indexOf(label) > -1).length > 0;
}

class ListNotes extends React.PureComponent {
    render() {
        const { filteredLabels, notes } = this.props;
        return (
            <React.Fragment>
                {notes.filter(note => filterLabels(note.labels.map(label => label.id), filteredLabels)).map(note => (
                    <ItemNote key={note.id} note={note} />
                ))}
            </React.Fragment>
        )
    }
}

ListNotes.propTypes = {
    filteredLabels: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.arrayOf(PropTypes.object),
}

ListNotes.defaultProps = {
    filteredLabels: [],
    notes: [],
}

const mapStateToProps = state => ({
    notes: state.notes,
});

export default connect(mapStateToProps)(ListNotes);