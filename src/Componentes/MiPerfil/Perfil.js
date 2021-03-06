import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

import TabsPerfil from './TabsPerfil';
import GuestInfo from '../../Models/Guest/GuestInfo';
import GuestAPI from '../../Network/Guest/GuestAPI';

import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorMessageModal from '../Commons/ErrorMessageModal';
import '../../Styles/Common.css'

const styles = theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    botones: {
        marginTop: theme.spacing(1),
        minWidth: 200
    },
    espacio: {
        marginTop: theme.spacing(4),
    },
})

class Perfil extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            romantico: false,
            ejecutivo: false,
            familia: false,
            preferencias: false,
            perfilElegido: "",
            aguaFria: false,
            champagne: false,
            gaseosa: false,
            vino: false,
            sinseleccionarB: true,
            bebidaElegida: "",
            chocolates: false,
            golosinas: false,
            fiambres: false,
            pasteleria: false,
            sinseleccionarA: true,
            acompañamientoElegido: "",
            siete: false,
            nueve: false,
            once: false,
            trece: false,
            sinseleccionarL: true,
            limpiezaElegida: "",
            uno: false,
            dos: false,
            tres: false,
            cuatro: false,
            sinseleccionarT: true,
            tintoreriaElegida: "",

            loading: false,
            open: false,
            errorMessageIsOpen: false,
            errorMessage: ""
        }
    }

    //Life Cycle methods
    componentDidMount() {
        this.getSelectedProfile();
    }

    getSelectedProfile() {
        let profile = GuestInfo.getInstance().getSelectedProfile();
        if (profile !== null) {
            // let perfilSeleccionado = String();
            switch (profile.perfil) {
                case "romantico":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "ejecutivo":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "familia":
                    this.handleChangeSwitch(profile.perfil)
                    break;
                case "preferencias":
                    this.handleChangeSwitch(profile.perfil)
                    this.handleBebida(profile._bebida)
                    this.handleAcompañamiento(profile._acompaniamiento)
                    this.handleLimpieza(profile._limpieza)
                    this.handleTintoreria(profile._tintoreria)
                    break;
                default:
                    break;
            }
        }
    }

    //Handle Button Actions
    callBebidaElegida = (x) => {
        this.setState({ bebidaElegida: x })
    }

    callAcompañamientoElegido = (x) => {
        this.setState({ acompañamientoElegido: x })
    }

    callLimpiezaElegida = (x) => {
        this.setState({ limpiezaElegida: x })
    }

    callTintoreriaElegida = (x) => {
        this.setState({ tintoreriaElegida: x })
    }

    closeErrorModal() {
        this.setState({ errorMessageIsOpen: false }, this.forceUpdate());
    }

    guardarPerfil() {
        let perfil = {
            "perfil": this.state.perfilElegido,
            "bebida": this.state.bebidaElegida,
            "acompaniamiento": this.state.acompañamientoElegido,
            "limpieza": this.state.limpiezaElegida,
            "tintoreria": this.state.tintoreriaElegida
        };

        GuestInfo.getInstance().saveSelectedProfile(perfil);
        this.postGuestInfo()
    }

    handleChangeSwitch = (event) => {
        var handle = ""
        if (event.target !== undefined) {
            handle = event.target.name
        } else
            handle = event


        if (handle === "romantico")
            this.setState({
                romantico: true,
                ejecutivo: false,
                familia: false,
                preferencias: false,
                perfilElegido: "romantico",
            });
        else
            if (handle === "ejecutivo")
                this.setState({
                    romantico: false,
                    ejecutivo: true,
                    familia: false,
                    preferencias: false,
                    perfilElegido: "ejecutivo",
                });
            else
                if (handle === "familia")
                    this.setState({
                        romantico: false,
                        ejecutivo: false,
                        familia: true,
                        preferencias: false,
                        perfilElegido: "familia",
                    });
                else
                    if (handle === "preferencias")
                        this.setState({
                            romantico: false,
                            ejecutivo: false,
                            familia: false,
                            preferencias: true,
                            perfilElegido: "preferencias",
                        });
    };
    handleBebida = (event) => {

        var handle = ""
        if (event.target !== undefined) {
            handle = event.target.name
        } else
            handle = event

        if (handle === "aguaFria") {
            this.setState({
                aguaFria: true,
                champagne: false,
                gaseosa: false,
                vino: false,
                sinseleccionarB: false,
                bebidaElegida: "aguaFria",
            });
        }
        else
            if (handle === "champagne")
                this.setState({
                    aguaFria: false,
                    champagne: true,
                    gaseosa: false,
                    vino: false,
                    sinseleccionarB: false,
                    bebidaElegida: "champagne",
                });
            else
                if (handle === "gaseosa")
                    this.setState({
                        aguaFria: false,
                        champagne: false,
                        gaseosa: true,
                        vino: false,
                        sinseleccionarB: false,
                        bebidaElegida: "gaseosa",
                    });
                else
                    if (handle === "vino")
                        this.setState({
                            aguaFria: false,
                            champagne: false,
                            gaseosa: false,
                            vino: true,
                            sinseleccionarB: false,
                            bebidaElegida: "vino",
                        });

    }
    handleAcompañamiento = (event) => {
        var handle = ""
        if (event.target !== undefined) {
            handle = event.target.name
        } else
            handle = event

        if (handle === "chocolates")
            this.setState({
                chocolates: true,
                golosinas: false,
                fiambres: false,
                pasteleria: false,
                sinseleccionarA: false,
                acompañamientoElegido: "chocolates",
            });
        else
            if (handle === "golosinas")
                this.setState({
                    chocolates: false,
                    golosinas: true,
                    fiambres: false,
                    pasteleria: false,
                    sinseleccionarA: false,
                    acompañamientoElegido: "golosinas",
                });
            else
                if (handle === "fiambres")
                    this.setState({
                        chocolates: false,
                        golosinas: false,
                        fiambres: true,
                        pasteleria: false,
                        sinseleccionarA: false,
                        acompañamientoElegido: "fiambres",
                    });
                else
                    if (handle === "pasteleria")
                        this.setState({
                            chocolates: false,
                            golosinas: false,
                            fiambres: false,
                            pasteleria: true,
                            sinseleccionarA: false,
                            acompañamientoElegido: "pasteleria",
                        });

    }
    handleLimpieza = (event) => {
        var handle = ""
        if (event.target !== undefined) {
            handle = event.target.name
        } else
            handle = event

        if (handle === "siete")
            this.setState({
                siete: true,
                nueve: false,
                once: false,
                trece: false,
                sinseleccionarL: false,
                limpiezaElegida: "siete",
            });
        else
            if (handle === "nueve")
                this.setState({
                    siete: false,
                    nueve: true,
                    once: false,
                    trece: false,
                    sinseleccionarL: false,
                    limpiezaElegida: "nueve",
                });
            else
                if (handle === "once")
                    this.setState({
                        siete: false,
                        nueve: false,
                        once: true,
                        trece: false,
                        sinseleccionarL: false,
                        limpiezaElegida: "once",
                    });
                else
                    if (handle === "trece")
                        this.setState({
                            siete: false,
                            nueve: false,
                            once: false,
                            trece: true,
                            sinseleccionarL: false,
                            limpiezaElegida: "trece",
                        });

    }
    handleTintoreria = (event) => {
        var handle = ""
        if (event.target !== undefined) {
            handle = event.target.name
        } else
            handle = event


        if (handle === "uno")
            this.setState({
                uno: true,
                dos: false,
                tres: false,
                cuatro: false,
                sinseleccionarT: false,
                tintoreriaElegida: "uno",
            });
        else
            if (handle === "dos")
                this.setState({
                    uno: false,
                    dos: true,
                    tres: false,
                    cuatro: false,
                    sinseleccionarT: false,
                    tintoreriaElegida: "dos",
                });
            else
                if (handle === "tres")
                    this.setState({
                        uno: false,
                        dos: false,
                        tres: true,
                        cuatro: false,
                        sinseleccionarT: false,
                        tintoreriaElegida: "tres",
                    });
                else
                    if (handle === "cuatro")
                        this.setState({
                            uno: false,
                            dos: false,
                            tres: false,
                            cuatro: true,
                            sinseleccionarT: false,
                            tintoreriaElegida: "cuatro",
                        });
    }

    //Service Calls
    postGuestInfo = () => {
        this.setState({ loading: true });
        GuestAPI.postGuestInfo(this.handlePostGuestInfo);
    }

    handlePostGuestInfo = async (guestInfo) => {
        this.setState({ loading: false });
        if (guestInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
            this.setState({ open: false })
        } else {
            //get user with email failed
            console.log("Errrooor pa")
        }
    }

    handlePostGuestInfo(guestInfo) {
        this.setState({ loading: false });
        if (guestInfo.error == null) {
            //post was successful
            console.log("Guardado con exito")
        } else {
            //get user with email failed
            this.setState({
                errorMessageIsOpen: true,
                errorMessage: "Intentelo de nuevo por favor."
            });
        }
    }

    //Render view
    showLoaderIfNeeded() {
        if (this.state.loading) {
            return (
                <div className="loader">
                    <CircularProgress disableShrink />;
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div>
                    {this.showLoaderIfNeeded()}
                    <ErrorMessageModal title={'Algo salió mal'} errorMessage={this.state.errorMessage} isOpen={this.state.errorMessageIsOpen} closeErrorModal={this.closeErrorModal.bind(this)} />
                </div>
                <Grid container>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h3">Hola {this.props.user.displayName}!</Typography>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12} className={classes.espacio}>
                        <Grid container direction="column" justify="center" alignItems="center">
                            <Grid item xs={12} md={12} lg={12}>
                                <Paper>
                                    <TabsPerfil
                                        user={this.props.user}
                                        perfil={this.props.perfil}
                                        romantico={this.state.romantico}
                                        ejecutivo={this.state.ejecutivo}
                                        familia={this.state.familia}
                                        preferencias={this.state.preferencias}
                                        perfilElegido={this.state.perfilElegido}

                                        handleChangeSwitch={this.handleChangeSwitch}
                                        aguaFria={this.state.aguaFria}
                                        champagne={this.state.champagne}
                                        gaseosa={this.state.gaseosa}
                                        vino={this.state.vino}
                                        bebidaElegida={this.state.bebidaElegida}
                                        sinseleccionarB={this.state.sinseleccionarB}
                                        handleBebida={this.handleBebida}

                                        chocolates={this.state.chocolates}
                                        golosinas={this.state.golosinas}
                                        fiambres={this.state.fiambres}
                                        pasteleria={this.state.pasteleria}
                                        acompañamientoElegido={this.state.acompañamientoElegido}
                                        sinseleccionarA={this.state.sinseleccionarA}
                                        handleAcompañamiento={this.handleAcompañamiento}

                                        siete={this.state.siete}
                                        nueve={this.state.nueve}
                                        once={this.state.once}
                                        trece={this.state.trece}
                                        limpiezaElegida={this.state.limpiezaElegida}
                                        sinseleccionarL={this.state.sinseleccionarL}
                                        handleLimpieza={this.handleLimpieza}

                                        uno={this.state.uno}
                                        dos={this.state.dos}
                                        tres={this.state.tres}
                                        cuatro={this.state.cuatro}
                                        tintoreriaElegida={this.state.tintoreriaElegida}
                                        sinseleccionarT={this.state.sinseleccionarT}
                                        handleTintoreria={this.handleTintoreria}


                                        guardarPerfil={this.guardarPerfil.bind(this)}
                                        perfilCompletado={this.props.perfilCompletado}
                                        callPerfilCompletado={this.props.callPerfilCompletado}


                                    />
                                </Paper>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </div>
        );
    }
}

Perfil.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Perfil);