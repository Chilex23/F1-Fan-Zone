import React, { createContext, useState, useEffect } from "react";
import fetchDriversStand from "../../utils/fetchDriversStandings";

export const DriverStandContext = createContext(null);

const DriverStandProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDriversStand();
                setResults(data);
                setLoading(false);
                console.log(data)
              
            } catch (error) {
                console.log(error);
                setLoading(false);
                setError(true);
            }
            
        };
        fetchData();
    }, []);
    console.log(results)
    return (
        <DriverStandContext.Provider value={{
            loading,
            results,
            error
        }}>
            { children }
        </DriverStandContext.Provider>
    )
}

export default DriverStandProvider;