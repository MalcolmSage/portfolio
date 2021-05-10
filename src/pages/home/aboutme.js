import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import { Paper } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        height: 140,
        width: 140,
        marginBottom: 10,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
	media: {
        width: '100%',
        height: '100%',
        
	},
    education: {
        padding: 5,
        margin: 6,
    },
    description: {
		borderTop: `1px solid ${theme.palette.divider}`,
    }
  }));

function AboutMe() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} sm={6}>
                <Grid container spacing={.5}  >
                    <Grid container spacing={1} >
                        <Grid item>
                            <Card className={classes.root}>
                                <CardMedia
                                        className={classes.media}
                                        image="https://media-exp1.licdn.com/dms/image/C5603AQGZZpjpvV2tOw/profile-displayphoto-shrink_800_800/0/1607277352379?e=1625097600&v=beta&t=vq8TcTZ3Dwt4Ed0ZzyDUsYE7kU_SfTJDO3gKSuOyQNM"
                                        title="Malcolm Sage"
                                    />
                            </Card>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" gutterBottom>
                                Software Engineer | Full-Stack Developer
                            </Typography>
                            <Card className={classes.education}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="body2" >
                                            General Assembly, SE Immersive Program
                                        </Typography>
                                        <Typography variant='caption' color="textSecondary" gutterBottom>
                                            02/2021 - 04/2021
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                            <Card className={classes.education}>
                            <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="body2" >
                                            Harvard, CS50's Intro to CS
                                        </Typography>
                                        <Typography variant='caption' color="textSecondary" gutterBottom>
                                            04/2021 - PRESENT
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>  
                    </Grid>
                    <Grid item xs={12} sm container className={classes.description}>
                        <Grid item container spacing={2}>
                            <Grid item>
                                <Typography variant="body">
                                Malcolm Sage is a forward-thinking software engineer, with a knack for problem solving and a strong work ethic thanks to his nearly a decades worth of military experience.
                                </Typography>
                                <Grid container justify='flex-end'>
                                    <Box bgcolor="#4E5B31" p={.5} marginTop='11px' borderRadius="borderRadius">
                                        <Typography variant="body2" align='right' bgcolor="#4E5B31">
                                        <Link
                                            component={NavLink}
                                            to="/about"
                                            underline="none"
                                            // color="textPrimary"
                                        >
                                            <Box color="white">
                                                More
                                            </Box>
                                        </Link>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default AboutMe;


{/* <Box bgcolor="darkolivegreen" p={.2}>
                    <Grid container justify='center' direction='column'>
                        <Card className={classes.root} >
                            <CardMedia
                                    className={classes.media}
                                    image="https://media-exp1.licdn.com/dms/image/C5603AQGZZpjpvV2tOw/profile-displayphoto-shrink_800_800/0/1607277352379?e=1625097600&v=beta&t=vq8TcTZ3Dwt4Ed0ZzyDUsYE7kU_SfTJDO3gKSuOyQNM"
                                    title="Image title"
                                />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        About Me
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Malcolm Sage
                                    </Typography>
                                </CardContent>
                            </div>
                            </Card>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        About Me
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Malcolm Sage
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                </Box>                 </Card>
                        <Card className={classes.root}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        About Me
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Malcolm Sage
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                </Box> */}