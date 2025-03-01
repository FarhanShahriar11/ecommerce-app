import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-base-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">E-Shop</Link>
        <div className="space-x-4">
          <Link href="/products" className="btn btn-ghost">Products</Link>
          <Link href="/cart" className="btn btn-ghost">Cart</Link>
          <Link href="/checkout" className="btn btn-ghost">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}
