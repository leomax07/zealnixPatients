import React from 'react';
import { Icons, Colors, Button } from 'squashapps-react-native-uikit';
import { textColors } from 'squashapps-react-native-uikit/Text';

const { SvgVideoCamera, SvgCrown, SvgHospital } = Icons;

type Props = {
  primary: string;
  textColor: textColors;
  type: string;
  gradient: string[];
  price: number;
  icon: JSX.Element;
  name: string;
};
const img = 'https://i.ibb.co/r2h1QZy/Vector-2.png';
export const doctorCategory = [
  {
    label: 'All Specialist',
    value: 'all',
  },
  {
    label: 'Andrologist',
    value: 'andrologist',
  },
  {
    label: 'Dentist',
    value: 'dental',
  },
  {
    label: 'Surgeon',
    value: 'surgeon',
  },
];

export const documentType: Props[] = [
  {
    name: 'Regular',
    type: 'regular',
    price: 0,
    primary: '#2781EE',
    textColor: 'theme',
    icon: <SvgHospital />,
    gradient: ['rgba(68, 187, 254, 1) ', 'rgba(30, 120, 254, 1)'],
  },
  {
    name: 'Emergency',
    type: 'emergency',
    price: 200,
    primary: '#FFB226',
    textColor: 'inprogress',
    icon: <SvgCrown />,
    gradient: ['rgba(255, 207, 83, 1)', 'rgba(255, 153, 0, 1)'],
  },
  {
    name: 'Video Call',
    type: 'video',
    price: 400,
    primary: '#6BBE5C',
    textColor: 'success',
    icon: <SvgVideoCamera height={10} width={20} fill={Colors.WHITE} />,
    gradient: ['rgba(144, 223, 117, 1)', 'rgba(98, 182, 85, 1)'],
  },
];
export const availableSolt = [
  {
    label: '09:00 AM',
    value: '9am',
  },
  {
    label: '10:00 AM',
    value: '10am',
  },
  {
    label: '11:00 AM',
    value: '11am',
  },
  {
    label: '12:00 PM',
    value: '12pm',
  },
  {
    label: '01:00 PM',
    value: '1pm',
  },
  {
    label: '02:00PM',
    value: '2pm',
  },
];

export const paymentScreen = [
  {
    title: {
      name: 'Saved Cards',
      value: <Button type="link">+Add New</Button>,
    },
    data: [
      {
        img,
        name: 'XXXX 9897',
        value: '52519897',
      },
      {
        img,
        name: 'XXXX 9896',
        value: '52519896',
      },
      {
        img,
        name: 'XXXX 9897',
        value: '52519897',
      },
      {
        img,
        name: 'XXXX 9896',
        value: '52519896',
      },
    ],
  },
  {
    title: {
      name: 'Wallets / UPI',
    },
    data: [
      {
        img,
        name: 'Google Pay',
        value: 'gpay',
      },

      {
        img,
        name: 'PhonePe',
        value: 'phonepe',
      },
      {
        img,
        name: 'paytm',
        value: 'paytm',
      },
      {
        img,
        value: 'wallet',
        name: 'Wallet Card',
      },
      {
        name: 'Enter UPI ID',
        value: 'upid',
      },
    ],
  },
];
export const cardType = [
  {
    img,
    name: 'XXXX 9897',
    value: '52519897',
  },
  {
    img,
    name: 'XXXX 9896',
    value: '52519896',
  },
];

export const doctorList = [
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Radiology',
    name: 'Yuvaraj',
    branch: 'Saidapet'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Gynecology',
    name: 'Anita',
    branch: 'Anna Nagar'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Dental',
    name: 'Ravi',
    branch: 'T Nagar'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Cardiology',
    name: 'Priya',
    branch: 'Velachery'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Neurology',
    name: 'Vijay',
    branch: 'Adyar'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Intensive Care',
    name: 'Karthik',
    branch: 'Mylapore'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Surgery',
    name: 'Meena',
    branch: 'Royapettah'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Pharmacy',
    name: 'Arun',
    branch: 'Alwarpet'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Orthopedics',
    name: 'Suresh',
    branch: 'Kodambakkam'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Emergency',
    name: 'Lakshmi',
    branch: 'Vadapalani'
  },
  {
    profileImageUrl: 'https://i.ibb.co/54nsKgR/doctor.webp',
    department: 'Pediatrics',
    name: 'Rajesh',
    branch: 'Tambaram'
  }
];
