import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

export default function DeleteItemButton({ onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={onClick} sx={{ backgroundColor: '#b96eaa'}}>
        Delete
      </Button>
      {/* <Button variant="contained" startIcon={<EditIcon />} onClick={onClick} sx ={{ backgroundColor: '#b96eaa'}}>
        Edit
      </Button> */}
    </Stack>
  );
}