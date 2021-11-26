import {  PrimaryButton, Stack } from '@fluentui/react';
import * as React from 'react';
import Layout from '../../common/layout';


const Staff: React.FunctionComponent = () => {
    return (
        <Layout>
            Staff
            <Stack horizontalAlign='end'>
                <PrimaryButton text='Create Staff' iconProps={{iconName:'Add'}}/>
            </Stack>
        </Layout>
    )
}

export default Staff;