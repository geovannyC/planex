import { Publication, Sizes } from "./publicationSchemma";
export type Parameters = {
    idSize?: number,
    idColor?: Number
    image?: String
}
export type PublicationSelected = {
    index: number,
    parameters: Parameters
}
export type InitialState = {
    data: Publication[];
    currentSeason: String;
    publicationSelected: PublicationSelected
    loaderHandleChangueIndex: Boolean
};