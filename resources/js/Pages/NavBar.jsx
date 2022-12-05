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
import Select from '@mui/material/Select';

const pages = ['Home', 'Sobre nós', 'Contato'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const styles = {
    textFont: {
        // height: 1356,
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'arial',
        fontWeight: 700,
        letterSpacing: '.2rem',
        fontSize: '16px',
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
              sx={{color: 'red'}}
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
                  <Typography textAlign="center" href="/">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalHospitalIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              href="#sobrenos"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                fontFamily: 'arial',
                color: 'red',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '.1rem',
              }}
            >
              Sobre nós
            </Button>

                  <Button
                    href="#especialidade"
                    onClick={handleCloseNavMenu}
                    sx={{
                        my: 2,
                        display: 'block',
                        fontFamily: 'arial',
                        color: 'red',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                    }}>Especialidade médica</Button>


                  {/* <Button
                    href="#emergencia"
                    onClick={handleCloseNavMenu}
                    sx={{
                        my: 2,
                        display: 'block',
                        fontFamily: 'arial',
                        color: 'red',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '.1rem',
                    }}>Emergência</Button> */}

            <Button
              href="#contatos"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: 'block',
                fontFamily: 'arial',
                color: 'red',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '.1rem',
              }}
            >
              Contato
              </Button>

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
            {/* {props.props.auth.user.cnpj && (
                <Tooltip title="clinica">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <MedicalServicesIcon alt="Remy Sharp"/>
                </IconButton>
                </Tooltip>
            )} */}
            {/* <Menu
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
            </Menu> */}

            </Link>
                ) : (
                    <>
                        <Link href={route('login')}
                        style={styles.textFont}>
                            Entrar
                        </Link>

                        <Link
                            href={route('register')}
                            style={styles.textFont}
                        >
                            /Cadastrar
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
