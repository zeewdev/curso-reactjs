import { useEffect, useState } from "react";

const useStorage = (key, initialValues) => {
  const [data, setData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const getData = localStorage.getItem(key);
        let dataLocal;
        if (getData) {
            dataLocal = JSON.parse(getData);
        }
        else {
            dataLocal = initialValues;
        }
        setData(dataLocal);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    }, 5000);
  });

    const saveData = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
        setData(data);
    }

    return {
        data,
        isLoading,
        isError,
        saveData
    }
};

export default useStorage;
