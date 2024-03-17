const formatCurrency = (number) => {
    if (typeof number === "undefined" || number === null) {
        return "0đ";
    }
    return number.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
};

export default formatCurrency;
