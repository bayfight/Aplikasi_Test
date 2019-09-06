import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import FormMain from './component/FormMain';
import ListNotes from './component/ListNotes';
import './App.css';
import Sidebar from './component/Sidebar';

class App extends React.Component {
  state = {
    filteredLabels: [],
  }
  addFilteredLabel = (labelId) => {
    let { filteredLabels } = this.state;
    if (!filteredLabels.find(label => label === labelId)) {
      filteredLabels = [
        ...filteredLabels,
        labelId,
      ];
    } else {
      filteredLabels = filteredLabels.filter(label => label !== labelId);
    }
    this.setState({ filteredLabels });
  }
  render() {
    const {
      filteredLabels,
    } = this.state;
    return (
      <div className="container">
        <Row>
          <Col xs={3}>
            <Sidebar addFilteredLabel={this.addFilteredLabel} />
          </Col>
          <Col xs={8} className="bg-dark">
            <FormMain />
            <ListNotes filteredLabels={filteredLabels} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
