import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import {
    CodeIcon,
    EnvelopeIcon,
    GitHubIcon,
    LinkedInIcon,
    BLetterIcon,
    SLetterIcon,
} from '../icons';
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
                <Stack spacing={5} direction="row">
                    <IconContainer Icon={LinkedInIcon} props={{ color: '#0A66C2' }} />
                    <IconContainer Icon={LinkedInIcon} props={{ color: color.magenta }} />
                    <IconContainer Icon={GitHubIcon} props={{ color: color.magenta }} />
                    <IconContainer Icon={BLetterIcon} props={{ color: color.magenta }} />
                    <IconContainer Icon={SLetterIcon} props={{ color: color.magenta }} />
                </Stack>
                <IconHeader title="Computer Science" />
                <Stack spacing={5} direction="row">
                    <IconContainer Icon={CodeIcon} props={{ color: color.dkblue }} />
                </Stack>
                <IconHeader title="Contact" />
                <Stack spacing={5} direction="row">
                    <IconContainer Icon={EnvelopeIcon} props={{ color: color.plum }} />
                </Stack>
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
