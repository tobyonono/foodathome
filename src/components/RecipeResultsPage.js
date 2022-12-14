import RecipeList from "./RecipeList";
import SectionTitle from "./SectionTitle";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Link } from "react-router-dom";
import { Search2 } from "../icons/svg/svgs";
import SearchBar from "./SearchBar";
import DictionaryDefinition from "./Dictionary/DictionaryDefinition";

const RecipeResultsPage = ({ data, setData, ingredients, setIngredients, dictionarySearch, setDictionarySearch }) => (
    <div>
        <header className="topBar font-nitti">
            <Link to={`/`} className='normal'>
                <div className='title'>
                    <SectionTitle titleText="Bitter Cassava" />
                    <SectionTitle titleText="Cooking Club" />
                </div>
            </Link>

            <SearchBar ingredients={ingredients} setIngredients={setIngredients} setData={setData} setDictionarySearch={setDictionarySearch} />
        </header>
        <section className='pt-8 py-4 border-0 mx-10'>
            <DictionaryDefinition dictionarySearch={dictionarySearch} />
            <hr className='w-full my-4' />
        </section>
        <section className='pt-8 p-4 border-0 mx-10'>
            <RecipeList recipes={data} />
        </section>
    </div>
)

export default RecipeResultsPage;