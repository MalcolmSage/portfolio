import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
	media: {
        minWidth: 250,
        width: 250,
        height: 250,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 300,
        }
        
	},
	links: {
		padding: theme.spacing(1, 3),
        margin: 4
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
			<Grid container spacing={2} justify='flex-start'>
                <Grid item xs={12} md={12} >
                    <Card className={classes.root} square elevation='0'>
                        <CardMedia
                        
                            className={classes.media}
                            image="https://media-exp1.licdn.com/dms/image/C5603AQGZZpjpvV2tOw/profile-displayphoto-shrink_800_800/0/1607277352379?e=1625097600&v=beta&t=vq8TcTZ3Dwt4Ed0ZzyDUsYE7kU_SfTJDO3gKSuOyQNM"
                            title="Malcolm Sage"
                            />
                        <CardContent className={classes.details}>
                                <Typography variant="h5" gutterBottom>
                                Software Engineer | Full-Stack Developer
                                </Typography>

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
                                Malcolm comes prepackaged with a strong sense for attention to detail, critical thinking and problem solving, communication skills, leadership, and a determination to grow. He values maintaining broad knowledge to ensure he can pick the right tool for the job, so he is deeply focused on learning and improving in multiple programming languages, libraries and frameworks.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default About;