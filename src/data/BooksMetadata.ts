export interface BookData {
  description: string
  numOfImages: number
}

export const BooksMetadata: Map<string, BookData> = new Map<string, BookData>([
  [
    'bibele',
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
        ' eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
        ' mollit anim id est laborum.',
      numOfImages: 1,
    },
  ],
  [
    'dieniska_gaisma',
    {
      description: 'TODO2',
      numOfImages: 1,
    },
  ],
  [
    'jauna_deriba',
    {
      description: 'TODO3',
      numOfImages: 0,
    },
  ],
  [
    'laipnibas_skola',
    {
      description: 'TODO4',
      numOfImages: 1,
    },
  ],
  [
    'tikai_sievietem',
    {
      description: 'TODO5',
      numOfImages: 1,
    },
  ],
  [
    'tikai_viriesiem',
    {
      description: 'TODO6',
      numOfImages: 1,
    },
  ],
])
