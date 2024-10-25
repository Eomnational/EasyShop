import React from 'react';
import { useSelector } from 'react-redux'; // 从 react-redux 导入 useSelector
import Layout from './Layout';

const Home = () => {
    const state = useSelector((state) => state); // 获取 Redux 状态，确保访问正确

    return (
        <Layout>
            Home {JSON.stringify(state)}
        </Layout>
    );
}

export default Home;


