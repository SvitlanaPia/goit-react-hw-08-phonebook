import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { StyledNavLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    // <NavContainer>
    <>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </>
    // </NavContainer>
  );
}

export default Navigation;
