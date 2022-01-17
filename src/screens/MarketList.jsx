import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PageHeader from '../components/PageHeader';


const MarketList = () => {

    // const [password, setPassword] = useState({}) 
    // const [marketList, setMarketList] = useState({});

    useEffect(() => {


        //
        // fetch('https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US', {
        //     method: 'Get', 
        //     headers: {
        //         'X-API-KEY': '9ToYdJcBJS8mb3uOGGCNw5q7OBoRG1lCsAuwh706',
        //         'Content-Type': 'application/json'
        //     },
        // })
        // .then(response => response.json())
        // .then(data => {
        //     const items = data.marketSummaryResponse.result
        //     // console.log(data);
        //     items.map((item , i) => {
        //         console.log(item);
        //     })
        //     // return item
        // } )
        // .catch(error => console.error(error));

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data.map((elm, i) => {
            
            console.log(elm);
        }));

    });
    
    // if( ! getCurrentUser() ) return <Redirect to="/"/>
    
    return (
    
        <div className="market-list">
            
            <PageHeader>Market List Page</PageHeader>

            <form
                // className=""
                // onSubmit={ (e) =>  {
                //     e.preventDefault()
                                       
                // }}
                // autoComplete="off" noValidate
            >
            <label>Choose lang</label>
            <select name="" id="">
                <option value="en">en</option>
                <option value="fr">fr</option>
                <option value="de">de</option>
                <option value="it">it</option>
                <option value="es">es</option>
                <option value="zh">zh</option>
            </select>
            
            <label>Choose ragion</label>
            <select name="" id="">
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

            {/* <button className="submit" type="submit" disabled={password.isValid && email.isValid ? false : true }>Sign In</button> */}

            </form>

            <table className="customers">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>ddd</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MarketList
