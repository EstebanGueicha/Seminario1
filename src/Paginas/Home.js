import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import ListItems from '../Componentes/listItems';
import General from '../Componentes/General';
import Perfil from '../Componentes/MiPerfil/Perfil';
import Reservas from '../Componentes/MiReserva/Reservas';
import CheckIn from '../Componentes/MiReserva/CheckIn';
import CheckOut from '../Componentes/MiReserva/CheckOut';
import Servicios from '../Componentes/MiReserva/Servicios';
import Resenas from '../Componentes/MiPerfil/Resenas';
import Tarjetas from '../Componentes/MiPerfil/Tarjetas';
import Deslizable from '../Componentes/Deslizable'
import Historial from '../Componentes/MiReserva/Historial';
import Ayuda from '../Componentes/Ayuda';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
       
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

    },
}));

export default function PanelControl(props) {
    const classes = useStyles();
    const [modoGeneral, setmodoGeneral] = React.useState(false);
    const [modoPerfil, setmodoPerfil] = React.useState(false);
    const [modoReservas, setmodoReservas] = React.useState(false);
    const [modoCheckIn, setmodoCheckIn] = React.useState(false);
    const [modoServicios, setmodoServicios] = React.useState(false);
    const [modoCheckOut, setmodoCheckOut] = React.useState(false);
    const [modoResenas, setmodoResenas] = React.useState(false);
    const [modoPagos, setmodoPagos] = React.useState(true);
    const [modoHistorial, setmodoHistorial] = React.useState(false);
    const [modoAyuda, setmodoAyuda] = React.useState(false);

    const [romantico, setRomantico] = React.useState(false)
    const [ejecutivo, setEjecutivo] = React.useState(false)
    const [familia, setFamilia] = React.useState(false)
    const [preferencias, setPreferencias] = React.useState(false)
    const [perfil, setPer] = React.useState(0);
    const [expanded, setExpanded] = React.useState(false);
    const [contacto, setContacto] = React.useState(false);
    const [checkOutOK, setCheckOutOK] = React.useState(false);
    const [checkInOK, setCheckInOK] = React.useState(false);

    const [darkState, setDarkState] = React.useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? "#1565c0" : "#1565c0";
    const mainSecondaryColor = darkState ? "#fafafa" : "#ff9800";
    const darkTheme = createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });

    const handleThemeChange = () => {
        setDarkState(!darkState);
        console.log("hola")
    };

    const handleCheckOut = () => {
        setCheckOutOK(!checkOutOK);
    };
    const handleCheckIn = () => {
        setCheckInOK(!checkInOK);
    };

    const generalOpen = () => {
        setmodoGeneral(true);
        reservasClose();
        perfilClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const generalClose = () => {
        setmodoGeneral(false);
    };
    const perfilOpenPerfil = () => {
        setmodoPerfil(true);
        generalClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        setPer(1);
        historialClose();
        ayudaClose();
    };
    const perfilOpen = () => {
        setmodoPerfil(true);
        generalClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        setPer(0);
        historialClose();
        ayudaClose();
    };
    const perfilClose = () => {
        setmodoPerfil(false);
    };
    const reservasOpenContacto = () => {
        setmodoReservas(true);
        setExpanded(true)
        setContacto(true)
        generalClose();
        perfilClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const reservasOpen = () => {
        setmodoReservas(true);
        generalClose();
        perfilClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const reservasClose = () => {
        setmodoReservas(false);
    };
    const checkInOpen = () => {
        setmodoCheckIn(true);
        generalClose();
        perfilClose();
        reservasClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const checkInClose = () => {
        setmodoCheckIn(false);
    };
    const serviciosOpen = () => {
        setmodoServicios(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const serviciosClose = () => {
        setmodoServicios(false);
    };
    const checkOutOpen = () => {
        setmodoCheckOut(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        resenasClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const checkOutClose = () => {
        setmodoCheckOut(false);
    };
    const resenasOpen = () => {
        setmodoResenas(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        pagosClose();
        historialClose();
        ayudaClose();
    };
    const resenasClose = () => {
        setmodoResenas(false);
    };
    const pagosOpen = () => {
        setmodoPagos(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        historialClose();
        ayudaClose();
    };
    const pagosClose = () => {
        setmodoPagos(false);
    };
    const historialOpen = () => {
        setmodoHistorial(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        resenasClose();
        pagosClose();
        ayudaClose();
    };
    const historialClose = () => {
        setmodoHistorial(false);
    };
    const ayudaOpen = () => {
        setmodoAyuda(true);
        generalClose();
        perfilClose();
        reservasClose();
        checkInClose();
        serviciosClose();
        checkOutClose();
        pagosClose();
        resenasClose();
        historialClose();
    };
    const ayudaClose = () => {
        setmodoAyuda(false);
    };
    
    const romanticoOpen = () => {
        setRomantico(true);
        ejecutivoClose();
        familiaClose();
        preferenciasClose();
    };
    const romanticoClose = () => {
        setRomantico(false);
    };
    const ejecutivoOpen = () => {
        setEjecutivo(true);
        romanticoClose();
        familiaClose();
        preferenciasClose();
    };
    const ejecutivoClose = () => {
        setEjecutivo(false);
    };
    const familiaOpen = () => {
        setFamilia(true);
        ejecutivoClose();
        romanticoClose();
        preferenciasClose();
    };
    const familiaClose = () => {
        setFamilia(false);
    };
    const preferenciasOpen = () => {
        setPreferencias(true);
        ejecutivoClose();
        familiaClose();
        romanticoClose();
    };
    const preferenciasClose = () => {
        setPreferencias(false);
    };


    const listDrawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>{<ListItems
                openGeneral={generalOpen}
                perfilOpen={perfilOpen}
                reservasOpen={reservasOpen}
                checkInOpen={checkInOpen}
                serviciosOpen={serviciosOpen}
                checkOutOpen={checkOutOpen}
                resenasOpen={resenasOpen}
                pagosOpen={pagosOpen}
                historialOpen={historialOpen}
                ayudaOpen={ayudaOpen}
                user={props.user}
            />}</List>

            <List></List>
        </div>
    );

    if (modoPerfil) {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <Deslizable listDrawer={listDrawer} user={props.user} modo={"Mi Perfil"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />

                        <Container maxWidth="lg" className={classes.container}>
                            {<Perfil
                                user={props.user}
                                perfil={perfil}
                                romanticoOpen={romanticoOpen}
                                ejecutivoOpen={ejecutivoOpen}
                                familiaOpen={familiaOpen}
                                preferenciasOpen={preferenciasOpen}
                                romantico={romantico}
                                ejecutivo={ejecutivo}
                                familia={familia}
                                preferencias={preferencias}
                                perfilCompletado={props.perfilCompletado}
                                callPerfilCompletado={props.callPerfilCompletado}
                            />}
                        </Container>
                    </main>
                </div>
            </ThemeProvider>
        )
    } else {
        if (modoReservas) {
            return (
                <ThemeProvider theme={darkTheme}>
                    <div className={classes.root}>
                        <CssBaseline />
                        <Deslizable listDrawer={listDrawer} user={props.user} modo={"Reservas"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                        <main className={classes.content}>
                            <div className={classes.appBarSpacer} />
                            <Container maxWidth="lg" className={classes.container}>
                                <Reservas
                                    user={props.user}
                                    id={props.id}
                                    CheckIn={props.CheckIn}
                                    CheckOut={props.CheckOut}
                                    huespedes={props.huespedes}
                                    precio={props.precio}
                                    reservasOpen={reservasOpen}
                                    checkInOpen={checkInOpen}
                                    checkOutOpen={checkOutOpen}
                                    expanded={expanded}
                                    contacto={contacto}
                                    modo={"Reservas"}
                                    callCheckIn={props.callCheckIn}
                                    callCheckOut={props.callCheckOut}
                                    callHuespedes={props.callHuespedes}
                                />
                            </Container>
                        </main>
                    </div>
                </ThemeProvider>
            )
        } else {
            if (modoCheckIn) {
                return (
                    <ThemeProvider theme={darkTheme}>
                        <div className={classes.root}>
                            <CssBaseline />
                            <Deslizable listDrawer={listDrawer} user={props.user} modo={"Check-In"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                            <main className={classes.content}>
                                <div className={classes.appBarSpacer} />
                                <Container maxWidth="lg" className={classes.container}>
                                    {<CheckIn
                                        user={props.user}
                                        id={props.id}
                                        CheckIn={props.CheckIn}
                                        CheckOut={props.CheckOut}
                                        huespedes={props.huespedes}
                                        precio={props.precio}
                                        reservasOpen={reservasOpen}
                                        checkInOpen={checkInOpen}
                                        checkOutOpen={checkOutOpen}
                                        modo={"Check-In"}
                                        romantico={romantico}
                                        ejecutivo={ejecutivo}
                                        familia={familia}
                                        preferencias={preferencias}
                                        perfil={perfil}
                                        romanticoOpen={romanticoOpen}
                                        ejecutivoOpen={ejecutivoOpen}
                                        familiaOpen={familiaOpen}
                                        preferenciasOpen={preferenciasOpen}
                                        reservasOpenContacto={reservasOpenContacto}
                                        perfilCompletado={props.perfilCompletado}
                                        callPerfilCompletado={props.callPerfilCompletado}
                                        checkInOK={checkInOK}
                                        handleCheckIn={handleCheckIn}
                                    />}
                                </Container>
                            </main>
                        </div>
                    </ThemeProvider>
                )
            } else {

                if (modoServicios) {
                    return (
                        <ThemeProvider theme={darkTheme}>
                            <div className={classes.root}>
                                <CssBaseline />
                                <Deslizable listDrawer={listDrawer} user={props.user} modo={"Servicios"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                <main className={classes.content}>
                                    <div className={classes.appBarSpacer} />
                                    <Container maxWidth="lg" className={classes.container}>
                                        <Servicios
                                            user={props.user}
                                            id={props.id}
                                            CheckIn={props.CheckIn}
                                            CheckOut={props.CheckOut}
                                            huespedes={props.huespedes}
                                            precio={props.precio}
                                            reservasOpen={reservasOpen}
                                            checkInOpen={checkInOpen}
                                            checkOutOpen={checkOutOpen}
                                            modo={"Servicios"}
                                            romantico={romantico}
                                            ejecutivo={ejecutivo}
                                            familia={familia}
                                            preferencias={preferencias}
                                            perfil={perfil}
                                            romanticoOpen={romanticoOpen}
                                            ejecutivoOpen={ejecutivoOpen}
                                            familiaOpen={familiaOpen}
                                            preferenciasOpen={preferenciasOpen}
                                            reservasOpenContacto={reservasOpenContacto}
                                            perfilCompletado={props.perfilCompletado}
                                            callPerfilCompletado={props.callPerfilCompletado}
                                            checkInOK={checkInOK}
                                        />
                                    </Container>
                                </main>
                            </div>
                        </ThemeProvider>
                    )
                } else {
                    if (modoCheckOut) {
                        return (
                            <ThemeProvider theme={darkTheme}>
                                <div className={classes.root}>
                                    <CssBaseline />
                                    <Deslizable listDrawer={listDrawer} user={props.user} modo={"Check-Out"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                    <main className={classes.content}>
                                        <div className={classes.appBarSpacer} />
                                        <Container maxWidth="lg" className={classes.container}>
                                            <CheckOut
                                                user={props.user}
                                                id={props.id}
                                                CheckIn={props.CheckIn}
                                                CheckOut={props.CheckOut}
                                                huespedes={props.huespedes}
                                                precio={props.precio}
                                                reservasOpen={reservasOpen}
                                                checkInOpen={checkInOpen}
                                                checkOutOpen={checkOutOpen}
                                                modo={"Check-Out"}
                                                reservasOpenContacto={reservasOpenContacto}
                                                checkOutOK={checkOutOK}
                                                handleCheckOut={handleCheckOut}
                                            />
                                        </Container>
                                    </main>
                                </div>
                            </ThemeProvider>
                        )
                    } else {
                        if (modoResenas) {
                            return (
                                <ThemeProvider theme={darkTheme}>
                                    <div className={classes.root}>
                                        <Deslizable listDrawer={listDrawer} user={props.user} modo={"Reseñas"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                        <main className={classes.content}>
                                            <div className={classes.appBarSpacer} />
                                            <Container maxWidth="lg" className={classes.container}>
                                                <Resenas />
                                            </Container>
                                        </main>
                                    </div>
                                </ThemeProvider>
                            )
                        } else {
                            if (modoPagos) {
                                return (
                                    <ThemeProvider theme={darkTheme}>
                                        <div className={classes.root}>
                                            <CssBaseline />
                                            <Deslizable listDrawer={listDrawer} user={props.user} modo={"Tarjetas"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                            <main className={classes.content}>
                                                <div className={classes.appBarSpacer} />
                                                <Container maxWidth="lg" className={classes.container}>
                                                    <Tarjetas  user={props.user} modo={"Tarjetas"} />
                                                </Container>
                                            </main>
                                        </div>
                                    </ThemeProvider>
                                )
                            } else {
                                if (modoGeneral) {
                                    return (
                                        <ThemeProvider theme={darkTheme}>
                                            <div className={classes.root}>
                                                <CssBaseline />
                                                <Deslizable listDrawer={listDrawer} user={props.user} modo={"Panel General"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                                <main className={classes.content}>
                                                    <div className={classes.appBarSpacer} />
                                                    <Container maxWidth="lg" className={classes.container}>

                                                        {<General
                                                            user={props.user}
                                                            perfilOpen={perfilOpen}
                                                            id={props.id}
                                                            CheckIn={props.CheckIn}
                                                            CheckOut={props.CheckOut}
                                                            huespedes={props.huespedes}
                                                            precio={props.precio}
                                                            reservasOpen={reservasOpen}
                                                            checkInOpen={checkInOpen}
                                                            checkOutOpen={checkOutOpen}
                                                            perfilOpenPerfil={perfilOpenPerfil}
                                                            romantico={romantico}
                                                            ejecutivo={ejecutivo}
                                                            familia={familia}
                                                            preferencias={preferencias}
                                                            modo={"General"}
                                                            perfilCompletado={props.perfilCompletado}
                                                            callPerfilCompletado={props.callPerfilCompletado}
                                                        />}

                                                    </Container>
                                                </main>
                                            </div>
                                        </ThemeProvider>
                                    )
                                } else {
                                    if (modoHistorial) {
                                        return (
                                            <ThemeProvider theme={darkTheme}>
                                                <div className={classes.root}>
                                                    <CssBaseline />
                                                    <Deslizable listDrawer={listDrawer} user={props.user} modo={"Historial de reservas"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                                    <main className={classes.content}>
                                                        <div className={classes.appBarSpacer} />
                                                        <Container maxWidth="lg" className={classes.container}>
                                                            {<Historial
                                                                user={props.user}
                                                                id={props.id}
                                                                CheckIn={props.CheckIn}
                                                                CheckOut={props.CheckOut}
                                                                huespedes={props.huespedes}
                                                                precio={props.precio}
                                                                modo={"Historial"}
                                                            />}
                                                        </Container>
                                                    </main>
                                                </div>
                                            </ThemeProvider>
                                        )
                                    } else {
                                        if (modoAyuda) {
                                            return (
                                                <ThemeProvider theme={darkTheme}>
                                                    <div className={classes.root}>
                                                        <CssBaseline />
                                                        <Deslizable listDrawer={listDrawer} user={props.user} modo={"Ayuda"}   handleThemeChange={handleThemeChange}  darkState={darkState}/>
                                                        <main className={classes.content}>
                                                            <div className={classes.appBarSpacer} />
                                                            <Container maxWidth="lg" className={classes.container}>
                                                                <Ayuda />
                                                            </Container>
                                                        </main>
                                                    </div>
                                                </ThemeProvider>
                                            )
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
    }
}

