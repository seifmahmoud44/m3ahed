import classesLibrarie from "./librarie.module.css";

import LibrarieItemCard from "./librarieItemCard/LibrarieItemCard";

const Librarie = () => {
return (
    <>
      <div className={classesLibrarie.librarieItems}>
        <LibrarieItemCard
        img={"https://via.placeholder.com/150"}
        title={"Book 1"}
        />
      </div>
    </>
  );
};

export default Librarie;
