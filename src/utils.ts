import { Reservation }  from "./Types"

const enum Fields  {
  startsAt = "Starts at",
  guestCount = "Guest count",
  firstName = "Guest first name",
  lastName = "Guest last name"
}

export const getSortField = <T extends string, K extends Reservation>(field: T , reservation: K): string | number => {
  switch (field) {
    case Fields.startsAt:
      return reservation.startsAt;
    case Fields.guestCount:
      return reservation.guestCount;
    case Fields.firstName:
      return reservation.guest.firstName;
    default:
      return reservation.guest.lastName;
  }
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