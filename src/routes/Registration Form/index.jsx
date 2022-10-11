import FormRegister from './components/Form';
import RightContent from './components/RightContent';
import { Section, Wrapper } from './style';

// import Grid from '@mui/material/Grid';
// <Grid container spacing={2}>
//     <Grid item xs={6}>
//         <span>xs=8</span>
//     </Grid>
//     <Grid item xs={6}>
//         <span>xs=4</span>
//     </Grid>
// </Grid>

const RegistrationForm = () => {
    return (
        <Section>
            <Wrapper>
                <FormRegister />
                <RightContent />
            </Wrapper>
        </Section>
    );
};

export default RegistrationForm;
