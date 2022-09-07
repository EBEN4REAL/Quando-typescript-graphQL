import { Reservation } from "../Types";

interface Data  {
  reservations: Reservation[];
};

export async function getReservations() {
  const result = await getData("/mockReservations.json");
  return result.reservations;
}

function getData(endpoint: string): Promise<Data> {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, 500);
  });
}
