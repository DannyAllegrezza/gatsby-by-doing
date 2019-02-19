import React from "react"
import Header from '../components/header';
import Layout from '../components/layout';

export default ({ pageContext: { allCars } }) => {
    //console.log(allCars);

    return (
        <Layout>
            <div>
                <Header headerText="A bunch of cars" />
                {allCars.map((car, index) => (
                    <li key={index}>
                        {car.name} {car.model}
                    </li>
                ))}
            </div>
        </Layout>
    )
}