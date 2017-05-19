function validate(field, value) {
    switch (field) {
        case 'name':
            if (!value) {
                return `Can't be blank`;
            }
            break;
        case 'price':
            if (value <= 0) {
                return `Must be greater than 0`
            }
            break;
    }

    return null;
}
