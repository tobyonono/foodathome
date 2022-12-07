import RecipeList from "./components/RecipeList";

const SearchResults = () => (
    <div className='recipePageBody'>
        <header className="topBar recipePageHeader">
            <Link to={`/`} className='normal'>
                <div className='title'>
                    <SectionTitle titleText="Bitter Cassava" />
                    <SectionTitle titleText="Cooking Club" />
                </div>
            </Link>
        </header>
        <section className='p-20 pb-0 mb-0 border-0'>
                <div className="flex p-4">
                    {recipeData && <span className="text-white font-nitti text-4xl uppercase">Recipes</span>}
                </div>
                <div>
                    {recipeData && <RecipeList recipes={recipeData} />}
                </div>

            </section>

    </div>
)