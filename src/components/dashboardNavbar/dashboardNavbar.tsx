import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const DashboardNavbar: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='inherit'>
                <Tabs
                    variant="fullWidth"
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Dashboard" href="/drafts" {...a11yProps(0)} />
                    <LinkTab label="Dashboard Two" href="/trash" {...a11yProps(1)} />
                    <LinkTab label="Dashboard Three" href="/spam" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
        </div>
    );
}
