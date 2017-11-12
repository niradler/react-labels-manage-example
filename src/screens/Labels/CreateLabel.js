import React, {Component} from 'react';
import Label from '../../stores/models/Label'
import {observer, inject} from "mobx-react";

@inject('LabelsStore')
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
            <div className='container'>
                <div className="row">
                    <div className="col-sm-offset-3 col-sm-6">

                        <h1 className='text-center'>CreateLabel</h1>

                        <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Language:</label>
                                <input className="form-control" type="text" name="lan" onChange={this.onChange} value={this.state.newLabel.lan}/>
                            </div>
                            <div className="form-group">
                                <label>Key:</label>
                                <input className="form-control" type="text" name="key" onChange={this.onChange} value={this.state.newLabel.key}/>
                            </div>
                            <div className="form-group">
                                <label>Value:</label>
                                <input className="form-control" type="text" name="value" onChange={this.onChange} value={this.state.newLabel.value}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block">Add</button>
                            </div>
                        </form>

                    </div>
                </div>
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
