import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Preferencias from './Preferencias';
import { Grid, Button } from '@material-ui/core';
import SeleccionPerfil from './SeleccionPerfil'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormularioDatos from './FormularioDatos';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 800,
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    formControl: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function TabsPerfil(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const openPreferencias = () => {
        setValue(2);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label=" Datos" {...a11yProps(0)} />
                    <Tab label="Perfiles" {...a11yProps(1)} />
                    <Tab label="Preferencias" wrapped {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>

                    {/*FORMULARIO*/}
                    <FormularioDatos
                        user={props.user}
                        modo={"Perfil"}
                        perfilCompletado={props.perfilCompletado}
                        callPerfilCompletado={props.callPerfilCompletado}
                        data={props.data}
                    />

                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container  >
                        <Grid item xs={12} md={6}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                {/*PERFILES*/}
                                <FormLabel component="legend">Seleccione su tipo de Perfil</FormLabel>
                                <FormGroup tag="div">
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={props.romantico} onChange={props.handleChangeSwitch} name="romantico" />}
                                        label="Romantico"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={props.ejecutivo} onChange={props.handleChangeSwitch} name="ejecutivo" />}
                                        label="Ejecutivo"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={props.familia} onChange={props.handleChangeSwitch} name="familia" />}
                                        label="Familia"
                                    />
                                    <FormControlLabel
                                        control={<Switch color="primary" checked={props.preferencias} onChange={props.handleChangeSwitch} name="preferencias" />}
                                        label="Mis Preferencias"
                                    />
                                </FormGroup>

                            </FormControl>
                            <Grid container justify="center" alignItems="center">
                                <Button variant="outlined" color="secondary" onClick={props.guardarPerfil} >Guardar</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SeleccionPerfil
                                romantico={props.romantico}
                                ejecutivo={props.ejecutivo}
                                familia={props.familia}
                                preferencias={props.preferencias}
                                aguaFria={props.aguaFria}
                                champagne={props.champagne}
                                gaseosa={props.gaseosa}
                                vino={props.vino}
                                bebidaElegida={props.bebidaElegida}
                                chocolates={props.chocolates}
                                golosinas={props.golosinas}
                                fiambres={props.fiambres}
                                pasteleria={props.pasteleria}
                                siete={props.siete}
                                nueve={props.nueve}
                                once={props.once}
                                trece={props.trece}
                                limpiezaElegida={props.limpiezaElegida}
                                handleLimpieza={props.handleLimpieza}
                                uno={props.uno}
                                dos={props.dos}
                                tres={props.tres}
                                cuatro={props.cuatro}
                                tintoreriaElegida={props.tintoreriaElegida}
                                handleTintoreria={props.handleTintoreria}
                                openPreferencias={openPreferencias}
                                sinseleccionarB={props.sinseleccionarB}
                                sinseleccionarA={props.sinseleccionarA}
                                sinseleccionarL={props.sinseleccionarL}
                                sinseleccionarT={props.sinseleccionarT}
                            />
                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    {/*PREFERENCIAS*/}
                    <Preferencias
                        aguaFria={props.aguaFria}
                        champagne={props.champagne}
                        gaseosa={props.gaseosa}
                        vino={props.vino}
                        bebidaElegida={props.bebidaElegida}
                        handleBebida={props.handleBebida}
                        chocolates={props.chocolates}
                        golosinas={props.golosinas}
                        fiambres={props.fiambres}
                        pasteleria={props.pasteleria}
                        acompañamientoElegido={props.acompañamientoElegido}
                        handleAcompañamiento={props.handleAcompañamiento}
                        siete={props.siete}
                        nueve={props.nueve}
                        once={props.once}
                        trece={props.trece}
                        limpiezaElegida={props.limpiezaElegida}
                        handleLimpieza={props.handleLimpieza}
                        uno={props.uno}
                        dos={props.dos}
                        tres={props.tres}
                        cuatro={props.cuatro}
                        tintoreriaElegida={props.tintoreriaElegida}
                        handleTintoreria={props.handleTintoreria}
                        sinseleccionarB={props.sinseleccionarB}
                        sinseleccionarA={props.sinseleccionarA}
                        sinseleccionarL={props.sinseleccionarL}
                        sinseleccionarT={props.sinseleccionarT}
                    />
                </TabPanel>
            </SwipeableViews>

        </div>
    )
}