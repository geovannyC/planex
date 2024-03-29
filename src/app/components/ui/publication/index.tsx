import React from 'react'
import Image from 'next/image';

import styles from "./index.module.scss";

const PublicationPreview = (props: any) => {
    const imageLoader = ({ src }: { src: string }) => {
        return `https://i.postimg.cc/${src}`;
    };

    return (
        <div className={styles.shadow} >
            {props.publication ? <Image
                {...props}
                loader={imageLoader}
                src={
                    props.publication
                }
                alt="profileImage"
                loading="lazy"
            /> : <h3>
                loading
            </h3>}
        </div>
    )
}

export default PublicationPreview