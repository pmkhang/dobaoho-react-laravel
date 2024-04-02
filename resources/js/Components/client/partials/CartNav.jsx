import { Link } from "@inertiajs/react";
const CartNav = ({ countProductCart }) => {
    return (
        <li>
            <Link
                href={route("clientCart")}
                className="py-2 px-3 transition-all cursor-pointer text-white flex items-center gap-2 rounded-lg bg-primary"
            >
                <i className="fa-solid fa-cart-shopping text-xl "></i>
                {countProductCart > 0 && `(${countProductCart})`} Giỏ hàng
            </Link>
        </li>
    );
};

export default CartNav;
