import {useEffect, useState} from "react";

const useFetch = (asyncFn, arrayDep = null) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await asyncFn(arrayDep);
                setData(data);
                // console.log(data);
            } catch (error) {
                console.log(error);
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [asyncFn, arrayDep]);

    return [loading, data, error];
};

export default useFetch;