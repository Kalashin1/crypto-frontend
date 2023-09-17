import Header from "../about/components/header"
import Layout from "../layout"
import Error404 from "./components/404-component"

const ErrorNotFound = () => {
  return (
    <Layout>
      <Header />
      <Error404 />
    </Layout>
  )
}

export default ErrorNotFound;