import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div style={{ minWidth: "125px", maxWidth: "125px" }}>
        <img
          src={item.imgUrl}
          alt={item.name}
          style={{
            width: "125px", // Fixed width
            height: "85px", // Fixed Height
            objectFit: "cover",
          }}
        />
      </div>

      <div className="me-auto">
        <div className="fw-bold">{item.name}</div>
        {quantity > 1 && (
          <span
            className="text-secondary fw-light"
            style={{ fontSize: "0.8rem" }}
          >
            x{quantity}
          </span>
        )}
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>

      <div className="d-flex flex-column align-items-end">
        <div className="fw-bold">{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          className="mt-2"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </div>
    </Stack>
  );
}
