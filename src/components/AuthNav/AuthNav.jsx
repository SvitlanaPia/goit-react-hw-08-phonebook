import { AuthNavContainer, StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Sign in</StyledNavLink>
    </AuthNavContainer>
  );
}
