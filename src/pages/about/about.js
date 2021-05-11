import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
	media: {
        minWidth: 290,
        width: 290,
        height: 290,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 300,
        }
        
	},
    education: {
		padding: theme.spacing(1, 3),
        margin: 4,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
}));

function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
                <Grid item xs={12} md={12} >
                    <Card className={classes.root} square elevation=''>
                        <CardMedia
                        
                            className={classes.media}
                            image="https://media-exp1.licdn.com/dms/image/C5603AQGZZpjpvV2tOw/profile-displayphoto-shrink_800_800/0/1607277352379?e=1625097600&v=beta&t=vq8TcTZ3Dwt4Ed0ZzyDUsYE7kU_SfTJDO3gKSuOyQNM"
                            title="Malcolm Sage"
                            />
                        <CardContent className={classes.details}>
                                <Typography variant="h5" gutterBottom>
                                Software Engineer | Full-Stack Developer
                                </Typography>
                                <Card className={classes.education}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="button" >
                                                General Assembly, SE Immersive Program
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='caption' color="textSecondary" gutterBottom>
                                                02/2021 - 04/2021
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='body2'>
                                                Applied skills in JavaScript, Python, React and Django in a 500-hour full-time course.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <Card className={classes.education}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="button" >
                                                Harvard, CS50's Introduction to Computer Science
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='caption' color="textSecondary" gutterBottom>
                                                04/2021 - PRESENT
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='body2'>
                                                Trained to think algorithmically and solve problems efficiently in areas such as: abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Card>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Card className={classes.root} square elevation='1'>
                        <CardContent className={classes.details}>
                                <Typography variant="h4" gutterBottom>
                                Who is Malcolm Sage?
                                </Typography>
                                <Typography variant="h6" color="textSecondary" paragraph>
                                Malcolm Sage is a forward-thinking software engineer, with a knack for problem solving and a strong work ethic thanks to his nearly a decades worth of military experience.
                                </Typography>
                                <Typography variant="h6" color="textSecondary" paragraph>
                                Malcolm comes prepackaged with a strong sense for attention to detail, critical thinking, communication skills, leadership, and a determination to grow. He values maintaining broad knowledge to ensure he can pick the right tool for the job, so he is deeply focused on learning and improving in multiple programming languages, libraries and frameworks.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
        </React.Fragment>
    );
}

export default About;