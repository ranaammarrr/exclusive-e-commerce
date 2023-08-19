import React, { useState } from 'react';
import Dropdown from '@mui/base/Dropdown';
import Menu from '@mui/base/Menu';
import MenuButton from '@mui/base/MenuButton';
import MenuItem, { menuItemClasses } from '@mui/base/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { styled } from '@mui/system';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

const DropDownMenu = () => {

    const { isAuthenticated, logout } = UserAuth();
    const { clearCart } = useCartContext();
    const [isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout()
            clearCart();
            navigate('/login')
        } catch (e) {
            console.log(e.message);
        }
    }
    const handleIconMouseEnter = () => {
        setIsHovered(true);
    };

    const handleIconMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <Dropdown >
            <TriggerButton
                onMouseEnter={handleIconMouseEnter}
                onMouseLeave={handleIconMouseLeave}
            >
                {isHovered ? (
                    <PersonIcon className="ms-4" />
                ) : (
                    <PersonOutlineIcon className="ms-4" />
                )}
            </TriggerButton>
            <Menu slots={{ listbox: StyledListbox }}>
                <StyledMenuItem>
                    <NavLink to="/account"
                        style={{ textDecoration: "none", color: "inherit" }}>Profile</NavLink>
                </StyledMenuItem>
                {isAuthenticated === true && (

                    <StyledMenuItem onClick={handleLogout}>
                        Log out
                    </StyledMenuItem>

                )}
            </Menu>
        </Dropdown>
    );
}

export default DropDownMenu

const red = {
    50: '#F0F7FF',
    100: '#DAECFF',
    200: '#99CCF3',
    300: '#66B2FF',
    400: '#ef5350',
    500: '#007FFF',
    600: '#e53935',
    900: '#212121',
};

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
};

const StyledListbox = styled('ul')(
    ({ theme }) => `
  font-size: 0.875rem;

  padding: 6px;
  margin-top: 140px;
  margin: 12px 0;
  min-width: 180px;
  border-radius: 4px;
  outline: 0px;
  background-color: rgb(255, 255, 255);
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};

  `,
);

const StyledMenuItem = styled(MenuItem)(
    ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? red[600] : red[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
    ({ theme }) => `
  background: transparent;
  border: none;
  color: ${theme.palette.mode === 'dark' ? red[400] : red[900]};
  cursor: pointer;
  
  `,
);