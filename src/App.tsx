import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";

export default function App() {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <div>
      <h1 className="text-white bg-blue-800">helloWorld!</h1>

      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log("it worked!!!")}
      >
        Click me
      </Button>
    </div>
  );
}
