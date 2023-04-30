import React from "react";
import MFAStore from "./mfa.store";

class RootStore {
  constructor() {
    this.mfaStore = new MFAStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

// this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);