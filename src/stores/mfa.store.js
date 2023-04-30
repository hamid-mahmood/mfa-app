import { makeAutoObservable } from "mobx";

function generateRandomNumber() {
  return Math.floor(Math.random() * 900000) + 100000; // Generates a random 6-digit number
}

function generateRandomNumberList(length) {
  const randomNumberList = [];

  for (let i = 0; i < length; i++) {
    randomNumberList.push({ id: i + 1, logo: "temp", name: "Hamid", totp: generateRandomNumber() });
  }

  return randomNumberList;
}

function regenerateList(list = []) {
  const updatedList = list.map((item) => ({
    ...item,
    totp: generateRandomNumber(),
  }));
  return updatedList;
};


class mfaStore {
  mfaList = [];

  // `this` from rootstore passed to the constructor and we can 
  // assign it to a variable accessible in this class called 
  // `rootStore`. Therefore, we can access other store 
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    this.mfaList = generateRandomNumberList(10);
  }

  regenerate() {
    this.mfaList = regenerateList(this.mfaList);
  }

  addToken(newToken) {
    this.mfaList.unshift({
      id: this.mfaList.length + 1,
      logo: "test",
      name: newToken,
      totp: generateRandomNumber()
    });
  }
}

export default mfaStore;