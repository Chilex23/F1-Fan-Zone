import React, { useEffect, useState } from 'react';

import News from '../../components/news/news.component';
import ScheduleWrapper from '../../components/schedule/schedule-wrapper.component';
import StandingsWrapper from '../../components/standings-wrapper/standings-wrapper';
import Footer from '../../components/footer/footer';

import fetchNews from '../../utils/fetchNews';
import { TailSpin } from "react-loader-spinner";


const HomePage = () => {
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const [isError, setIsError ] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNews();
            if (data.data.value) setResults(data.data.value);
            else setIsError(true);
            setLoading(false);
        };

        fetchData();
    }, [])
    // console.log(results);

    return (
        <>  
            <h1 className="text-4xl homePhone:text-5xl uppercase font-extrabold top-20 relative text-center mb-8 mt-3">Latest News</h1>

            { isLoading ? <div className='h-56 top-20 relative mb-40 flex items-center justify-center'>
                    <TailSpin color="#b90202" height={80} width={80} />
                </div>  : 
                isError ? <div className='h-56 top-20 relative mb-40 flex items-center justify-center'>
                    Something went wrong
                </div>  :
                <News results={results} />
            }
            <ScheduleWrapper />
            <StandingsWrapper />
            <Footer />
        </>
    )    
};

export default HomePage;