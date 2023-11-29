import Main from "./components/Main";
import SearchForm from "./components/SearchForm";
import InfoPrimary from "./components/InfoPrimary";
import InfoSecundary from "./components/InfoSecundary";

export default function App() {
  return (
    <>
      <Main>
        <SearchForm />
        <InfoPrimary />
        <InfoSecundary />
      </Main>
    </>
  );
}
