import { useEffect, useState } from "react";
import DataFetch from "./DataFetch";
import "../App.css";

const FetchAPI = () => {
  const [recipes, setRecipes] = useState([]); // State for all recipes
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        console.log(result); // Debug: Check the full response
        setRecipes(result.recipes); // Save all recipes
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="recipes">
        <DataFetch data={recipes} />
      </div>
    </div>
  );
};

export default FetchAPI;
