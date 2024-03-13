import { Button as FlowbiteButton } from "flowbite-react";
const Button = ({
    color = "blue",
    text,
    className,
    ...props
}) => {
    return (
        <FlowbiteButton
            className={`w-full ${className}`}
            color={color}
            {...props}
        >
            {text}
        </FlowbiteButton>
    );
};

export default Button;
