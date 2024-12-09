const convertToBDT = (amount, exchangeRate = 103) => {
    if (isNaN(amount) || isNaN(exchangeRate)) {
        throw new Error("Invalid input: amount and exchangeRate should be numbers");
    }
    return Math.round(amount * exchangeRate);
};

export default convertToBDT;