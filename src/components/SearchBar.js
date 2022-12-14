import ReactTagInput from "@pathofdev/react-tag-input";
import axios from "axios";
import { Search2 } from "../icons/svg/svgs";
import { Link } from "react-router-dom";
import { Loader } from "../icons/svg/svgs";

const SearchBar = ({ ingredients, setIngredients, setData, setDictionarySearch }) => {

    const onIngredientChange = (newIngredients) => { 
        console.log(newIngredients[0], newIngredients)  
            setIngredients(newIngredients);           
    }

    const getRecipes = async () => {
        if(ingredients[0] !== 'null')
        {
            setDictionarySearch(ingredients[0]);
            console.log(ingredients[0], ingredients)
        };  
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
            <ReactTagInput className="font-nitti" tags={ingredients}
                onChange={onIngredientChange} placeholder="Search Something" />
            <Link className="flex" to={`/search/${ingredients}`} onClick={getRecipes}><button className='searchButton hover-search-submit' ><Search2 /></button></Link>
        </>
    )
}

export default SearchBar;


