import React, { useState, createContext } from 'react';

const PickedPackageContext = createContext('');

const PickedPackageProvider = ({ children }) => {
  const [pickedPackage, _setPickedPackage] = useState('');

  const setPickedPackage = (item) => _setPickedPackage(item);

  return (
    <PickedPackageContext.Provider value={{ pickedPackage, setPickedPackage }}>
      {children}
    </PickedPackageContext.Provider>
  );
};

const PickedPackageConsumer = ({ children }) => (
  <PickedPackageContext.Consumer>{children}</PickedPackageContext.Consumer>
);

export { PickedPackageProvider, PickedPackageConsumer, PickedPackageContext };
