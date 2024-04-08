

function Buttons(props){

    function fieldName(){
        props.filter(props.title)

    }

    return(
        <button className="bg-slate-800 text-white p-2 rounded-lg" onClick={fieldName} >{props.title} </button>
    )
}

export default Buttons;