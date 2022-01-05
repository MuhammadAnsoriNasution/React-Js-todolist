import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import Detail from './Detail';
import Form from './Form';

export default function FormDialog({ handleClose, open, initialValue, setInitialValue, handleSave, datanew, handleDelete}) {
  const [detail, setDetail] = React.useState(true)
  React.useEffect(() => {
    if (datanew){
      setDetail(false)
    }
  }, [])
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogTitle>{detail ? 'Detail' : 'Form'}</DialogTitle>
        <DialogContent>
          {detail ? <Detail data={initialValue} /> : <Form initialValue={initialValue} setInitialValue={setInitialValue} />}
        </DialogContent>

        <DialogActions>
          {
            detail ?
              <div className='flex justify-content-row'>
                <div className='mr-2'>
                  <Button onClick={() => setDetail(false)} variant="contained">Update</Button>
                </div>
                {!initialValue.status && <Button onClick={() => handleDelete(initialValue)} variant="contained" color="error">Delete</Button>}
              </div>
              :
              <div>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
          }
        </DialogActions>

      </Dialog>
    </div>
  );
}