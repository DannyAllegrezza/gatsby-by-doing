import React from "react";
import Layout from '../components/layout';
import Header from '../components/header';

export default () => (
    <Layout>
        <Header>Hello world</Header>
        <h1>Hello from index.js</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
)