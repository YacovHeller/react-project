// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'liבגghtpink',
};

export default function Posts() {
    const [posts, setPosts]=useState('')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <Grid container spacing={2}>
            <Grid xs={4}>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <Divider />

                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider dark />
                    <ListItem button>
                        <ListItemText primary="Spam" />
                    </ListItem>
                </List>
            </Grid>
            <Grid xs={6} style={{ backgroundColor: 'red' }}>
                div
            </Grid>
        </Grid>
    );
}
