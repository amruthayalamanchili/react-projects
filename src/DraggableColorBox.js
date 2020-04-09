import React from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    root:{
        display: 'inline-block',
		position: 'relative',
		width: '20%',
		height: "25%",
		margin: '0 auto',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-4px'
    }
}
function DraggableColorBox(props){
    return(
        <div className = {props.classes.root} style = {{background:props.color}}>
        {props.color}
        </div>
    )
}
export default withStyles(styles)(DraggableColorBox);