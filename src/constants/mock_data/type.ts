interface mock_user {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
};

interface mock_book {
  book_title: string,
  author: string,
  genre: string,
  taken: boolean
}

interface mock_order {
  code: string,
  book_title: string,
  user: string
}
