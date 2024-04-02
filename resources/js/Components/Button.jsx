import { Button as FlowbiteButton } from "flowbite-react";
const Button = ({ color = "blue", text, className, ...props }) => {
    return (
        <FlowbiteButton
            type="submit"
            className={`w-full focus:ring-0 ${className} `}
            color={color}
            {...props}
        >
            {text}
        </FlowbiteButton>
    );
};

export default Button;
