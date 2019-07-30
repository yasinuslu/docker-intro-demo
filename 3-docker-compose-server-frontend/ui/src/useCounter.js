import { useState, useCallback, useEffect } from 'react';
import { client } from './client';

export function useCounter(name) {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  const increment = useCallback(async () => {
    setIsLoading(true);

    const res = await client.get(`/counter/increment/${name}`);
    setCount(res.data.data);

    setIsLoading(false);
  }, [name, setIsLoading, setCount]);

  const decrement = useCallback(async () => {
    setIsLoading(true);

    const res = await client.get(`/counter/decrement/${name}`);
    setCount(res.data.data);

    setIsLoading(false);
  }, [name, setIsLoading, setCount]);

  useEffect(() => {
    async function load() {
      setIsLoading(true);

      const res = await client.get(`/counter/get/${name}`);

      let count = 0;
      if (res.data && Number.isFinite(res.data.data)) {
        count = res.data.data;
      }

      setCount(count);
      setIsLoading(false);
    }

    load();
  }, [name]);

  return { count, isLoading, increment, decrement };
}
