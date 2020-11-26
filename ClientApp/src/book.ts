export class Book {
  author: string;
  publisher: string;
  title: string;
  year: number;

  constructor(options: {
    author?: string;
    publisher?: string;
    title?: string;
    year?: number;
  } = {}) {
    this.author = options.author || '';
    this.publisher = options.publisher || '';
    this.title = options.title || '';
    this.year = options.year || 0;
  }
}
