import React, {Component} from 'react';
import {observer, inject} from "mobx-react";

@inject('LabelsStore')
@observer
class MyLables extends Component {
    constructor(props) {
        super();

    }

    componentWillMount() {

        if (!this.props
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


        this.getSortedLabels = this.props
            .LabelsStore
            .getSortedLabels();
        // console.log('getSortedLabels', getSortedLabels);
        // console.log('search', this.props
        //     .LabelsStore
        //     .search('test1'));
    }

    render() {

        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-offset-2 col-sm-8">
                        <h1 className='text-center'>My Labels</h1>

                        <table className="table">
                            <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            {this
                                .getSortedLabels
                                .map((l, index) => (

                                    <tbody key={index}>
                                    <tr>
                                        <td rowSpan='2'>{l.key}</td>

                                        <td>
                                            {l.languages.map((lang, i) => (
                                                <table key={i}>
                                                    <tbody>
                                                    <tr>
                                                        <td>{lang.lan}</td>
                                                        <td>{lang.value}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            ))}

                                        </td>
                                        <td rowSpan='2'>
                                            <button type="button" className="btn btn-danger btn-block"
                                                    onClick={this.delLabel.bind(this, l.id)}>Remove
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                ))}

                        </table>
                    </div>
                </div>
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
