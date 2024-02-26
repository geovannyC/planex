import { Publication, Sizes } from "./publicationSchemma";
export type Parameters = {
    idSize?: Number,
    idColor?: Number
    image: string
}
export type PublicationSelected = {
    index: Number,
    parameters: Parameters
}
export type InitialState = {
    data: Publication[];
    currentSeason: String;
    publicationSelected: PublicationSelected
    loaderHandleChangueIndex: Boolean
};