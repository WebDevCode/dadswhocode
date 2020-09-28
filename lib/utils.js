export const dateFormatter = (date) => {
    const newdate = new Date(date);
    return newdate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
