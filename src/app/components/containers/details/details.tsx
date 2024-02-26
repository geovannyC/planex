import React from "react";

import { Parameters } from "@/redux/schemmas/appSchemma";
import { setCurrentPublications } from "@/redux/features/app";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Preview from "../preview/index.js";
import BackSide from "../backSide";
import FrontSide from "../frontSide";

import DinamicIcons from "../../ui/dinamicIcons";
import ObjAppears from "../../ui/objApears";

import styles from "./page.module.scss";
import Social from "../../ui/social";

const Details = () => {
  const data = useAppSelector((state) => state.appReducer.data);
  const publiParameters = useAppSelector((state) => state.appReducer.publicationSelected) || 0;
  const loader = useAppSelector((state) => state.appReducer.loaderHandleChangueIndex);
  const dispatch = useAppDispatch();

  const handleChangueParameters = ({ idColor, idSize, image }: Parameters) => {
    const newParameters = {
      index: publiParameters.index,
      parameters: {
        idColor: idColor || publiParameters.parameters.idColor,
        idSize: idSize || publiParameters.parameters.idSize,
        image: image || publiParameters.parameters.image
      }
    }
    dispatch(
      setCurrentPublications(newParameters)
    )

  }
  return (
    <div className={styles.containerDetails}>
      <ObjAppears active={loader} delay={200} parentStyles={styles.horizontalDis}>
        <div className={styles.details}>

          <h1>
            {data[publiParameters.index].title}
          </h1>
          <div className={styles.listDetails}>
            {data[publiParameters.index].data.map((char) => (
              <div className={styles.detailContainer} key={char.id}>
                <div className={styles.icon}>
                  <DinamicIcons library={char.library} tag={char.tag} />
                </div>
                <h3 key={char.id}>
                  {char.detail}
                </h3>
              </div>
            ))}
          </div>
          <div className={styles.containerColors}>
            {data[publiParameters.index].colors.map(color => <div onClick={() => handleChangueParameters({ idColor: color.id, image: color.images[0] })} style={{ backgroundColor: color?.color }} className={` ${publiParameters.parameters.idColor === color.id && styles.actived} ${styles.color}`} key={color.id} />)}
          </div>
          <div className={styles.containerSizes}>
            {
              data[publiParameters.index].sizes.map(element => <div onClick={() => handleChangueParameters({ idSize: element.id })} className={`${styles.size} ${publiParameters.parameters.idSize === element.id && styles.actived}`} key={element.id}><small>{element.size}</small></div>)
            }
          </div>
          <h2>
            {`$ ${data[publiParameters.index].price}`}
          </h2>
        </div>
        <Social contacts={data[publiParameters.index].contactData} />
      </ObjAppears>
      <div className={styles.backContainer}>
        <div className={styles.floor}>
          <BackSide />
          <ObjAppears active={loader} delay={200} parentStyles={styles.containerMiddle}>
            <Preview data={publiParameters.parameters.image} />
          </ObjAppears>
          <FrontSide />
        </div>
      </div >
    </div>
  );
};

export default Details;
