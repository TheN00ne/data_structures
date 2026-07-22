export abstract class BasicArray<T> {
  id: number;
  data: T[];
  length: number;
  maxSize: number;
  isSorted: boolean;

  constructor(
    id: number,
    data: T[],
    length: number,
    maxSize: number,
    isSorted: boolean,
  ) {
    this.id = id;
    this.data = data;
    this.length = length;
    this.maxSize = maxSize;
    this.isSorted = isSorted = false;
  }

  abstract unshift(v: T): T | null;

  shift(): T | null {
    if (this.length == 0) {
      return null;
    }

    const newArr: T[] = [];
    const deletedEl = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      newArr[i] = this.data[i + 1];
    }

    this.length--;
    this.data = newArr;
    return deletedEl;
  }

  abstract push(v: T): T | null;

  pop(): T | null {
    if (this.length == 0) {
      return null;
    }

    const newArr: T[] = [];
    const deletedEl = this.data[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      newArr[i] = this.data[i];
    }

    this.length--;
    this.data = newArr;
    return deletedEl;
  }

  abstract insert(v: T, inx: number): T | null;

  remove(inx: number): T | null {
    if (this.length == 0) {
      return null;
    }

    if (inx < 0 || inx >= this.length) {
      return null;
    }

    const newArr: T[] = [];
    const deletedEL = this.data[inx];

    for (let i = 0; i < this.length - 1; i++) {
      if (i < inx) {
        newArr[i] = this.data[i];
      }
      if (i >= inx) {
        newArr[i] = this.data[i + 1];
      }
    }

    this.length--;
    this.data = newArr;
    this.isSorted = false;
    return deletedEL;
  }

  update(inx: number, v: T): T | null {
    if (inx < 0 || inx >= this.length) {
      return null;
    }

    this.data[inx] = v;
    this.isSorted = false;
    return v;
  }

  get(inx: number) {
    if (inx < 0 || inx >= this.length) {
      return null;
    }

    return this.data[inx];
  }

  swap(inx1: number, inx2: number): void {
    if (inx1 < 0 || inx1 >= this.length) {
      return;
    }

    if (inx2 < 0 || inx2 >= this.length) {
      return;
    }

    const temp = this.data[inx1];
    this.data[inx1] = this.data[inx2];
    this.data[inx2] = temp;
    this.isSorted = false;
  }

  reverse(): void {
    const newArr: T[] = [];

    for (let i = 0; i < this.length; i++) {
      newArr[this.length - i - 1] = this.data[i];
    }

    this.data = newArr;
  }

  clean(): void {
    this.length = 0;
    this.data = [];
  }

  isEmpty(): boolean {
    return length == 0;
  }

  isFull(): boolean {
    return this.length == this.maxSize;
  }

  contains(v: T): boolean {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == v) {
        return true;
      }
    }
    return false;
  }

  findIndex(v: T): number | null {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == v) {
        return i;
      }
    }
    return null;
  }

  linearSearch(v: T): T | null {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] == v) {
        return v;
      }
    }
    return null;
  }

  binarySearch(
    v: T,
    minIndex: number = 0,
    maxIndex: number = this.length - 1,
  ): T | null {
    if (this.isSorted) {
      let currentIndex = (minIndex + maxIndex) / 2;

      if (v == this.data[currentIndex]) {
        return v;
      }

      if (v < this.data[currentIndex]) {
        this.binarySearch(v, 0, currentIndex);
      }

      if (v > this.data[currentIndex]) {
        this.binarySearch(v, currentIndex, maxIndex);
      }

      return null;
    }

    return null;
  }

  bubleSort(d: "increase" | "decrease"): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        switch (d) {
          case "increase":
            if (this.data[j] > this.data[j + 1]) {
              let temp = this.data[j];
              this.data[j] = this.data[j + 1];
              this.data[j + 1] = temp;
            }
            break;
          case "decrease":
            if (this.data[j] < this.data[j + 1]) {
              let temp = this.data[j];
              this.data[j] = this.data[j + 1];
              this.data[j + 1] = temp;
            }
            break;
        }
      }
    }

    this.isSorted = true;
  }

  selectionSort(d: "increase" | "decrease"): void {
    for (let i = 0; i < this.length; i++) {
      let mIndex;

      switch (d) {
        case "increase":
          mIndex = Infinity;
          for (let j = i; j < this.length; j++) {
            if (j < mIndex) {
              mIndex = j;
            }
          }
          break;
        case "decrease":
          mIndex = -Infinity;
          for (let j = i; j < this.length; j++) {
            if (j > mIndex) {
              mIndex = j;
            }
          }
          break;
      }

      let temp = this.data[i];
      this.data[i] = this.data[mIndex];
      this.data[mIndex] = temp;
    }

    this.isSorted = true;
  }

  insertionSort(d: "increase" | "decrease"): void {
    switch (d) {
      case "increase":
        for (let i = 1; i < this.length; i++) {
          const key = this.data[i];
          let j = i - 1;

          while (j >= 0 && key < this.data[j]) {
            this.data[j + 1] = this.data[j];
            j--;
          }

          this.data[j + 1] = key;
        }
        break;
      case "decrease":
        for (let i = 1; i < this.length; i++) {
          const key = this.data[i];
          let j = i - 1;

          while (j >= 0 && key > this.data[j]) {
            this.data[j + 1] = this.data[j];
            j--;
          }

          this.data[j + 1] = key;
        }
        break;
    }
  }

  quickSort(d: "increase" | "decrease", arr: T[]): T[] {
    switch (d) {
      case "increase":
        if (arr.length < 2) {
          return arr;
        } else {
          const pivot = arr[0];
          let left = arr.filter((el) => el < pivot);
          let right = arr.filter((el) => el > pivot);
          return [
            ...this.quickSort(d, left),
            pivot,
            ...this.quickSort(d, right),
          ];
        }
        break;
      case "decrease":
        if (arr.length < 2) {
          return arr;
        } else {
          const pivot = arr[0];
          let left = arr.filter((el) => el > pivot);
          let right = arr.filter((el) => el < pivot);
          return [
            ...this.quickSort(d, left),
            pivot,
            ...this.quickSort(d, right),
          ];
        }
        break;
    }
  }

  mergeSort(d: "increase" | "decrease", arr: T[]): T[] {
    if (arr.length < 2) {
      return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left: T[] = arr.slice(0, middle);
    let right: T[] = arr.slice(middle);

    const sortedLeft = this.mergeSort(d, left);
    const sortedRight = this.mergeSort(d, right);

    return this.merge(d, sortedLeft, sortedRight);
  }

  private merge(d: "increase" | "decrease", left: T[], right: T[]): T[] {
    let sortedArr: T[] = [];
    let i = 0;
    let j = 0;

    switch (d) {
      case "increase":
        while (i < left.length && j < right.length) {
          if (right[j] <= left[i]) {
            sortedArr.push(right[j]);
            j++;
          } else {
            sortedArr.push(left[i]);
            i++;
          }
        }
        break;
      case "decrease":
        while (i < left.length && j < right.length) {
          if (right[j] >= left[i]) {
            sortedArr.push(right[j]);
            j++;
          } else {
            sortedArr.push(left[i]);
            i++;
          }
        }
        break;
    }

    while (i < left.length) {
      sortedArr.push(left[i]);
      i++;
    }

    while (j < right.length) {
      sortedArr.push(right[j]);
      j++;
    }

    return sortedArr;
  }
}

//Зроби методи створення елемента абстрактними
