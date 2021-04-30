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
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'black',
        // backgroundColor: 'white'
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

function Contact() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} sm={4}>
                <Card className={classes.root}>
                    <CardMedia
                            className={classes.media}
                            image="https://cdn-aobcg.nitrocdn.com/VkHnSmbyoGgsRirOAQhqsnGAtWTvurUj/assets/static/optimized/rev-4233032/wp-content/uploads/2018/10/youtube-graphic-design-e1539584752287.jpg"
                            title="Image title"
                        />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Youtube
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

export default Contact;