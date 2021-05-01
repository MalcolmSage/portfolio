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
            position: 'relative',
        }
    },
	media: {
        width: '100%',
        height: 250,
        
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
    details: {
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            color: 'black',
        }
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

function AboutMe() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
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
            </Grid>
        </React.Fragment>
    );
}

export default AboutMe;