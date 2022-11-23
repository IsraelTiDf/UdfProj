import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AdbIcon from '@mui/icons-material/Adb';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Link, Head } from '@inertiajs/inertia-react';

const pages = ['Home', 'Sobre nós', 'Contato'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const styles = {
    textFont: {
        // height: 1356,
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#591010',
        textDecoration: 'none',
    }
};

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
//   console.log(props.props.auth.user);

  return (
    <AppBar position="fixed" style={{ background: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalHospitalIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontSize: '30px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#591010',
              textDecoration: 'none',
            }}
          >
            DIND
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalHospitalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block', fontFamily: 'arial', color: 'red',fontSize: '14px', fontWeight: 600, letterSpacing: '.1rem',}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            {props.props.auth.user ? (
            <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                {/* Dashboard */}


            {props.props.auth.user.cpf && (
                <Tooltip title="Usuario">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon alt="Remy Sharp" />
                </IconButton>
                </Tooltip>
            )}
            {props.props.auth.user.cnpj && (
                <Tooltip title="clinica">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <MedicalServicesIcon alt="Remy Sharp"/>
                </IconButton>
                </Tooltip>
            )}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>

            </Link>
                ) : (
                    <>
                        <Link href={route('login')}
                        style={styles.textFont}>
                            Login
                        </Link>

                        <Link
                            href={route('register')}
                            style={styles.textFont}
                        >
                            /Register
                        </Link>

                        {/* <Link
                            href={route('register-clinica')}
                            style={styles.textFont}
                        >
                           / Register-Clinica
                        </Link> */}
                    </>
                )}
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;