import { useState, useEffect } from "react";

const initialState = {
  error: undefined,
  data: undefined,
  loading: undefined,
};

export default function useApi({ url }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function request() {
      setState({
        ...initialState,
        loading: true,
      });

      try {
        const r = await fetch(url);
        const json = await r.json();
        setState({
          ...initialState,
          data: json,
        });
      } catch (error) {
        setState({
          ...initialState,
          error,
        });
      }
    }

    request();
  }, [url]);

  return state;
}
