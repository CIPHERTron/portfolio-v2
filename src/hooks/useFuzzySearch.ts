import { useMemo } from 'react';
import Fuse from 'fuse.js';
import type { BlogPostType } from "models/blog";

const useFuzzySearch = (blogs: Array<BlogPostType>, query: string) => {
    const fuse = useMemo(() => {
        const options = {
            includeScore: true,
            threshold: 0.4,
            keys: ['title']
        };
        return new Fuse(blogs, options);
    }, [blogs]);

    const results = useMemo(() => {
        if (!query) return blogs;
        const searchResult = fuse.search(query);
        return searchResult.map(({ item }) => item);
    }, [query, fuse, blogs]);

    return results;
};

export default useFuzzySearch;
