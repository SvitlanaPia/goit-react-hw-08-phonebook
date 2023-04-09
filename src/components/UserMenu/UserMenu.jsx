import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { UserMenuContainer } from './UserMenu.styled';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <span>{user.email}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuContainer>
  );
}

export default UserMenu;
