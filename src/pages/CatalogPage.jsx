import { useState } from "react";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";
import { CatalogList } from "../components/CatalogList/CatalogList";
import { Modal } from "../components/ModalWindows/ModalCard";

const CatalogPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1>Catalog Page</h1>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <CatalogFilter />
      <CatalogList />
      <Modal isOpen={open} closeFunc={() => setOpen(false)} />
    </>
  );
};

export default CatalogPage;
