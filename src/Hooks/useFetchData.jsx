import { useState, useEffect } from "react";

export const useFetchData = (API) => {
  const [fetchResult, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    try {
      setLoader(true);
      const handleFetchData = async () => {
        const response = await fetch(API);
        const result = await response.json();
        setData(result);
        setLoader(false);
      };

      handleFetchData();
    } catch (error) {
      console.log(error);
      setError(error);
      setLoader(false);
    }
  }, [API]);

  const handleFetchData = async (e) => {
    const response = await fetch(API);
    const result = await response.json();
    setData(result);
  };

  return { fetchResult, error, loader, handleFetchData };
};
