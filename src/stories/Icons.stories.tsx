import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import { GitHubIcon, LinkedInIcon } from '../icons';
import { GitHub } from '@mui/icons-material';
import { color } from '../styles';

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
                <Grid item container spacing={2}>
                    <IconContainer Icon={LinkedInIcon} props={{ color: '#0A66C2' }} />
                    <IconContainer Icon={LinkedInIcon} props={{ color: color.magenta }} />
                    <IconContainer Icon={GitHub} />
                    <IconContainer Icon={GitHubIcon} props={{ color: color.magenta }} />
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
