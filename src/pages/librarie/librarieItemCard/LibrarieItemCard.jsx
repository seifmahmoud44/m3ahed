import classesItemCard from "./librarieItem.module.css";

const librarieItemCard = ({ img, title }) => {
  return (
    <>
      <div className={classesItemCard.librarieItemCard}>
        <img src={img} />
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default librarieItemCard;
