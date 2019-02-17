import React from "react"
import Header from '../components/header';
import Layout from '../components/layout';

export default ({ pageContext: { allCars } }) => (
    <Layout>
        <div>
            <Header headerText="A bunch of cars" />
            {allCars.map(car => (
                <li key={car.id}>
                    {car.name} {car.model}
                </li>
            ))}
        </div>
    </Layout>
)