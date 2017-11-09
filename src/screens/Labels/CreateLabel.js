import React, {Component} from 'react';
import Label from '../../stores/models/Label'
import { observer,inject } from "mobx-react";

@inject ('LabelsStore')
@observer
class CreateLabel extends Component {
  constructor(props) {
    super();
    this.state = {
      newLabel: new Label({lan: '', key: '', value: ''})
    };
  }

  render() {
    return (
      <div>
        <h1>CreateLabel</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Language:
            </label>
            <input type="text" name="lan" onChange={this.onChange}  value={this.state.newLabel.lan}/>
          </div>
          <div>
            <label>Key:
            </label>
            <input type="text" name="key" onChange={this.onChange} value={this.state.newLabel.key}/>
          </div>
          <div>
            <label>Value:
            </label>
            <input type="text" name="value" onChange={this.onChange} value={this.state.newLabel.value}/>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
  onChange = (e) => {
    const state = this.state
    state.newLabel[e.target.name] = e.target.value;
    this.setState(state);
  }

   handleFormSubmit = e => {
    e.preventDefault();
    const state = this.state
    const newLabel = state.newLabel
    this.props.LabelsStore.add(newLabel);
     state.newLabel = new Label({lan: '', key: '', value: ''});
      this.setState(state);
  };
}

export default CreateLabel;
