export const isNumberValid = (number: string): boolean => {
    if(!number) return true
    const numberRegExp = new RegExp(/^\d+$/);
    return numberRegExp.test(number);
};
export const isMobileNumberValid = (mobileNumber: string) => {
    if(!mobileNumber) return true;
    const mobileNumberRegExp = new RegExp(/^[0-9]{10}$/);
    return mobileNumberRegExp.test(mobileNumber);
};
export const isLatinCharacterValid = (word: string): boolean => {
    if(!word) return true;
    const latinRegExp = new RegExp(/^[a-zA-Z ]+$/);
    return latinRegExp.test(word);
};
export const isEmailValid = (email: string): boolean => {
    if(!email) return true;
    const emailRegExp = new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    );
    return emailRegExp.test(email);

};
