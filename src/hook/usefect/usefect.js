import React, { useEffect, useState } from "react";
import axios from "../../components/Api/Api";

export const usefect = (api,...res) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [...res]);

  return { data, loading };
};
