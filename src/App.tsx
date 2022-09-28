import React, { useEffect, useState, useMemo, Suspense } from "react";
import "./App.css";

import { getReservations } from "./Services/reservations";
import { ReservationStatus, Reservation } from "./Types";
import { LoadingIcon } from "./Loader";
import { reservationStatuses } from "./Constants";
import { getSortField } from "./utils";
import ReservationCard from "./components/ReservationCard";
import * as Styled from "./components/StyledComponents/Reservations.styled";
import ReservationStatuses from "./components/ReservationStatuses";
import SortFields from "./components/sortFields";

/** i18n */
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "react-bootstrap";
import { Helmet } from "react-helmet";

/** GraphQL */
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  useQuery, 
  gql 
} from "@apollo/client"; 
import { MOVIES } from "./Services/GraphQL/Queries"

const client = new ApolloClient({ 
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache() 
});

function App() {
  const [locale, setLocale] = useState(i18n.language);
  const [sortField, setSortField] = useState<string>("Starts at");
  const [reservations, setReservations] = useState<Reservation<number, string>[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const [statuses, setStatus] =
    useState<ReservationStatus[]>(reservationStatuses);

  const { loading, error, data } = useQuery(MOVIES);

  useEffect(() => {
    getReservations("/mockReservations.json").then((reservations) => {
      setReservations(reservations);
      setLoader(false);
    });
  }, []);

  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  const { t } = useTranslation();

  const filteredReservationList = useMemo(() => {
    const clonedReservations = [...reservations];
    const clonedStatuses = [...statuses];

    let filteredReservations: Reservation<number, string>[] = [];

    clonedStatuses.forEach((status) => {
      filteredReservations.push(
        ...clonedReservations.filter((reservation) =>
          status.checked ? reservation.status === status.value : null
        )
      );
    });

    let sortableReservations =
      filteredReservations.length > 0
        ? filteredReservations
        : clonedReservations;

    const computedReservations = sortableReservations.sort((a, b) =>
      getSortField<string, Reservation<number, string>>(sortField, a) < getSortField(sortField, b) ? -1 : 1
    );

    return computedReservations;
  }, [reservations, sortField, statuses]);

  const renderReservations = (): JSX.Element[] => {
    return filteredReservationList.map((reservation: Reservation<number, string>) => {
      return <ReservationCard key={reservation.id} reservation={reservation} />;
    });
  };

  const changeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const clonedStatusArr = [...statuses];

    const statusIndex = clonedStatusArr.findIndex(
      (status) => status.value === target.value
    );

    clonedStatusArr[statusIndex].checked =
      !clonedStatusArr[statusIndex].checked;

    setStatus(clonedStatusArr);
  };

  return (
    <Styled.Container>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <ThemeProvider dir={locale === "en" ? "ltr" : "rtl"}>
          <Suspense fallback={<Loading />}>
            <Styled.Header>{t("reservationHeader")}</Styled.Header>
            <Navigation />
            <Styled.OptionsContainer>
              <div>
                <label>
                  <strong>{t("sortBy")}</strong>:
                </label>
                <SortFields
                  onSortFieldChange={(e) => setSortField(e.target.value)}
                />
              </div>
              <div>
                <strong>{t("withStatus")}</strong>:
                <ReservationStatuses onChangeStatus={changeStatus} />
              </div>
            </Styled.OptionsContainer>

            {!loader && renderReservations()}

            {loader && <LoadingIcon />}

            <Helmet
              htmlAttributes={{
                lang: locale,
                dir: locale === "en" ? "ltr" : "rtl",
              }}
            />
          </Suspense>
        </ThemeProvider>
      </LocaleContext.Provider>
    </Styled.Container>
  );
}

export default App;
