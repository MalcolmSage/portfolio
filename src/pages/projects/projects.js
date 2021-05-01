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
	cardMedia: {
        width: '100%',
        height: 250,
        
	},
	link: {
		margin: theme.spacing(1, 1.5),
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

function Project() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} md={12}>
                <Card className={classes.root}>
                    <CardMedia
                            className={classes.cardMedia}
                            image="https://i.redd.it/v2cmfx8rbdv11.jpg"
                            title="Image title"
                        />
                    <CardContent className={classes.cardContent}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Project
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Description
                            </Typography>
                        </CardContent>
                    </div>
                    </CardContent>
                </Card>
            </Grid>
        </React.Fragment>
    );
}

export default Project;