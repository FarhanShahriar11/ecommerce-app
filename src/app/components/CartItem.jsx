export default function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg shadow-md">
      <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
      <div>
        <h2 className="font-bold">{item.name}</h2>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
          className="input input-bordered w-16"
        />
        <button onClick={() => removeItem(item._id)} className="btn btn-error btn-sm">
          Remove
        </button>

      </div>
    </div>
  );
}
