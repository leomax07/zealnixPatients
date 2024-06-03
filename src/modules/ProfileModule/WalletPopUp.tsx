import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Text,
  Modal,
  Icons,
  Colors,
  Flex,
  Button,
  Image,
} from 'squashapps-react-native-uikit';

type Props = {
  open: boolean;
  close: () => void;
  submit: () => void;
};

const {SvgClose} = Icons;
const styles = StyleSheet.create({
  overAll: {
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 30,
  },
  inputMarignBottom: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 12,
  },
  saveBtn: {
    marginTop: 30,
  },
  images: {
    height: 193,
    width: 193,
    marginBottom: 32,
  },
});

const WalletPopUp = ({open, close, submit}: Props) => {
  return (
    <Modal isVisible={open}>
      <Flex overrideStyle={styles.overAll}>
        <Flex row center middle between overrideStyle={styles.title}>
          <Text align="center" type="heading500">
            Top up
          </Text>
          <Button onClick={close} type="link">
            <SvgClose />
          </Button>
        </Flex>
        <Flex center>
          <Image
            src="https://i.ibb.co/qyrn1Dp/Success.png"
            overrideStyle={styles.images}
            alt="Success"
          />
          <Flex row>
            <Text type="body300">Wallet Balance :</Text>
            <Text type="heading600" color="success">
              ₹1000
            </Text>
          </Flex>
          <Text>
            Your Top up of <Text type="heading600">₹1000</Text> was successful.
          </Text>
        </Flex>
        <Button onClick={submit} overrideStyle={styles.saveBtn}>
          Done
        </Button>
      </Flex>
    </Modal>
  );
};
export default WalletPopUp;
