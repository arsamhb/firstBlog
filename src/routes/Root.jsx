import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Root() {

  const [search, setSearch] = useState("");
  
  return (
    <>
      <Header title="R's blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet context={[search]}/>
      <Footer />
    </>
  );
}
