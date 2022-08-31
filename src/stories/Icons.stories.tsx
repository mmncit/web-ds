import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { LinkedInIcon } from '../icons';

function IconContainer({ Icon, title = '', props }: any) {
    return (
        <Grid item container justifyContent="center" xs={3} sm={2} lg={1} direction="column">
            <Grid item style={{ textAlign: 'center' }}>
                <Icon fontSize="large" {...props} />
            </Grid>
            <Grid item style={{ textAlign: 'center' }}>
                <Typography variant="caption">{Icon.name}</Typography>
                <Typography variant="body2">{title}</Typography>
            </Grid>
        </Grid>
    );
}

const IconBoard = () => {
    return (
        <Grid container>
            <Grid container>
                <IconHeader title="Brands" />
                <Grid item container spacing={1}>
                    <IconContainer Icon={LinkedInIcon} props={{ color: 'primary' }} />
                    <IconContainer Icon={LinkedInIcon} />
                </Grid>
            </Grid>
        </Grid>
    );
};

const IconHeader = ({ title }: { title: string }) => (
    <>
        <Grid item xs={12} style={{ padding: 16, paddingTop: 32, paddingBottom: 8 }}>
            <Typography variant="h4">{title}</Typography>
        </Grid>
    </>
);

storiesOf('Iconography', module).add('Icons', () => <IconBoard />);
