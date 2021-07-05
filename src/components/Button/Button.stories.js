import {Button} from "./Button";
import {Center} from "../Center/Center";

export default {
    title: "Button",
    component: Button,
    args:{
        children: "Button"
    },
    // decorators: [story => <Center>{story()}</Center>]
}

// export const Primary = () => <Center><Button variant="primary">Primary</Button></Center>
// export const Secondary = () => <Center><Button variant="secondary">Secondary</Button></Center>
// export const Success = () => <Center><Button variant="success">Success</Button></Center>
// export const Danger = () => <Center><Button variant="danger">Danger</Button></Center>

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: "primary",
    // children: "PrimaryA"
}

export const PrimaryB = Template.bind({})
PrimaryB.args = {
    ...PrimaryA.args,
    // children: "PrimaryB"
}

export const PrimaryC = Template.bind({})
PrimaryC.args = {
    variant: "secondary",
    // children: "PrimaryC"
}