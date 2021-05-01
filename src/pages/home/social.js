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
        width: '25%',
        height: 78,
        
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
    details: {
        position: 'absolute',
        top: '-10px',
        left: '90px',
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

function Social() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} sm={4}>
				<Grid container spacing={1} justify='center' direction='column'>
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardMedia
                                    className={classes.media}
                                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/kJD/sbH/zc3/1NT/hYX/oKD/4uL/v7//9vb/6en/3Nz/8/P/x8f/lZX/qKj/rKz/b2//PDz/dXX/XV3/iIj/YWH/U1P/Cgr/mpr/7u7/WVn/Jyf/uLj/5OT/NTX/SEj/aWn/GRn/fX3/UFD/RUX/LS3/ICD/R0f/gID/Z2f/ERH/GxucgkMeAAAEt0lEQVR4nO2da1fiMBCGQ0ttactN7iI3Fy+r+P//3oKCC4ilmUyazO77fPMcTfIcsEkmk6lSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8F+TpukiWSTRlvoH4RHdduf4x89f2P3q9i+SZtp0Pfhz0izJo0Y3bgfD9Wi8XNYmNQYmm97yftQfBkHcmTfyPMnSir2aWRTGw7en2YbDpxSbl+W4347nUWb7U05b8WjJ8kGRma3WnbolzzQcO3U7ZhVn7H7NoWurMwY5r+Cda6ELDBi/rPmLa5vLhFyCsWuTH+nzCPZdexQw5hB8c21RCIPig2uHKxh/UduuDa4yNxOsux5/CaZGhr9cD78EDyaCgevRl8JgddN0PfZyGHyIPq7VLkH/T3x2PfSSdKmCieuRl+WRathxPfKyTKhxjlvXIy8N9WkqYTL8pEMTnLoed3mIi9PI9bjLM6MZinnQbKE9anyLPRVBe9Tcux62Bi2SodvQrx4xydD1qHW4oQhmrketwz3FUNBkUattKIYt16PWgmIoaTqkbRF5IhiDGUszV6FMiGuWntvqhqWda9QJhjx7p0Cp/ImlpWIaBMNHlp6DXVMhS1OFUKZ8nn+gD0OVWt9MDwmGPD0H+9Yiy1GttXND26eQtx4YqmzA0+RFCOE2phhGcNxmw14KzrO+IdPCOzht1drkONE3ZFp4nxmqvMfT7je8MVSqy9PwOfqGTFuL74YqtZL6oB+LsmeoVN3C5Ki/uWjwdHzR0Ma5nf7mwq6hyrgjeZFvhmwdHNDfPjEtsn42ZJ4c9SOmFRiqhHHnqL9BrMKQc3L01VA1uXaO+oZMqTTXDLeTI89WW/+QlOkxcN2QKXdOP4xRoaHKGHLk/TbkmBx9NzTvTz8UVbWhyn8bdaR/vla5oeGhswBDw9C4/4avhh35bmj+LG17bZgxnJF4PVs4WtMwXUOobF2qbyhtb6GfJ4z9YUkKDTlPh700NJ0CT9A3lBZr049ESYuX+mbIfyVOPyIs7dxCP6pv8ezJSmKG/smMtPND/dO1f/8MWNg5PsGQ6e5hVbkYlARTno6ryqeh3Cnh6fmvod3rmpQLejw9HwyZdoE/Qsn6Ys1NtF63gJK5x5hfamkKPIaSfSkrR5iSQSsrz5uSBc2Uq19R8R5KJrus+xaU2wiy7sxQrliKuvdEuhUk6u7aO8VQ1P3DEclQ0h1SyoQv6x4wreSApLvc+pG2HZImxAXJUNJ0QRKUVBfjiWYoqLaJTk7LMXLq01B2FjvkPGqoFWnF1IkiXOvaI6XWl34uzQEp9doSsqGQmnukohh7/K/tuYO2ZNvjaYnkE8xqtEpYuRmW3fe3DvQBo+/oDp8rQe9gqOntdy1oYrW9U1hTl5hhEazkYIUIrYjZBRI/l28rsyrQp/j4SGV7b8AnqWfLmwmtBl0xc3/CiyPqlvcaaetusHTrtuk9xJHllwc1F/Xu3et4+V6p2Gz11o7necVvRpou8rwRdj5e9/TYe+Z53dOOyabXG4xuhkG7Ezp541MRzXSaJIvo65Vd8+N3dMVxeE7j67VdUZJsVbx7bRcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUzB8ommwuXNQogAAAAABJRU5ErkJggg=="
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
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardMedia
                                    className={classes.media}
                                    image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                                    title="Image title"
                                />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        GitHub
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Malcolm Sage
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.root}>
                            <CardMedia
                                    className={classes.media}
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iNSrTK9d6cQ88o2PDWvTYKZVaqtBKt10Ow&usqp=CAU"
                                    title="Image title"
                                />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Contact Me
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Malcolm Sage
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Social;