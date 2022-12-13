import RecipeList from "./RecipeList";
import SectionTitle from "./SectionTitle";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Link } from "react-router-dom";
import { Search2 } from "../icons/svg/svgs";
import SearchBar from "./SearchBar";

const RecipeResultsPage = ({data, setData, ingredients, setIngredients}) => (
    <div>
        <header className="topBar font-nitti">
                <Link to={`/`} className='normal'>
                    <div className='title'>
                        <SectionTitle titleText="Bitter Cassava" />
                        <SectionTitle titleText="Cooking Club" />
                    </div>
                </Link>

                <SearchBar ingredients={ingredients} setIngredients={setIngredients} setData={setData} />
            </header>
        <RecipeList recipes={data} />
    </div>
)

export default RecipeResultsPage;