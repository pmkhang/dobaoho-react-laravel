const recursiveCategory = (categories, parent = "0", str = "", result = []) => {
    const children = categories.filter(
        (category) => category.parent_id === parent
    );
    for (const category of children) {
        const newCategory = {
            id: category.id,
            name: `${str}${category.name}`,
        };
        result.push(newCategory);
        recursiveCategory(categories, category.id, `${str}-- `, result);
    }
    return result;
};

export default recursiveCategory;
