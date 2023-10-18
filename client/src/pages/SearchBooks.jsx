import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';
import { SAVE_BOOK } from '../utils/mutations';
import { SEARCH_BOOKS, GET_ME } from '../utils/queries'; // Corrected the import
import Auth from '../utils/auth';


const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');
  const [savedBookIds, setSavedBookIds] = useState([]); // Added this line to manage savedBookIds state

  const { loading, data } = useQuery(SEARCH_BOOKS, {
    variables: { searchTerm: submittedSearch },
    skip: !submittedSearch
  });

  const { data: userData } = useQuery(GET_ME); // Added this line to get user's saved books

  useEffect(() => {
    if (userData) {
      // Update savedBookIds state with IDs of user's saved books
      setSavedBookIds(userData.me.savedBooks.map((book) => book.bookId));
    }
  }, [userData]);

  const searchedBooks = data?.searchBooks || [];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedSearch(searchInput);
  };

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
  
    if (bookToSave) {
      try {
        await saveBook({
          variables: {
            authors: bookToSave.authors,
            description: bookToSave.description,
            title: bookToSave.title,
            bookId: bookToSave.bookId,
            image: bookToSave.image,
            link: bookToSave.link   // add or remove this line based on whether the 'link' field is required or not
          },
          update: (cache, { data: { saveBook } }) => {
            // Update cache or refetch queries if needed
          },
        });
  
        setSavedBookIds([...savedBookIds, bookId]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Book not found");
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a book'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : 'Search for a book to begin'}
        </h2>
        <Row>
          {searchedBooks.map((book) => {
            return (
              <Col md="4" key={book.bookId}>
                <Card border='dark'>
                  {book.image ? (
                    <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <p className='small'>Authors: {book.authors}</p>
                    <Card.Text>{book.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBook(book.bookId)}>
                        {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
                          ? 'This book has already been saved!'
                          : 'Save this Book!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchBooks;
