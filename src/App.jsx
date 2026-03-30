import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const countiesPromise = fetch("https://openapi.programming-hero.com/api/all")
    .then(res => res.json())

  return (
    <>
      <section id="">
        <Suspense fallback={<h3>All Countries are Loading...</h3>}>
          <Countries countiesPromise={countiesPromise}></Countries>
        </Suspense>
      </section>
    </>
  );
}

export default App;
