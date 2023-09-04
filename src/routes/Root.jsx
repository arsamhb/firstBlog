import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { useState } from "react"
import { Outlet } from "react-router-dom";


export default function Root() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header title="R's blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  );
}
