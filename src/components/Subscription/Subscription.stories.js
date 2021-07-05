import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

export default {
    title: "Subscription",
}

export const Small = () => (
    <>
        <Input size="small" placeholder="Small input"/>
        <Button variant="primary">Primary</Button>
    </>
)