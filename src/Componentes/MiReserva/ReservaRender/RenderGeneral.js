import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonIcon from '@material-ui/icons/Person';
import ReservaHelper from '../../../Utils/ReservaHelper'




const useStyles = makeStyles(theme => ({
    main: {


    },
    izq: {
        borderRight: "1px solid #e0e0e0",
        [theme.breakpoints.down('xs')]: {
            borderRight: "1px solid #ffffff",
        },
    },
    logo: {
        padding: theme.spacing(1),
        height: 120,
        width: 120,
    },
    reserva: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(0),
        },
    },
    botones: {
        //width: 150,
        //[theme.breakpoints.down('xs')]: {
        //    width: 140,
        //},
    },
    noreserva: {
        marginTop: theme.spacing(2),
    },
    reservaChekIn: {
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            //marginBottom: theme.spacing(2),
        },
    },
    tituloMobile: {
        display: "none",
        [theme.breakpoints.down('xs')]: {
            display: "block",
        },
    }
}));

export default function RenderGeneral(props) {
    const classes = useStyles();

    function getTotalPrice(checkIn, checkOut, precio) {
        return ReservaHelper.total(checkIn, checkOut, precio);
    }
    function fechas(fecha) {

        var fechaArray = fecha.split("-");
        var dia = fechaArray[2]
        var mes = fechaArray[1]
        var año = fechaArray[0]
        var fNueva = []
        var fecha2 = fNueva.concat(dia, mes, año)
        return fecha2.join("/")

    }
    function huespedes(h) {
        const huespedes = [];
        for (let i = 0; i < h; i++) {
            huespedes.push({
                name: ""
            });
        }
        return huespedes
    }

    function pad(n) {
        return n + 1
    }
    function fechaNow() {
        var date = new Date()
        var dia = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var fecha = year + "-" + pad(month) + "-" + dia;
        return fecha
    }

    function mostrarGeneral(fecha) {
        var now = fechaNow()
        var aFecha1 = fecha.split("-");
        var aFecha2 = now.split("-");
        var fFecha1 = Date.UTC(aFecha1[0], aFecha1[1] - 1, aFecha1[2]);
        var fFecha2 = Date.UTC(aFecha2[0], aFecha2[1] - 1, aFecha2[2]);
        var dif = fFecha1 - fFecha2;
        var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        if (dias >= 0)
            return (
                <Grid container direction="row"  >
                    {/*IZQUIERDA */}
                    <Grid item md={3} xs={12} className={classes.izq} >
                        <Grid container direction="row" justify="center" alignItems="center" >
                            <Grid item md={12} xs={12}>
                                <Typography align="center">Reserva: #000{props.nroReserva}</Typography>
                            </Grid>
                            <Grid item md={8} xs={5}>
                                <img src={props.logo} alt="logo" className={classes.logo} />
                            </Grid>
                            <Grid item md={12} xs={7}>
                                <Typography variant="body1" align="center" style={{ fontWeight: "bold" }}> Hotel {props.nombreHotel}</Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                    {/*Derecha */}
                    <Grid item md={8} xs={12}>
                        <Grid container direction="row">

                            <Grid item md={12} className={classes.reserva}>
                                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                                    <Grid item md={6} xs={12}>
                                        <Grid container direction="row" alignItems="center" justify="center">
                                            <Grid item md={6} xs={6}>
                                                <Button
                                                    size="small"
                                                    className={classes.botones}
                                                    startIcon={<AssignmentTurnedInIcon />}
                                                    onClick={props.checkInOpen}
                                                >
                                                    Check-In:
                                                        </Button>
                                            </Grid>
                                            <Grid item md={6} xs={4}>
                                                <Typography >{fechas(props.CheckIn)}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item md={6} xs={12}>
                                        <Grid container direction="row" alignItems="center" justify="center">
                                            <Grid item md={6} xs={6}>
                                                <Button
                                                    size="small"
                                                    className={classes.botones}
                                                    startIcon={<MeetingRoomIcon />}
                                                    onClick={props.checkOutOpen}
                                                >
                                                    Check-Out:
                                                        </Button>
                                            </Grid>
                                            <Grid item md={6} xs={4}>
                                                <Typography >{fechas(props.CheckOut)}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item md={12} xs={12} className={classes.reserva}>
                                <Grid container >
                                    <Grid item md={7} xs={9}>
                                        <Typography align="center" style={{ fontWeight: "bold" }}>Cantidad de Huespedes:</Typography>
                                    </Grid>
                                    <Grid item md={5} xs={3}>
                                        <Grid container  >
                                            {huespedes(props.huespedes).map((item, index) => (
                                                <Grid item key={index}>
                                                    <PersonIcon color="primary" />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item md={12} xs={12} className={classes.reserva}>
                                <Grid container justify="center" alignItems="center" >
                                    <Grid item  >
                                        <Typography variant="h5" style={{ fontWeight: "bold" }}>Importe Total:</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography variant="h5" color="primary" style={{ fontWeight: "bold" }}> ${getTotalPrice(props.CheckIn, props.CheckOut) * parseInt(props.precio)}</Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )




    }







    if (props.modo === "General")
        if ((props.nombreHotel && props.nroReserva && props.CheckIn && props.CheckOut && props.huespedes && props.precio) !== undefined)
        if (props.nombreHotel !== null)
            return (
                <div>
                    {mostrarGeneral(props.CheckOut)}
                </div>
            )
        else
            return (<div></div>)
    else
        return (<div></div>)
}




