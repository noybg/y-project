import React, {useState, useEffect} from 'react'
import PageHeader from '../components/PageHeader';
import MarketTable from '../components/MarketTable';
import { Redirect } from 'react-router-dom'

const MarketList = () => {

    const [lang, setLang] = useState('en');
    const [ragion, setRagion] = useState('US');
    const [marketListA, setMarketListA] = useState([]);
    const [marketList, setMarketList] = useState([]);

    const regionHandler = (e) => {
        setRagion(e.target.value)
    }
    const langHandler = (e) => {
        setLang(e.target.value)
    }

    useEffect(() => {

        fetch(`https://yfapi.net/v6/finance/quote/marketSummary?lang=${lang}&region=${ragion}`, {
            method: 'Get', 
            headers: {
                'X-API-KEY': 'a9Lpaks1B9aZGMgGLnUIA2C6NuhgKRsR8JcHNO6r',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            
            if ( data.message !== 'Limit Exceeded') {
                const items = data.marketSummaryResponse.result;
                // console.log(items);
                setMarketListA([items])
                // items.map( item => {
                //     (setMarketList([
                //         ...marketList,
                //         {
                //             exchange: item.exchange,
                //             exchangeTimezoneName: item.exchangeTimezoneName,
                //             language: item.language,
                //             market: item.market,
                //             marketState: item.marketState
                //         }
                //     ]))
                // });
            }
            
        } )
        .catch(error => console.error(error));

    }, [lang , ragion] );
    
    if( ! localStorage.getItem('token') ) return <Redirect to="/"/>
    console.log(marketListA);
    return (

        <div className="market-list">
            
            <PageHeader>Market List Page</PageHeader>

            <div className="selectors">
                <div className="selector">
                <label>Choose lang:</label>
                <select name="" onChange={langHandler} id="">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                    <option value="de">de</option>
                    <option value="it">it</option>
                    <option value="es">es</option>
                    <option value="zh">zh</option>
                </select>
                </div>
                
                <div className="selector">
                <label>Choose ragion:</label> 
                <select name="" onChange={regionHandler} id="">
                    <option value="US">US</option>
                    <option value="AU">AU</option>
                    <option value="CA">CA</option>
                    <option value="FR">FR</option>
                    <option value="DE">DE</option>
                    <option value="HK">HK</option>
                    <option value="IT">IT</option>
                    <option value="ES">ES</option>
                    <option value="GB">GB</option>
                    <option value="IN">IN</option>
                </select>
                </div>
            </div>

            <div className="contain-table">
            <table className="customers">
                <thead>
                        <tr>
                            <th>Exchange</th>
                            <th>Exchange Timezone Name</th>
                            <th>Language</th>
                            <th>Market</th>
                            <th>Market State</th>
                        </tr>
                </thead>
                {
                    // marketList.map( (m, i) => (
                        <MarketTable
                            // key={i}
                            // exchange={m.exchange}
                            // exchangeTimezoneName={m.exchangeTimezoneName}
                            // language={m.language}
                            // market={m.market}
                            // marketState={m.marketState}
                        />
                    // ) )
                }
                
            </table>
            </div>


        </div>
    )
}

export default MarketList
