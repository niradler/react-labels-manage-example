import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

@inject('LabelsStore')
@observer
class MyLables extends Component {
  constructor(props) {
    super();
  
  }
  componentWillMount(){

 if ( !this.props
      .LabelsStore.count) {
      this.props
        .LabelsStore
        .add({key: "test1", lan: "en", value: "test value 1 en", id: "1"});
      this.props
        .LabelsStore
        .add({key: "test2", lan: "fr", value: "test value 2", id: "1"});
           this.props
        .LabelsStore
        .add({key: "test1", lan: "fr", value: "test value 1 fr", id: "1"});
    }

    let getSortedLabels = this.props
      .LabelsStore
      .getSortedLabels();
console.log('getSortedLabels',getSortedLabels);
 console.log('search',this.props
      .LabelsStore
      .search('test1'));
  }
  render() {

    return (
      <div>
        <h1>My Labels</h1>
        <ul>
          {this
            .props
            .LabelsStore
            .labels
            .map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  className="button is-pulled-right is-danger"
                  onClick={this
                  .delLabel
                  .bind(this, l.id)}>
                  remove
                </button>

                Language:{l.lan}, Key:{l.key}, Value:{l.value}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  delLabel(id) {
    this
      .props
      .LabelsStore
      .del(id);
  }
}

export default MyLables;
