import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/navbar.component';
import News from '../../components/news/news.component';
import NavProvider from '../../provider/navbar/navbar.provider';
import fetchNews from '../../utils/fetchNews';

const HomePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNews();
            setResults(data.articles);
            setLoading(false);
        };

        fetchData();
    }, [])

    console.log(results);
    console.log(isLoading);
    return (
        <>  
            <NavProvider>
                <NavBar />
            </NavProvider>
                { isLoading ?
                  <div className='top-20 relative'>Loading</div>  : results &&
                    <News results={results} />
                }
            
        </>
    )    
};

export default HomePage;