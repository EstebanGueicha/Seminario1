import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItems from '../Componentes/Hotel/listItems';
import General from '../Componentes/Hotel/General';
import DatosHotel from '../Componentes/Hotel/DatosHotel';
import ServiciosHotel from '../Componentes/Hotel/ServiciosHotel';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthController from '../Componentes/login/AuthController'
import ReservasHotel from '../Componentes/Hotel/ReservasHotel'
import { Grid } from '@material-ui/core';
import Logo from '../Imagenes/CommodusLogo.png'
import Solicitudes from '../Componentes/Hotel/Solicitudes';
import Resenas from '../Componentes/Hotel/Resenas';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        backgroundColor: "#fafafa"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: "#fafafa"
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function PanelControl(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [modoGeneral, setmodoGeneral] = React.useState(false);
    const [modoDatos, setmodoDatos] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoReservas, setmodoReservas] = React.useState(false);
    const [modoSolicitudes, setmodoSolicitudes] = React.useState(true);
    const [modoResenas, setmodoResenas] = React.useState(false);



    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const generalOpen = () => {
        setmodoGeneral(true);
        datosClose();
        serviciosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
    };
    const generalClose = () => {
        setmodoGeneral(false);
    };
    const datosOpen = () => {
        setmodoDatos(true);
        generalClose();
        serviciosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
    };
    const datosClose = () => {
        setmodoDatos(false);
    };
    const serviciosOpen = () => {
        setmodoServicios(true);
        generalClose();
        datosClose();
        reservasClose();
        resenasClose();
        solicitudesClose();
    };
    const serviciosClose = () => {
        setmodoServicios(false);
    };
    const reservasOpen = () => {
        setmodoReservas(true);
        generalClose();
        datosClose();
        serviciosClose();
        resenasClose();
        solicitudesClose();
    };
    const reservasClose = () => {
        setmodoReservas(false);
    };
    const solicitudesOpen = () => {
        setmodoSolicitudes(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        resenasClose();
    };
    const solicitudesClose = () => {
        setmodoSolicitudes(false);
    };
    const resenasOpen = () => {
        setmodoResenas(true);
        generalClose();
        datosClose();
        reservasClose();
        serviciosClose();
        solicitudesClose()
    };
    const resenasClose = () => {
        setmodoResenas(false);
    };


    if (modoDatos)
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Datos
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={0} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                            <ExitToAppIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <Grid container justify="center" alignItems="center">
                            <Grid item>
                                <img src={Logo} alt="logo" width={90} height={60} />
                            </Grid>
                        </Grid>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{<ListItems
                        generalOpen={generalOpen}
                        datosOpen={datosOpen}
                        serviciosOpen={serviciosOpen}
                        reservasOpen={reservasOpen}
                        solicitudesOpen={solicitudesOpen}
                        resenasOpen={resenasOpen}
                    />}</List>
                    <Divider />
                    <List></List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <DatosHotel 
                            user={props.user}
                        />
                    </Container>
                </main>
            </div>
        )
    else
        if (modoServicios)
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                        <Toolbar className={classes.toolbar}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Servicios
                            </Typography>
                            <IconButton color="inherit">
                                <Badge badgeContent={0} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                <ExitToAppIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                    >
                        <div className={classes.toolbarIcon}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item>
                                    <img src={Logo} alt="logo" width={90} height={60} />
                                </Grid>
                            </Grid>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        <List>{<ListItems
                            generalOpen={generalOpen}
                            datosOpen={datosOpen}
                            serviciosOpen={serviciosOpen}
                            reservasOpen={reservasOpen}
                            solicitudesOpen={solicitudesOpen}
                            resenasOpen={resenasOpen}
                        />}</List>
                        <Divider />
                        <List></List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                            <ServiciosHotel 
                                 user={props.user}
                            />
                        </Container>
                    </main>
                </div>
            )
        else
            if (modoReservas)
                return (
                    <div className={classes.root}>
                        <CssBaseline />
                        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                            <Toolbar className={classes.toolbar}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                    Reservas
                                </Typography>
                                <IconButton color="inherit">
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                    <ExitToAppIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Drawer
                            variant="permanent"
                            classes={{
                                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                            }}
                            open={open}
                        >
                            <div className={classes.toolbarIcon}>
                                <Grid container justify="center" alignItems="center">
                                    <Grid item>
                                        <img src={Logo} alt="logo" width={90} height={60} />
                                    </Grid>
                                </Grid>
                                <IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </div>
                            <Divider />
                            <List>{<ListItems
                                generalOpen={generalOpen}
                                datosOpen={datosOpen}
                                serviciosOpen={serviciosOpen}
                                reservasOpen={reservasOpen}
                                solicitudesOpen={solicitudesOpen}
                                resenasOpen={resenasOpen}
                            />}</List>
                            <Divider />
                            <List></List>
                        </Drawer>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />

                            <Container maxWidth="lg" className={classes.container}>
                                <ReservasHotel />
                            </Container>
                        </main>
                    </div>
                )
            else
                if (modoSolicitudes)
                    return (
                        <div className={classes.root}>
                            <CssBaseline />
                            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                <Toolbar className={classes.toolbar}>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                        Solicitudes
                                        </Typography>
                                    <IconButton color="inherit">
                                        <Badge badgeContent={0} color="secondary">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                        <ExitToAppIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                            <Drawer
                                variant="permanent"
                                classes={{
                                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                }}
                                open={open}
                            >
                                <div className={classes.toolbarIcon}>
                                    <Grid container justify="center" alignItems="center">
                                        <Grid item>
                                            <img src={Logo} alt="logo" width={90} height={60} />
                                        </Grid>
                                    </Grid>
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <List>{<ListItems
                                    generalOpen={generalOpen}
                                    datosOpen={datosOpen}
                                    serviciosOpen={serviciosOpen}
                                    reservasOpen={reservasOpen}
                                    solicitudesOpen={solicitudesOpen}
                                    resenasOpen={resenasOpen}
                                />}</List>
                                <Divider />
                                <List></List>
                            </Drawer>
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />

                                <Container maxWidth="lg" className={classes.container}>
                                    <Solicitudes 
                                         user={props.user}
                                    />
                                </Container>
                            </main>
                        </div>
                    )
                else
                    if (modoResenas)
                        return (
                            <div className={classes.root}>
                                <CssBaseline />
                                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                    <Toolbar className={classes.toolbar}>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={handleDrawerOpen}
                                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                            Reseñas
                                            </Typography>
                                        <IconButton color="inherit">
                                            <Badge badgeContent={0} color="secondary">
                                                <NotificationsIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                            <ExitToAppIcon />
                                        </IconButton>
                                    </Toolbar>
                                </AppBar>
                                <Drawer
                                    variant="permanent"
                                    classes={{
                                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                    }}
                                    open={open}
                                >
                                    <div className={classes.toolbarIcon}>
                                        <Grid container justify="center" alignItems="center">
                                            <Grid item>
                                                <img src={Logo} alt="logo" width={90} height={60} />
                                            </Grid>
                                        </Grid>
                                        <IconButton onClick={handleDrawerClose}>
                                            <ChevronLeftIcon />
                                        </IconButton>
                                    </div>
                                    <Divider />
                                    <List>{<ListItems
                                        generalOpen={generalOpen}
                                        datosOpen={datosOpen}
                                        serviciosOpen={serviciosOpen}
                                        reservasOpen={reservasOpen}
                                        solicitudesOpen={solicitudesOpen}
                                        resenasOpen={resenasOpen}
                                    />}</List>
                                    <Divider />
                                    <List></List>
                                </Drawer>
                                <main className={classes.content}>
                                    <div className={classes.appBarSpacer} />
                                    <Container maxWidth="lg" className={classes.container}>
                                        <Resenas 
                                             user={props.user}
                                        />
                                    </Container>
                                </main>
                            </div>
                        )
                    else
                        if (modoGeneral)
                            return (
                                <div className={classes.root}>
                                    <CssBaseline />
                                    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                                        <Toolbar className={classes.toolbar}>
                                            <IconButton
                                                edge="start"
                                                color="inherit"
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                                            >
                                                <MenuIcon />
                                            </IconButton>
                                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                                Panel De Control
                                    </Typography>
                                            <IconButton color="inherit">
                                                <Badge badgeContent={0} color="secondary">
                                                    <NotificationsIcon />
                                                </Badge>
                                            </IconButton>
                                            <IconButton color="inherit" variant="contained" onClick={AuthController.handleLogout}  >
                                                <ExitToAppIcon />
                                            </IconButton>
                                        </Toolbar>
                                    </AppBar>
                                    <Drawer
                                        variant="permanent"
                                        classes={{
                                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                                        }}
                                        open={open}
                                    >
                                        <div className={classes.toolbarIcon}>
                                            <Grid container justify="center" alignItems="center">
                                                <Grid item>
                                                    <img src={Logo} alt="logo" width={90} height={60} />
                                                </Grid>
                                            </Grid>
                                            <IconButton onClick={handleDrawerClose}>
                                                <ChevronLeftIcon />
                                            </IconButton>
                                        </div>
                                        <Divider />
                                        <List>{<ListItems
                                            generalOpen={generalOpen}
                                            datosOpen={datosOpen}
                                            serviciosOpen={serviciosOpen}
                                            reservasOpen={reservasOpen}
                                            solicitudesOpen={solicitudesOpen}
                                            resenasOpen={resenasOpen}
                                        />}</List>
                                        <Divider />
                                        <List></List>
                                    </Drawer>
                                    <main className={classes.content}>
                                        <div className={classes.appBarSpacer} />

                                        <Container maxWidth="lg" className={classes.container}>
                                            <General
                                                reservasOpen={reservasOpen}
                                                serviciosOpen={serviciosOpen}
                                                user={props.user}
                                            />
                                        </Container>
                                    </main>
                                </div>
                            )

}
