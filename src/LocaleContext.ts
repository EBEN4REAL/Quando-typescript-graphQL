import React from "react";

const defaultValue = {
  locale: 'en',
  setLocale: (lang: string) => {} 
}

export default React.createContext(defaultValue);