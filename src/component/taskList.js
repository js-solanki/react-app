function TaskList(props) {

    return (
        <div className="list-group-item" >
            <div className="row">
                <div className='col-11' >{props.item.text}</div>
                <div className='col-1' >
                    <i onClick={() => props.removeTask(props.index)} className="bi bi-trash3"></i>
                </div>
            </div>
        </div>
    );

}

export default TaskList;