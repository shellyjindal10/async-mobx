import {action, extendObservable, runInAction} from "mobx"

export default extendObservable(this, {
  people: [],
  loading: false,
  loadPeople: action(async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const json = await response.json()
    runInAction(() => {
      this.people = json.results;
      this.loading = false;
    });
  })
})
