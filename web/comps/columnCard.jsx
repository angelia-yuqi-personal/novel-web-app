import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        maxWidth: 160,
        margin: `0 auto 5px`
    },
    content:{
        padding: `4px 4px 0px`,
        fontSize: `0.8em`,
    },
    btn:{
        marginRight: 0,
        padding: 4
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    singleLine:{
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
    },
    author:{
        textAlign: `right`,
        color: `#999`
    },
    action:{
        justifyContent: 'flex-end',
        padding: `4px`
    }
});
function ColumbCard(props) {
    const { classes,onClick } = props
    return (<Card className={classes.card}>
        <CardMedia
            className={classes.media}
            image="https://qidian.qpic.cn/qdbimg/349573/23813/180"
            title="Contemplative Reptile"
        />
            <CardContent className={classes.content}>
                <Typography className={classes.singleLine} variant="title" component="p">
                    狂神狂神狂神狂神狂神
                </Typography>
                <Typography className={classes.singleLine+' '+classes.author} component="p">
                    唐家三少
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
            <Button onClick={onClick} className={classes.btn} variant="raised" size="small" color="primary">
                    阅读
            </Button>
            </CardActions>
    </Card>)
}

export default withStyles(styles)(ColumbCard);