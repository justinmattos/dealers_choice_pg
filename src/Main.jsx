import React, { Component } from 'react';
import axios from 'axios';
import CrewList from './CrewList.jsx';
import CrewDetail from './CrewDetail.jsx';

const content = document.querySelector('#content');

class Main extends Component {
  state = {
    crew: [],
    selected: null,
    editMode: false,
  };

  componentDidMount() {
    this.updateCrew()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state !== prevState) {
  //     this.updateCrew();
  //   }
  // }

  updateCrew = () => {
    axios
    .get('/api/crew')
    .then((crew) => {
      crew = crew.data.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
        else return 0;
      });
      this.setState({
        crew,
      });
      const hash = window.location.hash.slice(1);
      if (hash) this.selectCrew(hash);
    })
    .catch((err) => console.log(err));
  }

  selectCrew = (crew_id) => {
    axios
      .get(`/api/crew/${crew_id}`)
      .then((crewDetail) => {
        crewDetail = crewDetail.data;
        this.setState({
          selected: crewDetail,
        });
        window.location.hash = crewDetail.crew_id;
      })
      .catch((err) => console.log(err));
  };

  editCrew = (id) => {
    let { editMode } = this.state;
    if (editMode) {
      const [name, bio] = [
        '#NAME',
        '#BIO',
      ].map((selector) => document.querySelector(selector).value);
      axios.put(`/api/crew/${id}`, `name=${name}&bio=${bio}`).then(() => {
        this.selectCrew(id);
      });
      this.setState({ editMode: false })
      this.updateCrew();
    } else {
      this.setState({ editMode: true });
    }
  };

  deleteCrew = (id) => {
    const URL = `/api/crew/${id}`;
    axios
      .delete(URL)
      .then(() => {
        this.setState({
          selected: null
        });
        this.updateCrew();
      })
      .catch(() => alert('Failed to delete crew due to server error'));
  };

  render() {
    const { crew, selected, editMode } = this.state;
    return (
      <div>
        <div id="crew-list">
          <CrewList crew={crew} selectCrew={this.selectCrew} />
        </div>
        {selected ? (
          <div id="crew-detail">
            <CrewDetail
              selected={selected}
              editMode={editMode}
              editCrew={this.editCrew}
              deleteCrew={this.deleteCrew}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Main;
