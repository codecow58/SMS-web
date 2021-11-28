import * as React from 'react';
import { Stack } from '@fluentui/react';
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";


const Loading: React.FunctionComponent = () => {

    return (
      <Stack horizontalAlign="center">
        <Spinner
          size={SpinnerSize.large}
          styles={{
            root: {
              position: "fixed",
              zIndex: 999,
              margin: "auto",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgb(50, 49, 48)",
              opacity: 0.8,
            },
          }}
        />
      </Stack>
    );
}

export default Loading;