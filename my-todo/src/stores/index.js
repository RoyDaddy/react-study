import DashboardStore from "./dashboard";

class RootStore {
  constructor() {
    this.dashboard = new DashboardStore();
  }
}

export default RootStore;