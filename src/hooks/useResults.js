import { useState, useEffect } from "react";
import yelp from "./../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const searchApi = async searchTerm => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term: searchTerm,
            location: "san jose"
          }
        });
  
        setResults(response.data.businessess);
      } catch (err) {
        // Error handling here
        console.log(err.message);
        setErrorMessage("Something went wrong");
      }
    };
  
    // Call search Api when component is first rendered
    useEffect(() => {
      searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};