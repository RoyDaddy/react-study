import { observable, action, computed } from 'mobx';

export default class MarketStore {
  @observable selectedItems = [];

  // **** 추가됨
  constructor(root) {
    this.root = root;
  }

  @action
  put = (name, price) => {
    const { number } = this.root.counter;
    if (number <= 0) return;
    // 존재하는지 찾고
    const exists = this.selectedItems.find(item => item.name === name);
    if (!exists) {
      // 존재하지 않는다면 새로 집어넣습니다.
      this.selectedItems.push({
        name,
        price,
        count: number,
      });
      return;
    }
    exists.count += number;
  };

  @action
  take = name => {
    const { number } = this.root.counter;

    const itemToTake = this.selectedItems.find(item => item.name === name);
    itemToTake.count -= number;
    if (itemToTake.count <= 0) {
      // 갯수가 0 이면
      this.selectedItems.remove(itemToTake); // 배열에서 제거처리합니다.
    }
  };

  @computed
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous, {price, count}) => {
      return previous + price * count;
    }, 0);
  }
}