


function AddTask(props) {
    return (
        <div className="row">
            <h4> ADD TASK : </h4>
            <div className="col-12">
                <input
                    className="form-control"
                    type='text'
                    value={props.task}
                    onChange={(e) => props.setTask(e.target.value)}
                    placeholder='Task to add'
                />
            </div>
            <div className="col-12">
                <button className='btn btn-dark' onClick={() => props.addTaskInTodo()}> <i className="bi bi-plus-circle-fill"></i>  </button>
            </div>
        </div>
    )
}
export default AddTask;