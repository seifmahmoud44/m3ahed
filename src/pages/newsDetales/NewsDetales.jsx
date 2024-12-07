import { useParams } from "react-router-dom";

const NewsDetales = () => {
  const { name } = useParams(); // Get the 'name' parameter from the route

  return (
    <div>
      <h1>{name}</h1> {/* Render the name from the URL */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae
        omnis voluptatibus labore, cupiditate magni facere, laboriosam esse
        magnam doloribus, dolorem vel. Quo provident ad dolore quibusdam? Animi,
        obcaecati reprehenderit.
      </p>
    </div>
  );
};

export default NewsDetales;
