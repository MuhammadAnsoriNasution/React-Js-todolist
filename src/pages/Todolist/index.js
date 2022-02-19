import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { createData, deleteData, getData, updateData } from '../../store/todolist/actions';
import FormDialog from './Dialog';
import Table from './Table'
function Home() {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.todolist)
  const [open, setOpen] = useState(false);
  const [datanew, setNew] = useState(false)
  let dataDefault = {
    id: 0,
    title: '',
    description: '',
    status: false,
  }

  const [initialValue, setInitialValue] = useState(dataDefault)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setInitialValue(dataDefault)
    setNew(false)
  };

  const handleSave = () => {
    if (initialValue.id > 0) {
      dispatch(updateData(initialValue, cbSuccess))
    } else {
      dispatch(createData(initialValue, cbSuccess))
    }

  }
  const cbSuccess = (status, message) => {
    handleClose()
    Swal.fire(
      `${message}`,
      `Your file has been ${message}.`,
      'success'
    )
  }
  const handleShowForm = (data) => {
    setInitialValue(data)
    handleClickOpen()
  }
  const handleClickOpenCreate = () => {
    handleClickOpen()
    setNew(true)
  }

  const handleDelete = (data) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteData(data.id))
      }
    })
    handleClose()
  }
  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className="m-5">
      <div className='mb-2'>
        <Button variant="contained" onClick={() => handleClickOpenCreate()}>Create new data</Button>
        {
          open && <FormDialog
            handleClose={() => handleClose()}
            open={open}
            initialValue={initialValue}
            setInitialValue={setInitialValue}
            handleSave={() => handleSave()}
            datanew={datanew}
            handleDelete={(data) => handleDelete(data)}
          />
        }
      </div>
      <Table data={data} handleDelete={handleDelete} handleShowForm={handleShowForm} />
    </div>
  );
}

export default Home;
