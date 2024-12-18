import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { api } from "./utils/trpc";

function App() {
  const greetQuery = api.greeting.useQuery();

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        {greetQuery.isLoading ? "Loading" : greetQuery.data}
      </p>
      <Button>asdf</Button>
      <Toaster richColors />
    </>
  );
}

export default App;
