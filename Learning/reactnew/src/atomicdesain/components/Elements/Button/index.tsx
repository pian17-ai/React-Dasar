import type { ButtonProps } from "../../../../types/type"

export const Button = ({
    variant = 'bg-black',
    children = '...'
}: ButtonProps) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>{children}</button>
    )
}