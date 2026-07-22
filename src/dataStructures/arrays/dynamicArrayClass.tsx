import { BasicArray } from "./basicArrayClass";

export class DynamicArray<T> extends BasicArray<T> {
  constructor(
    id: number,
    data: T[],
    length: number,
    maxSize: number,
    isSorted: boolean,
  ) {
    super(id, data, length, maxSize, isSorted);
  }

  unshift(v: T): T {
    if (this.length == this.maxSize) {
      this.maxSize *= 2;
    }

    const newArr: T[] = [];
    newArr[0] = v;

    for (let i = 0; i < this.length; i++) {
      newArr[i + 1] = this.data[i];
    }

    this.length++;
    this.data = newArr;
    this.isSorted = false;
    return v;
  }

  push(v: T): T {
    if (this.length == this.maxSize) {
      this.maxSize *= 2;
    }

    this.length++;
    this.data[this.length++] = v;
    this.isSorted = false;
    return v;
  }

  insert(v: T, inx: number): T | null {
    if (this.length == this.maxSize) {
      this.maxSize *= 2;
    }

    if (inx < 0 || inx >= this.length) {
      return null;
    }

    const newArr: T[] = [];

    for (let i = 0; i <= this.length; i++) {
      if (i < inx) {
        newArr[i] = this.data[i];
      }
      if (i > inx) {
        newArr[i] = this.data[i - 1];
      }
      if (i == inx) {
        newArr[i] = v;
      }
    }

    this.length++;
    this.data = newArr;
    this.isSorted = false;
    return v;
  }
}
