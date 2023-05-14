import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Div } from './HomePageStyled';

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Div>
        <h1>Phonebook</h1>

        <p>Everything you need to manage your contacts.</p>

        <p>
          The application will help you quickly find the desired contact and
          keep order in your address book.
        </p>
        <p>Contact management: Create, delete, save contacts.</p>

        <p>Dynamic filters to organize contacts. </p>
        <p>
          Private contacts: These are contacts available only in the app on your
          account
        </p>
      </Div>
    </HelmetProvider>
  );
}

export default Home;