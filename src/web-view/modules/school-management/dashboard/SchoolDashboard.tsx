import * as React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../common/layout';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const {id} = useParams()

    return <Layout>School dashboard - {id}</Layout>;
}