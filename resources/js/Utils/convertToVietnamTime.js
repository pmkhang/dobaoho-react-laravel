const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: false,
};

const convertToVietnamTime = (utcDateTimeString) => {
    const offset = 7 * 60 * 60 * 1000;
    const utcDate = new Date(utcDateTimeString);
    const vietnamDate = new Date(utcDate.getTime() + offset);
    const formattedDate = vietnamDate.toLocaleDateString("vi-VN", dateOptions);
    const [date, time] = formattedDate.split(" ");
    const formattedTime = time.replace(":", "-");
    return `${date} - ${formattedTime}`;
};

export default convertToVietnamTime;
