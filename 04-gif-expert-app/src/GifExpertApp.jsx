import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertapp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {/* Listado de gif */}
            {
                categories.map(category =>
                (
                    <GifGrid key={category}
                        category={category} />
                ))
            }
            {/* Gif item */}
        </>
    );
}