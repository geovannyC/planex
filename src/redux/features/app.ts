import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { InitialState, PublicationSelected } from "../schemmas/appSchemma";
import { Publication } from "../schemmas/publicationSchemma";

import { data } from "./data/data";

const initialDataCostumePublication = {
    index: 2,
    parameters: {
        idColor: data[2].colors[0].id,
        idSize: data[2].sizes[0].id,
        image: data[2].colors[0].images[0]
    }
} as PublicationSelected
const initialState = {
    data: data,
    currentSeason: "normal",
    publicationSelected: initialDataCostumePublication,
    loaderHandleChangueIndex: true
} as InitialState;

export const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        reset: () => initialState,
        setDataPublications: (state, action: PayloadAction<Publication[]>) => {
            state.data = action.payload;
        },
        setCurrentPublications: (state, action: PayloadAction<PublicationSelected>) => {
            state.publicationSelected = action.payload;
        },
        setLoaderHandleChangueIndex: (state, action: PayloadAction<Boolean>) => {
            state.loaderHandleChangueIndex = action.payload;
        },
    },
});

export const {
    setDataPublications,
    setCurrentPublications,
    setLoaderHandleChangueIndex
} = app.actions;
export default app.reducer;