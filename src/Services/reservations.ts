import { Reservation } from "../Types";

interface Data {
  reservations: Reservation<number, string>[];
}

export async function getReservations(endPoint: string) {
  const result = await getData(endPoint);
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



