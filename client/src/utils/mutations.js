import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                bookCount
                savedBooks {
                    bookId
                    authors
                    title
                }
            }
        }
    } 
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                bookCount
                savedBooks {
                    bookId
                }
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String!], $description: String!, $title: String!, $bookId: Int!, $image: String!, $link: String!) {
        saveBook(authors: [$authors], description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: Int!) {
        removeBook(bookId: $bookId) {
            _id
            username
            savedBooks {
                bookId
                authors
                title
            }
        }
    }
`;