
const creditType = 'credit';
const debitType = 'debit';
export const transactionList = [
  {
    title: 'Pharmacy',
    type: creditType,
    id: '23232323232322',
    time: '4 Aug 1:00 PM',
    amount: '₹4.20',
  },
  {
    title: 'Appointment Booking',
    type: debitType,
    id: '23232323232323',
    time: '4 Aug 1:01 PM',
    amount: '₹4.21',
  },
  {
    title: 'Topup',
    type: creditType,
    id: '23232323232323',
    time: '4 Aug 1:02 PM',
    amount: '₹4.22',
  },
  {
    title: 'Pharmacy',
    type: creditType,
    id: '23232323232323',
    time: '4 Aug 1:03 PM',
    amount: '₹4.23',
  },
];
export const paymentAmount = [
  {label: '+ ₹ 100', value: '₹ 100'},
  {label: '+ ₹ 1000', value: '₹ 1000'},
  {label: '+ ₹ 2000', value: '₹ 2000'},
  {label: '+ ₹ 5000', value: '₹ 5000'},
  {label: '+ ₹ 10000', value: '₹ 10000'},
];

export const orderList = [
  {
    id: '23222323',
    item: [
      {
        name: 'Sun Pharma',
        strip: '1',
        tablet: '10 tablets',
      },
      {
        name: 'Sun Pharma1',
        strip: '2',
        tablet: '11 tablets',
      },
    ],
    date: '13 Feb 2022',
    location: 'Coimbatore',
    inTransit: true,
    price: ' ₹4.20',
    deliveryDate: '12 March 2022',
    payment: 'Paid',
    delivery: 'inprogress',
  },
  {
    id: '23222322',
    item: [
      {
        name: 'Sun Pharma2',
        strip: '3',
        tablet: '30 tablets',
      },
      {
        name: 'Sun Pharm',
        strip: '4',
        tablet: '1 tablets',
      },
    ],
    date: '23 Feb 2022',
    location: 'coimbatore',
    inTransit: false,
    price: ' ₹5.20',
    deliveryDate: '22 March 2022',
    payment: 'Pending',
    delivery: 'Canceled',
  },
  {
    id: '23222324',
    item: [
      {
        name: 'Sun Pharma3',
        strip: '5',
        tablet: '40 tablets',
      },
      {
        name: 'Sun Pharm3',
        strip: '6',
        tablet: '13 tablets',
      },
    ],
    date: '25 Feb 2022',
    location: 'CoimBatore',
    inTransit: false,
    price: ' ₹6.20',
    deliveryDate: '27 March 2022',
    payment: 'Refunded',
    delivery: 'Canceled',
  },
];
export const orderStatus = [
  {
    label: 'Delivered',
    value: 'delivered',
  },
  {
    label: 'In Transit',
    value: 'inTransit',
  },
  {
    label: 'Canceled',
    value: 'canceled',
  },
];
