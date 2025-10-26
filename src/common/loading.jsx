import { useContext } from "react";
import { AppContext } from "../AppContext";

function Loading() {
    const { loading } = useContext(AppContext);

    return (
        <div>
            {loading &&
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
        </div>
    );
}

export default Loading;