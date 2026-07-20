import type { ButtonProps } from "../../../../types/type"

export const Button = ({
    className = 'bg-black',
    children = '...'
}: ButtonProps) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}>{children}</button>
    )
}