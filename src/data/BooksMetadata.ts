export interface BookData {
  description: string,
  numOfImages: number,
}

export const BooksMetadata: Map<string, BookData> = new Map<string, BookData>([
  ['bibele', {
    description: 'TODO1',
    numOfImages: 1,
  }],
  ['dieniska_gaisma', {
    description: 'TODO2',
    numOfImages: 1,
  }],
  ['jauna_deriba', {
    description: 'TODO3',
    numOfImages: 0,
  }],
  ['laipnibas_skola', {
    description: 'TODO4',
    numOfImages: 1,
  }],
  ['tikai_sievietem', {
    description: 'TODO5',
    numOfImages: 1,
  }],
  ['tikai_viriesiem', {
    description: 'TODO6',
    numOfImages: 1,
  }],
])
