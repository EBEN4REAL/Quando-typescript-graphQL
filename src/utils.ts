import { Reservation }  from "./Types"


export const getSortField = (field: string, reservation: Reservation) => {
    if (field === 'Starts at') {
      return reservation.startsAt;
    }
    if (field === 'Guest count') {
      return reservation.guestCount;
    }
    if (field === 'Guest first name') {
      return reservation.guest.firstName;
    }
    return reservation.guest.lastName;
};
  
export  const getBadgeColor = (status: string): { background: string; text: string } => {
    switch (status) {
      case 'Checked-in':
        return { background: 'rgb(200, 250, 221)', text: 'rgb(0, 87, 96)' };
      case 'Cancelled':
        return { background: 'rgb(253, 222, 212)', text: 'rgb(130, 14, 61)' };
      default:
        return { background: 'rgb(207, 239, 252)', text: 'rgb(7, 45, 113)' };
    }
};