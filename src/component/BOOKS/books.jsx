import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppContext";

function Books() {

    const { setLoading } = useContext(AppContext);
    const [booksData, setBooksData] = useState([]);
    const [search, setSearch] = useState('');
    const API_ENDPOINT_URL = 'https://openlibrary.org/search.json';

    const handleSearch = function (event) {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (search.trim().length) {
                    setLoading(true);
                    let API = API_ENDPOINT_URL + '?title=' + search;
                    const response = await fetch(API);
                    if (!response.ok) {
                        return;
                    }
                    const result = await response.json();
                    setBooksData(result);
                }
            } catch (e) {
                console.error("error:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [search]);
    return (
        <div>
            <input type='text' className="form-control" value={search} onChange={handleSearch} />
            <div className="list-group">
                {booksData && booksData.docs && booksData.docs.map((item, index) => {
                    return (
                        <div className="list-group-item" key={index}>
                            {item.title}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Books;