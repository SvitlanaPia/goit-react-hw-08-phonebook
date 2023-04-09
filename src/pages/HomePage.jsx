import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { HomePageContainer, Link, Subtitle, Title } from './HomePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HomePageContainer>
      <Title>Welcome to your Phonebook!</Title>
      {!isLoggedIn ? (
        <Subtitle>
          <Link to="/login">Log in</Link> to reach your contacts!
        </Subtitle>
      ) : (
        <NavLink to="/contacts">Your contacts</NavLink>
      )}
    </HomePageContainer>
  );
}
