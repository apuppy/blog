import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import words from '@/data/words'
import { selectRandomWord } from 'utils/randomWordSelector'

export default async function Page() {
  const sentence = selectRandomWord(words)
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} sentence={sentence} />
}
