import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Habit from "../Habit";

import { Container, Top, CreateHabit } from './style';
import { AddOutline } from 'react-ionicons';


export default function PageHabits() {

    return (
        <Container>
            <Header />
            <Top>
                <Title text={"Meus hábitos"} />
                <CreateHabit>
                    <AddOutline
                        color='#fff'
                        width="25px"
                    />
                </CreateHabit>
            </Top>

            <Habit />
            <Habit />
            <Habit />
            <Habit />

            {/* <BildHabit /> */}
            <Menu />
        </Container>
    )
}
