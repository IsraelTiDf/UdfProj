import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box,createTheme,Container,Button,IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { useTheme } from "@mui/material/styles";

// import useStyles from './styles.js';
const theme = createTheme();

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = {
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: (theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: (theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(1),
        marginLeft: 1,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
      },
      searchIcon: {
        padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
      },
      toolbar: {
        display: 'flex', justifyContent: 'space-between',
      },
  };

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
  const pages = ['Home', 'Sobre nós', 'Contato'];

  return (
    // <AppBar position="static">
    //   <Toolbar className={classes.toolbar}>
    //     <Typography variant="h5" className={classes.title}>
    //       Mapinha Legal
    //     </Typography>
    //     <Box display="flex">
    //       <Typography variant="h6" className={classes.title}>
    //         Especialidades
    //       </Typography>
    //       <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
    //         <div className={classes.search}>
    //           <div className={classes.searchIcon}>
    //             <SearchIcon />
    //           </div>
    //           <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
    //         </div>
    //       </Autocomplete>
    //     </Box>
    //   </Toolbar>
    // </AppBar>


<AppBar position="fixed" style={{ background: '#FFFFFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >

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
                color: 'red',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {/* <Button
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
            </Button> */}

          </Box>
        <Box sx={{ flexGrow: 0 }}>
            <Button
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
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <InputBase placeholder='Pesquisar'  startAdornment={<SearchIcon  sx={{color: 'red'}}/>}classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </Autocomplete>
           </Button>
        </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
