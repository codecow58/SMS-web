import * as React from 'react';
import { Image, IImageProps } from "@fluentui/react/lib/Image";
import { Form, Field } from "react-final-form";
import { PrimaryButton, IIconProps, TextField, Stack } from "@fluentui/react";
import Layout from '../common/layout';
import { useUserContext } from '../../context/auth/userContext';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase';
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import Loading from '../common/loading';
import { useNavigate } from 'react-router-dom';


const required = (value: any) => (value ? undefined : "Required");
const loginIcon: IIconProps = { iconName: "CloudUpload" };


const ProfileSettings = () => {

  const {user} = useUserContext();

  const navigate = useNavigate();

  const [loading ,setLoading] = React.useState(false);

  console.log(user)
  const [imageSRC, setImageSRC] = React.useState(user.photoURL);

    const imageProps: Partial<IImageProps> = {
      src: imageSRC,
      // Show a border around the image (just for demonstration purposes)
      styles: (props) => ({
        root: { border: "1px solid " + props.theme.palette.neutralSecondary },
      }),
    };

    const onSubmit = ({ profileName }: any) => {
      console.log(profileName);
      updateProfile(auth.currentUser as any, {
        displayName: profileName,
        photoURL:imageSRC,
      })
        .then(() => {
          alert("Updated");
          navigate('/profile-settings');
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };

    return (
      <Layout>
        <Stack horizontalAlign="center">
          {loading && <Loading />}
          <h5
            style={{
              fontFamily: "Segoe UI",
            }}
          >
            Profile Settings
          </h5>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="profileName"
                  validate={required}
                  defaultValue={user.displayName}
                >
                  {({ input, meta }) => {
                    return (
                      <div>
                        <TextField
                          label="Profile Name"
                          {...input}
                          errorMessage={
                            meta.error && meta.touched && meta.error
                          }
                        />
                      </div>
                    );
                  }}
                </Field>
                <br />
                <TextField
                  label="Upload Profile Picture"
                  type="file"
                  onChange={(e: any) => {
                    setLoading(true);
                    const file = e.target.files[0];
                    console.log(file);

                    // setImageSRC(file);
                    const userID = user.uid;
                    const path = `images/${userID}/profile-pictures/${file.name}`;
                    const storageImageRef = ref(storage, path);

                    uploadBytes(storageImageRef, file).then((snapshot) => {
                      setLoading(true);

                      console.log(snapshot);
                      getDownloadURL(storageImageRef)
                        .then((url) => {
                          // Insert url into an <img> tag to "download"
                          console.log(url);
                          setImageSRC(url);
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                        .finally(() => setLoading(false));
                    });
                  }}
                  style={{ padding: 5 }}
                />
                <br />
                <Image
                  {...imageProps}
                  alt="View updated profile picture"
                  width={100}
                  height={100}
                />
                <br />
                <PrimaryButton
                  text="Update"
                  type="submit"
                  iconProps={loginIcon}
                />
              </form>
            )}
          />
        </Stack>
      </Layout>
    );
}

export default ProfileSettings;