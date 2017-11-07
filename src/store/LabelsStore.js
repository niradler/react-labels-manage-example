import { observable, action } from "mobx";


class LabelsStore {
    @observable labels = [];

    @action add(label) {
        console.log('label added',label);
        this.labels.push(label);
    }
    @action get() {
        return this.labels;
    }

}
const store = new LabelsStore();
export default store;