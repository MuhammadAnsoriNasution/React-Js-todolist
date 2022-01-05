import { FormControlLabel, Switch } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export default function Form({initialValue, setInitialValue }) {
  return (
    <div>
      <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setInitialValue(p => ({ ...p, title: e.target.value }))}
            value={initialValue.title}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setInitialValue(p => ({ ...p, description: e.target.value }))}
            value={initialValue.description}
          />
          <FormControlLabel
            control={
              <Switch checked={initialValue.status} onChange={(e) => setInitialValue(p => ({ ...p, status: e.target.checked }))} name="antoine" />
            }
            label="Status"
          />
    </div>
  );
}