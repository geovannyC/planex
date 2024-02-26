import React from "react";

import PublicationPreview from "../../ui/publication";
import { useAppSelector } from "@/redux/hooks";

const Preview = ({ data }) => {
  const image = useAppSelector((state) => state.appReducer.publicationSelected.parameters.image);

  return (
    <PublicationPreview alt="previewImage" fill publication={image} />

  );
};

export default Preview;
