
type Status = 'Upcoming' | 'Cancelled' | 'Checked-in' | 'Checked-out'; 

export interface Reservation  {
  id: string;
  guest: Guest;
  startsAt: string;
  endsAt: string;
  guestCount: number;
  status: Status;
  table: Table;
};

type Guest =   {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type Table =  {
  id: string;
  name: string;
};

export interface ReservationStatus  {
    id: string
    value: string
    checked: boolean
}

export interface SortField  {
    id: string,
    value: string
}