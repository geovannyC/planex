import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { handleChangueState } from "@/redux/features/initialState";
import styles from "./testStore.module.scss";

const TestStore = () => {
  const data = useAppSelector((state) => state.initialState.loading);
  const dispatch = useAppDispatch();
  const handleChangueStateData = () => {
    dispatch(handleChangueState(!data));
  };
  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => handleChangueStateData()}
      >{`${data}`}</button>
    </div>
  );
};

export default TestStore;
