import { Provider } from "react-redux";
import Layout from './components/Layout.js';
import { store } from "@MyBodytech/mf-store-auth";
const Root = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default Root;