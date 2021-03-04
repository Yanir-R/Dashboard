import React from 'react'
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
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from '../listitems/listitems'
import { Deposits } from '../deposits/deposits';
import { Orders } from '../orders/orders';
import { Userlogs } from '../userlogs/userlogs';
import { ThemeProvider } from '@material-ui/styles'
import { Avatar, Box, createMuiTheme } from '@material-ui/core'
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

interface dashboardProps { }
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    timeStampCenter: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: "none",
        paddingLeft: `calc(1em)`,
        [theme.breakpoints.up("md")]: {
            display: "flex"
        }
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
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
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
    avatarCSS: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            padding: '0 8px',
        },
    },
}));
const darkTheme = createMuiTheme({ palette: { type: 'dark' } })
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ['Sunday', ' Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const timeStemp = (): string => {
    const d = new Date()
    const dateTime = d.toLocaleTimeString('en-US') + ' ' + days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getMonth() + ' ' + d.getFullYear()
    return dateTime

}

export const Dashboard: React.FC<dashboardProps> = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <ThemeProvider theme={darkTheme} >
                <CssBaseline />
                <AppBar color="inherit" position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
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
                            Dashboard
            </Typography>
                        <Box className={classes.timeStampCenter}>
                            {timeStemp()}
                        </Box>
                        <div className={classes.sectionDesktop}>
                            <Avatar
                                alt="Remy Sharp"
                                src="https://media-exp1.licdn.com/dms/image/C4E03AQF0Nes7_HyWxg/profile-displayphoto-shrink_800_800/0/1605374881632?e=1620259200&v=beta&t=3LMpueN_31ny1XQxP3vciv27Oi3OoMckXdQNKOqEAG8"
                            />
                        </div>
                        <div className={classes.sectionDesktop}>
                            <Typography className={classes.title} variant="body1" noWrap>
                                Material-UI
            </Typography>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <KeyboardArrowDownIcon />
                            </IconButton>
                        </div>
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
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth={false} className={classes.container}>
                        <Grid container spacing={2}>
                            {/* Chart */}
                            <Grid item xs={12} md={6} lg={5}>
                                <Paper className={fixedHeightPaper}>

                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={2} lg={2}>
                                <Paper className={fixedHeightPaper}>
                                    <Deposits />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={5}>
                                <Paper className={fixedHeightPaper}>
                                    <Userlogs />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Orders />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </ThemeProvider>
        </div>
    );
}