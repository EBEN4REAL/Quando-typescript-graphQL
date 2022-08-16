export type Reservation = {
  id: string;
  guest: Guest;
  startsAt: string;
  endsAt: string;
  guestCount: number;
  status: Status;
  table: Table;
};

type Guest = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Table = {
  id: string;
  name: string;
};

export enum Status {
  UPCOMING = 'Upcoming',
  CANCELLED = 'Cancelled',
  CHECKED_IN = 'Checked-in',
  CHECKED_OUT = 'Checked-out',
}

export const RESERVATIONS: Reservation[] = [
  {
    id: '28e4dd4e-0204-415c-bc31-3777cd886f36',
    guest: {
      id: '20c77eca-6739-40a6-b39e-a34d8a329ba5',
      firstName: 'Paige',
      lastName: 'Turner',
      email: 'turner@gmail.com',
    },
    startsAt: '2022-09-05T13:15:00',
    endsAt: '2022-09-05T13:45:00',
    guestCount: 2,
    status: Status.UPCOMING,
    table: {
      id: 'dd86f79b-8ff4-430f-abbf-aa67aaf9876a',
      name: '01',
    },
  },
  {
    id: '41c616d8-01cc-4ddc-a6c8-4f9d4dac01a1',
    guest: {
      id: '4990f62f-d805-459c-91fa-b7711cfe5df6',
      firstName: 'Willie',
      lastName: 'Findit',
      email: 'willfindit@gmail.com',
    },
    startsAt: '2022-09-05T18:00:00',
    endsAt: '2022-09-05T19:00:00',
    guestCount: 4,
    status: Status.UPCOMING,
    table: {
      id: 'dd86f79b-8ff4-430f-abbf-aa67aaf9876a',
      name: '01',
    },
  },
  {
    id: '241e37d0-5ddd-4a95-a2c1-2b9d979ff741',
    guest: {
      id: 'd45a76aa-6c01-4b8c-b38b-e2f750ed91d4',
      firstName: 'Constance',
      lastName: 'Noring',
      email: 'cnoring@hotmail.com',
    },
    startsAt: '2022-09-04T16:30:00',
    endsAt: '2022-09-04T17:15:00',
    guestCount: 2,
    status: Status.CHECKED_IN,
    table: {
      id: '36e5f549-1a55-41ff-b03f-9958e5a101aa',
      name: '03',
    },
  },
  {
    id: '3df51f5b-b68f-4e99-8470-104661983da8',
    guest: {
      id: '49a15723-0ba4-4606-adf9-db106589fbe4',
      firstName: 'Pat',
      lastName: 'Thetick',
      email: 'pat.t@gmail.com',
    },
    startsAt: '2022-09-04T18:00:00',
    endsAt: '2022-09-04T19:00:00',
    guestCount: 3,
    status: Status.CHECKED_IN,
    table: {
      id: 'dd86f79b-8ff4-430f-abbf-aa67aaf9876a',
      name: '01',
    },
  },

  {
    id: 'af1c9de1-d775-4b31-ad4e-1fbdca80c99c',
    guest: {
      id: '7b2c7164-7fdd-4072-be59-0e89a5a74d02',
      firstName: 'Mary',
      lastName: 'Krismass',
      email: 'mkrismass@hotmail.com',
    },
    startsAt: '2022-09-04T12:15:00',
    endsAt: '2022-09-04T13:15:00',
    guestCount: 3,
    status: Status.CHECKED_OUT,
    table: {
      id: '338b768f-afc9-4916-9efa-1202db7b52d4',
      name: '02',
    },
  },
  {
    id: '2ca28c69-d48f-42bf-afbd-a73a68f835d9',
    guest: {
      id: '28a31737-ee0d-4813-b31c-6814c0303301',
      firstName: 'Fran',
      lastName: 'Tick',
      email: 'frantick@gmail.com',
    },
    startsAt: '2022-09-03T15:30:00',
    endsAt: '2022-09-03T16:30:00',
    guestCount: 2,
    status: Status.CHECKED_OUT,
    table: {
      id: '338b768f-afc9-4916-9efa-1202db7b52d4',
      name: '02',
    },
  },
  {
    id: 'fb55593b-af7c-480b-a0d6-f3543ab7333b',
    guest: {
      id: '6286b00d-53ed-4c53-b037-fc41a2581e6d',
      firstName: 'Jen',
      lastName: 'Tile',
      email: 'jtile@hotmail.com',
    },
    startsAt: '2022-09-03T18:00:00',
    endsAt: '2022-09-03T19:30:00',
    guestCount: 4,
    status: Status.CHECKED_OUT,
    table: {
      id: '36e5f549-1a55-41ff-b03f-9958e5a101aa',
      name: '03',
    },
  },

  {
    id: '8030d2aa-44a6-4d6b-bc8b-1cf2ab91d5e3',
    guest: {
      id: '69b7a624-2c5d-4c77-9640-237e223627e6',
      firstName: 'Laura',
      lastName: 'Biding',
      email: 'lbiding@gmail.com',
    },
    startsAt: '2022-09-02T16:30:00',
    endsAt: '2022-09-02T17:15:00',
    guestCount: 6,
    status: Status.CANCELLED,
    table: {
      id: '338b768f-afc9-4916-9efa-1202db7b52d4',
      name: '02',
    },
  },
];
