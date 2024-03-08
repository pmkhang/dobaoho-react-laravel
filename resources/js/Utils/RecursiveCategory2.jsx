const RecursiveCategory2 = (categories, parent = 0, result = []) => {
    const children = categories.filter(
        (category) => category.parent_id === parent
    );
    children.forEach(category => {
        const newCategory = {
            id: category.id,
            name: category.name,
            children: RecursiveCategory2(categories, category.id, []),
        };
        result.push(newCategory);
    });
    return result;
};

export default RecursiveCategory2;
