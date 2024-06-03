import {FormikHelpers, useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {
  Button,
  Flex,
  InputText,
  Text,
  validators,
  SelectTag,
  Loader,
  Toast,
  Colors,
  helpers,
} from 'squashapps-react-native-uikit';
import {useDispatch, useSelector} from 'react-redux';
import CustomStatusBar from '../../common/CustomStatusBar';
import {useVisibilityIcon} from '../../utils/helpers';
import {useLanguage} from '../../utils/useLanguage';
import {AuthScreenNavigationProp} from '../../navigation/types';
import {AppDispatch, RootState} from '../../redux/store';
import {branchListMiddleWare, signupMiddleWare} from './store/loginMiddleWare';
import {genderOptions} from './mock';
import DatePicker from 'react-native-date-picker';
import {TouchableOpacity} from 'react-native';
import SvgCalender from '../../icons/SvgCalender';

const loginMask = require('../../assets/images/loginBackground.png');

const {isEmpty, isValidEmail} = validators;
const {getDateString} = helpers;

const {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  INVALID_EMAIL_ENTERED,
  PHONE_REQUIRED,
  CONFIRM_PASSWORD,
  BRANCH_REQUIRED,
  NAME_REQUIRED,
  PASSWORD_LENGTH,
  AGE_REQUIRED,
  GENDER_REQUIRED,
} = useLanguage;

const styles = StyleSheet.create({
  overAll: {
    paddingHorizontal: 30,
    zIndex: 99,
  },
  welcomeText: {
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 24,
    zIndex: 88,
  },
  btnStyle: {
    marginTop: 30,
    marginBottom: 40,
  },
  passwordInput: {
    marginTop: 24,
  },
  bottomTextContainer: {
    paddingHorizontal: 40,
    marginTop: 60,
    marginBottom: 60,
  },
  btnRegister: {
    marginLeft: 4,
  },
  imgContainer: {
    marginTop: 20,
    marginBottom: 32,
  },
  socialContainer: {
    marginTop: 20,
  },
  googleImg: {
    marginRight: 28,
  },
});

export type signupformType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmpassword: string;
  branch: string;
  gender: string;
  age: string;
};

interface SignUpScreenProps {
  navigation: AuthScreenNavigationProp;
}

const initialValues: signupformType = {
  name: '',
  email: '',
  password: '',
  phone: '',
  confirmpassword: '',
  branch: '',
  gender: '',
  age: '',
};

const validate = (values: signupformType) => {
  const errors: Partial<signupformType> = {};
  if (isEmpty(values.email)) {
    errors.email = EMAIL_REQUIRED;
  } else if (!isValidEmail(values.email)) {
    errors.email = INVALID_EMAIL_ENTERED;
  }
  if (isEmpty(values.name)) {
    errors.name = NAME_REQUIRED;
  }
  if (isEmpty(values.gender)) {
    errors.gender = GENDER_REQUIRED;
  }
  if (isEmpty(values.age)) {
    errors.age = AGE_REQUIRED;
  }
  if (isEmpty(values.phone)) {
    errors.phone = PHONE_REQUIRED;
  }
  if (isEmpty(values.password)) {
    errors.password = PASSWORD_REQUIRED;
  } else if (values.password.length <= 8) {
    errors.password = PASSWORD_LENGTH;
  }
  if (isEmpty(values.confirmpassword)) {
    errors.confirmpassword = PASSWORD_REQUIRED;
  } else if (values.password !== values.confirmpassword) {
    errors.confirmpassword = CONFIRM_PASSWORD;
  }
  if (isEmpty(values.branch)) {
    errors.branch = BRANCH_REQUIRED;
  }
  return errors;
};

const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const {width} = useSafeAreaFrame();
  const dispatch: AppDispatch = useDispatch();
  const {isVisible, visibleIcon} = useVisibilityIcon();
  const [isDateOpen, setDateOpen] = useState(false);

  const handleSubmit = (
    value: signupformType,
    formikHelper: FormikHelpers<any>,
  ) => {
    dispatch(
      signupMiddleWare({
        email: value.email,
        password: value.password,
        phone: value.phone,
        name: value.name,
        branchId: value.branch,
        hospitalId: '6450eab2c9980f24b5af7d7b',
        isMobileAppLoginEnabled: true,
        status: 'out_patient',
        dateOfBirth: value.age,
        gender: value.gender,
      }),
    ).then(res => {
      if (res.payload?.id) {
        formikHelper.resetForm;
        Toast.success({message: 'Sign up Successful', position: 'TOP'});
        navigation.navigate('LoginScreen');
      }
    });
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  useEffect(() => {
    dispatch(branchListMiddleWare({hospitalId: '6450eab2c9980f24b5af7d7b'}));
  }, []);

  const {branch, isLoading} = useSelector(({branchReducers}: RootState) => {
    return {
      branch: branchReducers.branch,
      isLoading: branchReducers.isLoading,
    };
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView bounces={false}>
      <ImageBackground style={{width}} source={loginMask}>
        <Flex overrideStyle={styles.overAll}>
          <CustomStatusBar />
          <Text overrideStyle={styles.welcomeText} type="heading700">
            Register
          </Text>
          <Text color="gray">
            More than 100+ specialist doctors are ready to serve you.
          </Text>
          <Flex overrideStyle={styles.inputContainer}>
            <InputText
              value={formik.values.name}
              onChange={formik.handleChange('name')}
              label="Name"
              placeholder="Enter your name"
              autoCapitalize="none"
              name="name"
              formikTouched={formik.touched}
              formikErrors={formik.errors}
              error={formik.touched.name && formik.errors.name}
            />
            <View style={styles.passwordInput}>
              <InputText
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                label="Email"
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.email && formik.errors.email}
              />
            </View>

            <View style={styles.passwordInput}>
              <InputText
                value={formik.values.phone}
                onChange={formik.handleChange('phone')}
                label="Phone"
                maxLength={10}
                placeholder="Enter your phone Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                name="phone"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.phone && formik.errors.phone}
              />
            </View>
            <View style={styles.passwordInput}>
              <InputText
                label="Password"
                placeholder="Enter your email password"
                actionRight={visibleIcon}
                secureTextEntry={!isVisible}
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                name="password"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.password && formik.errors.password}
              />
            </View>
            <View style={styles.passwordInput}>
              <InputText
                label="Confirm Password"
                placeholder="Enter your password again"
                actionRight={visibleIcon}
                secureTextEntry={!isVisible}
                value={formik.values.confirmpassword}
                onChange={formik.handleChange('confirmpassword')}
                name="confirmpassword"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={
                  formik.touched.confirmpassword &&
                  formik.errors.confirmpassword
                }
              />
            </View>
            <View style={[styles.passwordInput, {zIndex: 23}]}>
              <SelectTag
                outline={false}
                overrideStyle={{
                  backgroundColor: Colors.GREY_10,
                }}
                options={branch}
                labelKey="name"
                valueKey="id"
                name="branch"
                value={formik.values.branch}
                onChange={formik.handleChange('branch')}
                label="Branch"
                placeholder="Select Branch"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.branch && formik.errors.branch}
              />
            </View>
            <View style={[styles.passwordInput, {zIndex: 22}]}>
              <SelectTag
                name="gender"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.gender && formik.errors.gender}
                outline={false}
                overrideStyle={{
                  backgroundColor: Colors.GREY_10,
                }}
                options={genderOptions}
                value={formik.values.gender}
                onChange={formik.handleChange('gender')}
                placeholder="Select Gender"
                label="Gender"
              />
            </View>
            <View style={[styles.passwordInput]}>
              <InputText
                overrideStyle={{backgroundColor: Colors.GREY_10}}
                disabled
                label="Date of Birth"
                value={
                  formik.values.age
                    ? getDateString(formik.values.age, 'DD-MM-YYYY')
                    : ''
                }
                placeholder="Select DOB"
                name="age"
                formikTouched={formik.touched}
                formikErrors={formik.errors}
                error={formik.touched.age && formik.errors.age}
                actionRight={() => (
                  <Button
                    type="link"
                    onClick={() => {
                      setDateOpen(true);
                    }}>
                    <SvgCalender fill={'#070C18'} />
                  </Button>
                )}
              />
              <DatePicker
                title="Select DOB"
                modal
                mode="date"
                maximumDate={new Date()}
                open={isDateOpen}
                date={formik.values.age ? formik.values.age : new Date()}
                onConfirm={date => {
                  setDateOpen(false);
                  formik.setFieldValue('age', date);
                }}
                onCancel={() => {
                  setDateOpen(false);
                }}
              />
            </View>
          </Flex>
          <Button onClick={formik.handleSubmit} overrideStyle={styles.btnStyle}>
            Create Account
          </Button>
          {/* <Flex center overrideStyle={styles.socialContainer}>
            <Text color="gray">Login with account</Text>
            <Flex row between overrideStyle={styles.imgContainer}>
              <Image
                overrideStyle={styles.googleImg}
                height={25}
                width={25}
                src="https://i.ibb.co/vQjgw4P/google-icon-logo-svgrepo-com-1.png"
              />

              <Image
                height={25}
                width={25}
                src="https://i.ibb.co/m4CBbbm/Vector.png"
              />
            </Flex>
          </Flex> */}
          <Flex row middle center overrideStyle={styles.bottomTextContainer}>
            <Text>Already have an account?</Text>
            <Button
              type="link"
              overrideStyle={styles.btnRegister}
              onClick={handleLogin}>
              Login
            </Button>
          </Flex>
        </Flex>
      </ImageBackground>
    </ScrollView>
  );
};

export default SignUpScreen;
