// "use server"
import { cookies } from "next/headers";
export const midlewareFetching = ({ api, name = "" }) => {
  const cookiesFn = cookies();
  const hasCookie = cookiesFn.has(name);
  if (hasCookie) {
    return cookieStore.get(name);
  } else {
    const { isLoading, isFetching, data, error, isSuccess } = api();
    useEffect(() => {
      if (isSuccess && data) {
        cookies.set(name, data);
        return data;
      }
    }, [isLoading]);
  }
};
