import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

export default function DeleteItemButton({ onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onClick}>
        Delete
      </Button>
      <Button variant="outlined" startIcon={<EditIcon />} onClick={onClick}>
        Edit
      </Button>
    </Stack>
  );
}