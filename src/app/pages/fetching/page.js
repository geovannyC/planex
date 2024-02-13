import React from "react";
import styles from "./testFetching.module.scss";
import { useGetUsersQuery } from "@/redux/services/userApi";
import { Providers } from "@/redux/provider";

const Fetching = () => {
  const { data } = useGetUsersQuery(null);
  const handleCallQuery = () => {
    console.log(data);
  };

  return (
    <button className={styles.btn} onClick={() => handleCallQuery()}>
      llamar
    </button>
  );
};

export default Fetching;
