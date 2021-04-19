import { useEffect, useState } from "react";
import messages from "../constants/messages";
import { useToasts } from "react-toast-notifications";

export interface Items {
  [key: string]: string | undefined;
  id: string;
  name: string;
  venue?: string;
  website?: string;
}

interface UseFetchResponseType {
  status: string;
  data: Items[];
}

export enum LoadingStatus {
  Waiting = "waiting",
  Fetching = "fetching",
  Fetched = "fetched",
}

// temporary solution for display loading feature
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

const useFetch = (): UseFetchResponseType => {
  const [status, setStatus] = useState<LoadingStatus>(LoadingStatus.Waiting);
  const [data, setData] = useState<Items[]>([]);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(LoadingStatus.Fetching);
        const response = await fetch(
          "http://api.football-data.org/v2/competitions/2021/teams/",
          {
            headers: {
              "X-Auth-Token": "7c91c189cea14e4ba605e1b171455cdf",
            },
          }
        );

        // temporary solution for display loading feature
        await sleep(2000);

        const data = await response.json();
        if (!response.ok) {
          throw response;
        }

        setData(data.teams);
        setStatus(LoadingStatus.Fetched);
      } catch {
        addToast(messages.fetchResponse, { appearance: "error" });
      }
    };
    fetchData();
  }, [addToast]);

  return { status, data };
};

export default useFetch;
