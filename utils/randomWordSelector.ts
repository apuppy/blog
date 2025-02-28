export interface sentence {
  words: string
  author: string
}

export type sentences = sentence[]

/**
 * Select a random word from a list of words
 * @param {sentences} sentences
 * @return {*}  {sentence}
 */
export function selectRandomWord(sentences: sentences): sentence {
  const randomIndex = Math.floor(Math.random() * sentences.length)
  return sentences[randomIndex]
}
