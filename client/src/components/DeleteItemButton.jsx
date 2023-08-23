import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';

export default function DeleteItemButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
  );
}