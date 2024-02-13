import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Data = {
  record: {
    sample: String;
  };
  metadata: {
    id: String;
    private: boolean;
  };
};
type DataError = {
  message: String;
};

export const jsonApi = createApi({
  reducerPath: "jsonApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_URLJSON,
    prepareHeaders: (headers) => {
      headers.set(
        "X-ACCESS-KEY",
        "$2a$10$U7yUqlyd3RoJi5LUs3vysu.7mbF8qcfx6JsLFX6nbUtP.eca2ntGe"!
      );
      return headers;
    },
  }),
  tagTypes: ["GET"],
  keepUnusedDataFor: 90,
  refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    getJson: builder.query<Data[], null>({
      query: () => `/${process.env.NEXT_PUBLIC_BINID}`,
      keepUnusedDataFor: 30,
    }),
  }),
});

export const { useGetJsonQuery } = jsonApi;
