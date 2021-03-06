import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../assests/css/case.css"

export default function Home() {
    const [cntr, setcntr] = useState([])
    const [totl, settotl] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://api.covid19api.com/summary`);
            console.log(res.data.Global);
            setcntr(res.data.Countries)
            settotl(res.data.Global)
            setloading(true)
        }

        getdata();
    });



    return (
        <>

            {loading ? (<div>

                <div class="row">
                    <div class="column">
                        <div class="card">
                            <h2>Total Confirmed</h2>
                            <h1>{totl.TotalConfirmed}</h1>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h2>Total NewConfirmed</h2>
                            <h1>{totl.NewConfirmed}</h1>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h2>Total Recovered</h2>
                            <h1>{totl.TotalRecovered}</h1>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <h2>Total Deaths</h2>
                            <h1>{totl.TotalDeaths}</h1>
                        </div>
                    </div>
                </div>

                <div className="case_data">

                    <table>
                        <thead>
                            <tr className="headert">
                                <td>
                                    <h3>Country</h3>

                                </td>
                                <td>
                                    <h3>Total Cases</h3>
                                </td>
                                <td>
                                    <h3>Recovered</h3>
                                </td>
                                <td>
                                    <h3>Death</h3>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {cntr.map((cntry) => (

                                <tr>
                                    <td>
                                        {cntry.Country}
                                    </td>
                                    <td>
                                        {cntry.TotalConfirmed}
                                    </td>
                                    <td>
                                        {cntry.TotalRecovered}
                                    </td>
                                    <td>
                                        {cntry.TotalDeaths}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>
            ) : (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>)}
        </>
    )
}
