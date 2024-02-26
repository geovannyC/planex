import React from "react";

import { isMobile } from "react-device-detect";
import { SocialProps } from "@/redux/schemmas/detailsSchemma";
import { ContactData } from "@/redux/schemmas/publicationSchemma";

import DinamicIcons from "../dinamicIcons";

import styles from "./index.module.scss";

interface IconProps {
    data: ContactData,
    link: string | undefined
}
const Icon = ({ data, link }: IconProps) =>
    <span
        key={`${data.id}`}
        onClick={() => {
            window.open(link)
        }}
        style={{ cursor: "pointer" }}
        className={styles.icon}
    >
        <DinamicIcons library={data.icon?.library} tag={data.icon?.tag} />
    </span>

const Social = ({ contacts }: SocialProps) => {

    const urlSerialized = ({ type, url, number, text }: ContactData) => {
        if (type === "wsp") {
            const webLink = "https://wa.me"
            const mobileLink = "whatsapp"
            const platformSerialized = isMobile ? mobileLink : webLink;
            const urlSerialized = `${platformSerialized}://send/?phone=${number}&text=${text}`;
            return urlSerialized
        }
        return url
    }

    return (
        <div className={styles.containerSocial}>
            {contacts.map(contact => <Icon data={contact} link={urlSerialized(contact)} key={contact.id} />)}
        </div>
    );
};

export default Social;