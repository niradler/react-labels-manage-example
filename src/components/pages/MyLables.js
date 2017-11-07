import React, { Component } from 'react';
import { observer,inject } from "mobx-react";

@inject ('LabelsStore')
@observer
class MyLables extends Component {
    constructor(props) {
    super();
    this.labels = props.LabelsStore.get();
  }
  render() {
    const labelList =this.labels.map((l)=>(
      <li> Language:{l.lan}, Key:{l.key}, Value:{l.value} </li>
    ));
    return (
     <div>
    <h1>My Labels</h1>
<ul>
  {labelList}
</ul>
  </div>
    );
  }
}

export default MyLables;
