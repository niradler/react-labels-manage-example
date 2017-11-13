import React, {Component} from 'react';
import Label from '../../stores/models/Label'
import {observer, inject} from "mobx-react";
import MyLables from "../../screens/Labels/MyLables";

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

                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Key:</label>
                                <input className="form-control" type="text" name="key" onChange={this.onChange} value={this.state.newLabel.key} placeholder='Key word'/>
                            </div>

                            <hr className='divider'></hr>



                            <div className="form-group">
                                <select className="form-control" title="Choose Language" name="lan" onChange={this.onChange}>
                                    <option>Choose language</option>
                                    <option value="EN">English</option>
                                    <option value="ES">Español</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Value:</label>
                                <textarea rows='5' className="form-control" type="text" name="value" onChange={this.onChange} value={this.state.newLabel.value} placeholder='Write an value'/>
                            </div>

                            <div className="form-group">
                                <button className='btn btn-primary btn-block'>Add One More Lable</button>
                            </div>

                            <hr className='divider'></hr>

                            <div className="form-group">
                                <button type="submit" className="btn btn-success btn-block btn-lg">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
                <MyLables/>
            </div>
        );

    }

    onChange = (e) => {
        const state = this.state;
        state.newLabel[e.target.name] = e.target.value;
        this.setState(state);
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const state = this.state;
        const newLabel = state.newLabel;
        this.props.LabelsStore.add(newLabel);
        state.newLabel = new Label({lan: '', key: this.state.newLabel.key, value: ''});
        this.setState(state);
    };
}

export default CreateLabel;
