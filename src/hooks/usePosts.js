import {useMemo} from 'react'

export function useSortedPosts(posts, selectedSort) {
    let sortedPosts = useMemo(() => {
        if (!selectedSort) return posts;
        if (selectedSort === 'id') {
          return [...posts].sort((a,b) => a[selectedSort] - b[selectedSort])
        }
        else if (selectedSort === 'title') {
          return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
      }, [selectedSort, posts]);

    return sortedPosts;
}

export function usePosts(posts, filter) {
    let sortedPosts = useSortedPosts(posts, filter.sort);

    let sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.includes(filter.query))
      }, [sortedPosts, filter.query])

    return sortedAndSearchedPosts;
}