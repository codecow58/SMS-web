import * as React from 'react';
import { Form, Field } from "react-final-form";
import {
  PrimaryButton,
  IIconProps,
  MessageBar,
  MessageBarType,
  Stack,
  Image,
  Link
} from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import { useUserContext } from '../../../../context/auth/userContext';
import Loading from '../../common/loading';

import { Dashboard } from '../../schools-management';
import backgroundImage from '../../../../assets/images/bg-image.svg'
import { useSignInWithEmailAndPassword } from '../../../../hooks/auth';
import { auth } from '../../../../firebase';

const required = (value: any) => (value ? undefined : "Required");
const loginIcon: IIconProps = { iconName: "Unlock" };
const userIconProps = {
  iconName: "Mail",
  styles: { root: { color: "#8a00d4" } },
};

const columnProps = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 500 } },
};


const columnProps1 = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};

const LoginWrapper = () => {
    const { loading, loggedInUser ,signInWithEmailAndPassword} = useSignInWithEmailAndPassword(auth);
    const [showMessageBar , setShowMessageBar] = React.useState(false);
    const [error, setError] = React.useState("")

    const onSubmit = ({ email, password }: any) => {
      signInWithEmailAndPassword(email, password,setError);
      console.log(loggedInUser);
    };

    const closeMessageBar = ()=> setShowMessageBar(false);

    React.useEffect(()=>{
      if(error){
        setShowMessageBar(true)
      }
    },[error])

  return (
    <Stack
      horizontal
      horizontalAlign="center"
      verticalAlign="center"
      styles={{ root: { minHeight: "100vh" } }}
      wrap={true}
    >
      <Stack {...columnProps}>
        <Image src={backgroundImage} />
      </Stack>
      <Stack {...columnProps1}>
        {loading && <Loading />}
        <h3>School Management Software</h3>

        <div>
          {showMessageBar && (
            <MessageBar
              messageBarType={MessageBarType.error}
              isMultiline={false}
              onDismiss={() => closeMessageBar()}
              dismissButtonAriaLabel="Close"
            >
              {error}
            </MessageBar>
          )}
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email" validate={required}>
                  {({ input, meta }) => {
                    return (
                      <div>
                        <TextField
                          label="Email"
                          iconProps={userIconProps}
                          {...input}
                          errorMessage={
                            meta.error && meta.touched && meta.error
                          }
                        />
                      </div>
                    );
                  }}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <TextField
                        label="Password"
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        {...input}
                        errorMessage={meta.error && meta.touched && meta.error}
                      />
                    </div>
                  )}
                </Field>
                <br />
                <PrimaryButton
                  text=" Log In "
                  type="submit"
                  iconProps={loginIcon}
                />
              </form>
            )}
          />
        </div>
        <Link href="https://storyset.com/business">
          Business illustrations by Storyset
        </Link>
      </Stack>
    </Stack>
  );
}
 

const Login: React.FunctionComponent = () => {
  const {user} = useUserContext(); 
  if(user){
    return <Dashboard/>
  }else {
    return <LoginWrapper/>
  }
};

export default Login;
