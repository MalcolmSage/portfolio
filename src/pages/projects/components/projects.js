import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	// link: {
	// 	margin: theme.spacing(1, 1.5),
	// },
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	projectTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	projectText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
	links: {
		marginBottom: theme.spacing(2),
		border: `2px solid black`,
		borderRadius: '10%',
		width: 30,
	},
}));

const Projects = (props) => {
	const { projects } = props;
	const classes = useStyles();
	if (!projects || projects.length === 0) return <p>Can not find any projects, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={2} alignItems="flex-end">
					{projects.map((project) => {
						return (
							<Grid item key={project.id} xs={12} md={4}>
								<Card className={classes.card}>
									<Link
										color="textPrimary"
										href={'project/' + project.slug}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image="https://source.unsplash.com/random"
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.projectTitle}
										>
											{project.title.substr(0, 25)}
										</Typography>
										<div className={classes.projectText}>
											<Typography color="textSecondary">
												{project.excerpt.substr(0, 40)}...
											</Typography>
										</div>
										<div className={classes.projectText}>
										<Typography color="textSecondary">
												{project.tags.map((tag) => tag + ' ')}
										</Typography>
										</div>
									</CardContent>


									{/*Links  */}
									<Grid container justify='space-around' alignItems='flex-start' >
										<Box className={classes.links} bgcolor='darkgreen'>
											<Typography variant="body2" align='center'>
											<Link
												component={NavLink}
												to="/about"
												underline="none"
												// color="textPrimary"
											>
												<Box color="white">
													Git
												</Box>
											</Link>
											</Typography>
										</Box>
										<Box className={classes.links} bgcolor='darkred'>
											<Typography variant="body2" align='center'>
											<Link
												component={NavLink}
												to="/about"
												underline="none"
												// color="textPrimary"
											>
												<Box color="white">
													Blog
												</Box>
											</Link>
											</Typography>
										</Box>
										<Box className={classes.links} bgcolor='blue'>
											<Typography variant="body2" align='center'>
											<Link
												component={NavLink}
												to="/about"
												underline="none"
												// color="textPrimary"
											>
												<Box color="white">
													Live
												</Box>
											</Link>
											</Typography>
										</Box>
									</Grid>									
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Projects;