import "../App.css";
const DataFetch = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No recipes available</div>;
  }

  console.log(data);

  return (
    <div>
      <h2 align="center">All Recipes</h2>
      <div className=" container">
        <ul className="recipe">
          {data.map((recipe) => (
            <li
              style={{ listStyleType: "none" }}
              key={recipe.id}
              className="recipe-item"
            >
              <h3>{recipe.name}</h3>
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{ width: "150px", height: "auto" }}
              />
              <p>
                <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
              </p>
              <p>
                <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
              </p>
              <p>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
              <p>
                <strong>Rating:</strong> {recipe.rating} / 5
              </p>
              <p>
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredients.map((ingredient, index) => (
                  <li style={{ listStyleType: "none" }} key={index}>
                    {ingredient},{" "}
                  </li>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataFetch;
