import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Data from '../project.json'


const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
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
		marginRight: 10
	},
}));



const Projects = () => {
	const projects = Data;
	const classes = useStyles();

	return (
		<React.Fragment>
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
											image={project.image}
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
												{project.content.substr(0, 40)}...
											</Typography>
										</div>
										<div className={classes.projectText}>
										<Typography color="textSecondary">
												{project.tags.slice(0, 3).map((tag) => '[' + tag + ']')}
										</Typography>
										</div>
									</CardContent>


									{/*Links  */}
									<Grid container justify='flex-end' alignItems='flex-start' >
										<Box className={classes.links} bgcolor='darkgreen'>
											<Typography variant="body2" align='center'>
											<Link
												href={project.git}
												underline="none"
												// color="textPrimary"
											>
												<Box color="white">
													Git
												</Box>
											</Link>
											</Typography>
										</Box>
										{/* <Box className={classes.links} bgcolor='darkred'>
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
										</Box> */}
										{/* <Box className={classes.links} bgcolor='blue'>
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
										</Box> */}
									</Grid>									
								</Card>
							</Grid>
						);
					})}
				</Grid>
		</React.Fragment>
	);
};
export default Projects;