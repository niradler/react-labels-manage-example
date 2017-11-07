import { observable, action,computed } from "mobx";


class LabelsStore {
    @observable labels = [{key:"test",lan:"en",value:"test value",id:"1"}];

    @action add(label) {
        label.id = Math.random().toString(36).substr(2, 10);
        this.labels.push(label);
        console.log('label added',label);
    }
    @action getAll() {
        console.log('return all labels',this.labels);
        return this.labels;
    }
    @action del(id) {
         console.log('delete label with id of ',id);
         this.labels =  this.labels.filter((l)=> { return l.id!==id});
    }
   

}
const store = new LabelsStore();
export default store;