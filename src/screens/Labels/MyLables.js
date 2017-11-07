import React, {Component} from 'react';
import {observer, inject} from "mobx-react";
import {action} from "mobx";

@inject('LabelsStore')
@observer
class MyLables extends Component {
  constructor(props) {
    super();
    this.labels = props
      .LabelsStore
      .getAll();
  }
  render() {

    return (
      <div>
        <h1>My Labels</h1>
        <ul>
          {this
            .labels
            .map((l) => (
              <li key={l.id}>
                <div onClick={()=> this.delLabel(l.id)}>X</div>
                Language:{l.lan}, Key:{l.key}, Value:{l.value}
              </li>
            ))}
        </ul>
      </div>
    );
  }

  @action
  delLabel(id) {
    this
      .props
      .LabelsStore
      .del(id);

  
  let labels = this.props.LabelsStore.getAll();
  debugger;
  }
}

export default MyLables;
