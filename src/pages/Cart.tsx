import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <div>
      <h1 className="text-4xl">Cart Page</h1>
      <Link to="/" className="text-7xl text-red-900">
        back home
      </Link>

      <div className="mt-5">
        <Button asChild size="lg">
          <Link to="/">home button</Link>
        </Button>
      </div>
    </div>
  );
}
export default Cart;
