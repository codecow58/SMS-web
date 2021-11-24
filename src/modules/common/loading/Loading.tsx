import * as React from 'react';
import { Stack } from '@fluentui/react';
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";


const Loading: React.FunctionComponent = () => {

    return (
      <Stack horizontalAlign="center" verticalAlign="center">
        <Spinner size={SpinnerSize.large} />
      </Stack>
    );
}

export default Loading;