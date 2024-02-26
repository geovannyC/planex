import { ContactData } from "./publicationSchemma"

export interface Icons {
    library: String,
    tag: string,
}
export interface ObjAppearsProps {
    active: Boolean,
    children: JSX.Element[] | String | JSX.Element,
    delay: Number,
    parentStyles: String
}
export interface SocialProps {
    contacts: ContactData[]
}
