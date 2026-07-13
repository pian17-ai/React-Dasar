import { Button } from "../atomicdesain/components/Elements/Button";

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
