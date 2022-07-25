import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Navbar/navbar.component';
import News from '../../components/news/news.component';
import NavProvider from '../../provider/navbar/navbar.provider';
import fetchNews from '../../utils/fetchNews';

const HomePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [isError, setIsError ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNews();
                setResults(data.articles);
                setLoading(false);
            } catch (error) {
                setIsError(true);
            }
            
        };

        fetchData();
    }, [])

    return (
        <>  
            <NavProvider>
                <NavBar />
                <h1 className="text-5xl uppercase font-extrabold top-20 relative text-center mb-4">Latest News</h1>
            </NavProvider>
                { isError && <div className='top-20 relative'>Something went wrong</div> }
                { isLoading ? <div className='top-20 relative'>Loading</div>  : 
                    <News results={results} />
                }
            
        </>
    )    
};

export default HomePage;