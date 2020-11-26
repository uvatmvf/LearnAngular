export class Book {
  author: string;
  details: string;
  publisher: string;
  title: string;
  year: number;

  constructor(options: {
    author?: string;
    details?: string;
    publisher?: string;
    title?: string;
    year?: number;
  } = {}) {
    this.author = options.author || '';
    this.details = options.details || '';
    this.publisher = options.publisher || '';
    this.title = options.title || '';
    this.year = options.year || 0;
  }
}
