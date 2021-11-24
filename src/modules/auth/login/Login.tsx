import * as React from 'react';
import { Form, Field } from "react-final-form";
import { PrimaryButton, IIconProps } from "@fluentui/react";
import { TextField } from "@fluentui/react/lib/TextField";
import Home from '../../home';
import { useUserContext } from '../../../context/auth/userContext';
import Loading from '../../common/loading';




const required = (value: any) => (value ? undefined : "Required");
const loginIcon: IIconProps = { iconName: "Unlock" };
const userIconProps = { iconName: "Mail" };


const LoginWrapper = () => {
    const { loading, loginUser , error} = useUserContext(); 

    const onSubmit = ({ email, password }: any) => {
      console.log(email, password);
      loginUser(email,password);
    };


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#edebe9",
      }}
    >
      {loading&& <Loading/>}
      <h3
        style={{
          fontFamily: "Segoe UI",
        }}
      >
        School Management Software
      </h3>

      <div>
        {error && <p>{error}</p>}
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
                        errorMessage={meta.error && meta.touched && meta.error}
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
              ;
            </form>
          )}
        />
      </div>
    </div>
  );
}
 

const Login: React.FunctionComponent = () => {
  const {user} = useUserContext(); 
  if(user){
    return <Home/>
  }else {
    return <LoginWrapper/>
  }
};

export default Login;
