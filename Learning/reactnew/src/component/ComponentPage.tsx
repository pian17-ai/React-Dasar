import type { ReactNode } from "react";

type ButtonProps = {
    variant?: string;
    children?: ReactNode;
}

const Button = ({
    variant = 'bg-black',
    children = '...'
}: ButtonProps) => {
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}>{children}</button>
    )
}

function ComponentPage() {
  return (
    <>
    <div className="flex gap-x-3">
        <Button variant="bg-red-700">Hallo</Button>
        <Button variant="bg-slate-700">Kubo</Button>
        <Button></Button>
    </div>
    </>
  );
}

export default ComponentPage;
