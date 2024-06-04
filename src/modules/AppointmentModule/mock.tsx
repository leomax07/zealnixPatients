const brand = 'Sun Pharma';
const availableQuantity = 10;
export const tabletList = [
  {
    id: 1,
    name: 'Losartan 200MG CAP',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/G9GgrCX/Rectangle-3318.png',
  },
  {
    id: 2,
    name: 'Phentermine 100MG CAP',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/3kYpKHS/Rectangle-3318-1.png',
  },
  {
    id: 3,
    name: 'Buspirone 300MG TAB',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/2YRh8Nw/Rectangle-3318-2.png',
  },
  {
    id: 4,
    name: 'Temazepam 50MG TAB',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/tMHNhbt/Rectangle-3318-3.png',
  },
  {
    id: 5,
    name: 'Meclizine 300MG TAB',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/0rV2y3b/Rectangle-3318-4.png',
  },
  {
    id: 6,
    name: 'Vardenafil 50MG CAP',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/x7F47qn/Rectangle-3318-6.png',
  },
  {
    id: 7,
    name: 'Eszopiclone 200MG CAP',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/6Xc8HH5/Rectangle-3318-7.png',
  },
];
export const sampleTablet = [
  {
    id: 1,
    name: 'Losartan 200MG CAP1',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/G9GgrCX/Rectangle-3318.png',
  },
  {
    id: 2,
    name: 'Phentermine 100MG CAP1',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/3kYpKHS/Rectangle-3318-1.png',
  },
  {
    id: 3,
    name: 'Buspirone 300MG TAB1',
    brand,
    availableQuantity,
    img: 'https://i.ibb.co/2YRh8Nw/Rectangle-3318-2.png',
  },
];
export const appointMentList = [
  {
    title: 'Yesterday , March 27 2022',
    data: [{}, {}, {}, {}, {}, {}, {}],
  },
  {
    title: 'March 26, 2022',
    data: [{}, {}, {}],
  },
];
export const appointmentType = [
  {label: 'At Hospital', value: 'regular'},
  {label: 'Video', value: 'regular'},
];

export const mockAppointments = [
  {
    id: '1',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. John Doe',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '09:00',
    appointmentEnd: '10:00',
    appointmentSchedule: {
      appointmentRangeStart: 162000,
      appointmentRangeEnd: 165600,
    },
  },
  {
    id: '2',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Jane Smith',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '11:00',
    appointmentEnd: '11:30',
    appointmentSchedule: {
      appointmentRangeStart: 39600,
      appointmentRangeEnd: 41400,
    },
  },
  {
    id: '3',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Alice Brown',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '14:00',
    appointmentEnd: '14:45',
    appointmentSchedule: {
      appointmentRangeStart: 50400,
      appointmentRangeEnd: 53100,
    },
  },
  {
    id: '4',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. David Wilson',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '08:30',
    appointmentEnd: '09:15',
    appointmentSchedule: {
      appointmentRangeStart: 30600,
      appointmentRangeEnd: 33300,
    },
  },
  {
    id: '5',
    type: 'video',
    status: 'cancelled',
    doctor: {
      name: 'Dr. Emily Davis',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '15:00',
    appointmentEnd: '15:30',
    appointmentSchedule: {
      appointmentRangeStart: 54000,
      appointmentRangeEnd: 55800,
    },
  },
  {
    id: '6',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Michael Johnson',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '16:00',
    appointmentEnd: '16:45',
    appointmentSchedule: {
      appointmentRangeStart: 57600,
      appointmentRangeEnd: 60300,
    },
  },
  {
    id: '7',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. Daniel Garcia',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '10:00',
    appointmentEnd: '10:30',
    appointmentSchedule: {
      appointmentRangeStart: 36000,
      appointmentRangeEnd: 37800,
    },
  },
  {
    id: '8',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Sarah Lee',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '12:00',
    appointmentEnd: '12:45',
    appointmentSchedule: {
      appointmentRangeStart: 43200,
      appointmentRangeEnd: 45900,
    },
  },
  {
    id: '9',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Christopher Martinez',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '13:00',
    appointmentEnd: '13:30',
    appointmentSchedule: {
      appointmentRangeStart: 46800,
      appointmentRangeEnd: 48600,
    },
  },
  {
    id: '10',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. Patricia Clark',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '17:00',
    appointmentEnd: '17:30',
    appointmentSchedule: {
      appointmentRangeStart: 61200,
      appointmentRangeEnd: 63000,
    },
  },
  {
    id: '11',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Thomas Wright',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '18:00',
    appointmentEnd: '18:45',
    appointmentSchedule: {
      appointmentRangeStart: 64800,
      appointmentRangeEnd: 67500,
    },
  },
  {
    id: '12',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Elizabeth Walker',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '19:00',
    appointmentEnd: '19:30',
    appointmentSchedule: {
      appointmentRangeStart: 68400,
      appointmentRangeEnd: 70200,
    },
  },
  {
    id: '13',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. Anthony Hill',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '20:00',
    appointmentEnd: '20:30',
    appointmentSchedule: {
      appointmentRangeStart: 72000,
      appointmentRangeEnd: 73800,
    },
  },
  {
    id: '14',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Nancy Green',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '21:00',
    appointmentEnd: '21:30',
    appointmentSchedule: {
      appointmentRangeStart: 75600,
      appointmentRangeEnd: 77400,
    },
  },
  {
    id: '15',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Andrew Young',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '22:00',
    appointmentEnd: '22:45',
    appointmentSchedule: {
      appointmentRangeStart: 79200,
      appointmentRangeEnd: 81900,
    },
  },
  {
    id: '16',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. Angela Hernandez',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '07:00',
    appointmentEnd: '07:30',
    appointmentSchedule: {
      appointmentRangeStart: 25200,
      appointmentRangeEnd: 27000,
    },
  },
  {
    id: '17',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Kevin King',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '06:00',
    appointmentEnd: '06:45',
    appointmentSchedule: {
      appointmentRangeStart: 21600,
      appointmentRangeEnd: 24300,
    },
  },
  {
    id: '18',
    type: 'priority',
    status: 'emergency',
    doctor: {
      name: 'Dr. Dorothy Scott',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '05:00',
    appointmentEnd: '05:30',
    appointmentSchedule: {
      appointmentRangeStart: 18000,
      appointmentRangeEnd: 19800,
    },
  },
  {
    id: '19',
    type: 'regular',
    status: 'confirmed',
    doctor: {
      name: 'Dr. George Allen',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '04:00',
    appointmentEnd: '04:30',
    appointmentSchedule: {
      appointmentRangeStart: 14400,
      appointmentRangeEnd: 16200,
    },
  },
  {
    id: '20',
    type: 'video',
    status: 'pending',
    doctor: {
      name: 'Dr. Barbara Thomas',
      profileImageUrl: 'https://i.ibb.co/gD8QHWk/image-1474.png',
    },
    appointmentStart: '03:00',
    appointmentEnd: '03:45',
    appointmentSchedule: {
      appointmentRangeStart: 10800,
      appointmentRangeEnd: 13500,
    },
  },
];