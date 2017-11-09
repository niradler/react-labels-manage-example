import {
    observable,
    action,
    computed
} from "mobx";


class LabelsStore {
    @observable labels = [];

    @action add(label) {
        label.id = Math.random().toString(36).substr(2, 10);
        this.labels.push(label);
        console.log('label added', label);
    }
    @action getAll() {
        console.log('return all labels', this.labels);
        return this.labels;
    }
    formatLabels(labels) {
        let keys = [];
        labels.map((l, index) => {
            let c = 0,
                loc = null;
            keys.map((s, location) => {
                if (l.key === s.key) {
                    c++;
                    loc = location;
                };
            });
            if (c == 0) {
                let obj = {};
                obj.key = l.key;
                obj.id = l.id;
                obj.languages = [];
                obj.languages.push({
                    lan: l.lan,
                    value: l.value,
                    id: l.id

                });
                keys.push(obj);
            } else {
                keys[loc].languages.push({
                    lan: l.lan,
                    value: l.value,
                    id: l.id
                });
            }
        })
        return keys;
    }
    @action getSortedLabels() {
        const labels = this.labels.slice();
        return this.formatLabels(labels);
    }
    @action del(id) {
        console.log('delete label with id of ', id);
        this.labels = this.labels.filter((l) => {
            return l.id !== id
        });
    }

    @computed get count() {
        return this.labels.length;
    }

    @action search(term) {
         const labels = this.labels.slice();
        const formatedLabels = this.formatLabels(labels)
        return formatedLabels.filter((l) => {
            return l.key.includes(term);
        })

    }

}
const store = new LabelsStore();
export default store;