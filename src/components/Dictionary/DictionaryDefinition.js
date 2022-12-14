import axios from "axios";
import { useState, useEffect, } from "react";
const APIKEY = '0fe1ef32-18b0-408d-a21a-f8524d8f78d5';


const DictionaryDefinition = ({ dictionarySearch}) => {
    console.log(dictionarySearch);

    const [definition, setDefinition] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const getDef= async () => {
            setIsLoading(true);
            const res = await axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${dictionarySearch}?key=${APIKEY}`)
            setDefinition(res.data[0]);
            setIsLoading(false);
            console.log(res.data);
            console.log(definition);
        }
        getDef().catch(console.error);
    }, [dictionarySearch]);




    return (
        <>
            {definition &&
                <div className="text-left">
                    <p className="text-4xl font-nitti">{definition && definition.meta.id}</p>
                    <p className="text-lg font-nitti">{definition && definition.fl}</p>
                    <p className="text-2xl font-guyot italic">{definition && definition.hwi.prs[0].mw}</p>
                    <p className="text-4xl font-spaceGrotesk">{definition && definition.shortdef[0]}</p>
                </div>
            }
        </>
    )
}

export default DictionaryDefinition;