import { GET } from "../../services/APIService";
import buildUrl from "build-url";

const getConfig = () => {
  return GET(`/getConfig`);
};

const testEndpoint = (queryParams) => {
  return GET(
    buildUrl(``, {
      path: `/testEndpoint`,
      queryParams: { ...queryParams },
    })
  );
};

export default {
  getConfig,
  testEndpoint,
};
