import ReactTagInput from "@pathofdev/react-tag-input";
import axios from "axios";
import { Search2 } from "../icons/svg/svgs";
import { Link } from "react-router-dom";
import { Loader } from "../icons/svg/svgs";

const SearchBar = ({ ingredients, setIngredients, setData }) => {

    const onIngredientChange = (newIngredients) => {
        setIngredients(newIngredients);
    }

    const getRecipes = async () => {

        const encodedIngredients = encodeURI(ingredients);
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list',
            params: { from: '0', size: '30', q: encodedIngredients },
            headers: {
                'x-rapidapi-host': 'tasty.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY2
            }
        };

        const apiData = await axios.request(options).catch(error => {
            console.error(error);
        });
        console.log(apiData.data.results);
        setData(apiData.data.results);
    }

    return (
        <>
            <ReactTagInput className="font-nitti flex" tags={ingredients}
                onChange={onIngredientChange} placeholder="Search Something" />
            <Link to={`/search/${ingredients}`} onClick={getRecipes}><button className='searchButton hover-search-submit' ><Search2 /></button></Link>
        </>
    )
}

export default SearchBar;


