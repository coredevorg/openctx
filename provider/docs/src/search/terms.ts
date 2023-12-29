export type Term = string

/**
 * All terms in the text, with normalization and stemming applied.
 */
export function terms(text: string): Term[] {
    return (
        tokens(text.toLowerCase())
            .filter(term => !stopwords.has(term))
            // TODO(sqs): get a real stemmer
            .map(term => term.replace(/(.*)(?:es|ed|ing|s|er)$/, '$1'))
    )
}

function tokens(text: string): string[] {
    return text.split(/[^\w-]+/)
}

export function withoutCodeStopwords(text: string): string {
    return tokens(text)
        .filter(term => !CODE_STOPWORDS.includes(term))
        .join(' ')
}

const CODE_STOPWORDS = [
    'class',
    'type',
    'interface',
    'extends',
    'implements',
    'props',
    'package',
    'function',
    'export',
    'import',
    'const',
    'let',
    'var',
    'for',
    'while',
    'if',
    'else',
    'then',
    'func',
    'declare',
    'return',
    'null',
    'undefined',
    'from',
]

const stopwords = new Set([
    'i',
    'me',
    'my',
    'myself',
    'we',
    'our',
    'ours',
    'ourselves',
    'you',
    'your',
    'yours',
    'yourself',
    'yourselves',
    'he',
    'him',
    'his',
    'himself',
    'she',
    'her',
    'hers',
    'herself',
    'it',
    'its',
    'itself',
    'they',
    'them',
    'their',
    'theirs',
    'themselves',
    'what',
    'which',
    'who',
    'whom',
    'this',
    'that',
    'these',
    'those',
    'am',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'being',
    'have',
    'has',
    'had',
    'having',
    'do',
    'does',
    'did',
    'doing',
    'a',
    'an',
    'the',
    'and',
    'but',
    'if',
    'or',
    'because',
    'as',
    'until',
    'while',
    'of',
    'at',
    'by',
    'for',
    'with',
    'about',
    'against',
    'between',
    'into',
    'through',
    'during',
    'before',
    'after',
    'above',
    'below',
    'to',
    'from',
    'up',
    'down',
    'in',
    'out',
    'on',
    'off',
    'over',
    'under',
    'again',
    'further',
    'then',
    'once',
    'here',
    'there',
    'when',
    'where',
    'why',
    'how',
    'all',
    'any',
    'both',
    'each',
    'few',
    'more',
    'most',
    'other',
    'some',
    'such',
    'no',
    'nor',
    'not',
    'only',
    'own',
    'same',
    'so',
    'than',
    'too',
    'very',
    's',
    't',
    'can',
    'will',
    'just',
    'don',
    'should',
    'now',
    ...CODE_STOPWORDS,
])
