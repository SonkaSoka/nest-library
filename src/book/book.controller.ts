import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll(@Query('limit') limit: string) {
    return this.bookService.findAll(limit);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.bookService.findBook(bookId);
  }

  @Post()
  createBook( book: BookDto) {
    return this.bookService.createBook(book);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string,  book: BookDto) {
    return this.bookService.updateBook(bookId, book);
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.bookService.deleteBook(bookId);
  }
}
