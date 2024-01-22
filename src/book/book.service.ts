import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}
  findAll(limit: string): Promise<Book[]> {
    let options = {};
    if (limit) options = { take: +limit };
    return this.bookRepository.find(options);
    // return `findAll funciona límite de ${limit} registros`;
  }

  findBook(bookId: string): Promise<Book> {
    return this.bookRepository.findOneBy({id: +bookId});
    //select * from book where id = bookId
  }
  createBook(book: BookDto) {
    console.log(book);
    //insert into table Book values();
    return this.bookRepository.save(book);
  }
  updateBook(bookId: string, book: BookDto) {
   // return `updateBook funciona con el bookId = ${bookId}`;
   return this.bookRepository.update({id: +bookId}, book); 
   //select * from book where id = bookId
  }
  deleteBook(bookId: string) {
    return this.bookRepository.delete({id: +bookId});
    //return `deleteBook funciona con el bookId = ${bookId}`;
    //select * from book where id = bookId
  }
}
