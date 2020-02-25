import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    textCenter: {
        textAlign: 'center'
    },
    iconRight: {
        marginLeft: theme.spacing(1)
    },
    iconLeft: {
        marginRight: theme.spacing(1)
    },

    form: {
        paddingBottom: theme.spacing(8)
    },
    slideContent: {
        minHeight: 250
    }
}))


export default useStyles;