import { RxAvatar } from "react-icons/rx";
import { AiFillTag } from "react-icons/ai";
const posts = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publicationDate: "1925-04-10",
    reviews: [
      "A timeless classic!",
      "Beautifully written and captivating.",
    ],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationDate: "1960-07-11",
    reviews: [
      "An important and thought-provoking novel.",
      "Powerful storytelling that stays with you.",
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    publicationDate: "1949-06-08",
    reviews: [
      "A chilling dystopian masterpiece.",
      "Makes you question the nature of power and control.",
    ],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    publicationDate: "1813-01-28",
    reviews: [
      "A delightful romance with memorable characters.",
      "Jane Austen's wit and social commentary shine through.",
    ],
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    publicationDate: "1951-07-16",
    reviews: [
      "A classic coming-of-age story.",
      "Holden Caulfield's voice is unforgettable.",
    ],
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    genre: "Fiction",
    publicationDate: "1927-05-05",
    reviews: [
      "A groundbreaking modernist novel.",
      "Woolf's exploration of consciousness is mesmerizing.",
    ],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "1937-09-21",
    reviews: [
      "An enchanting adventure for all ages.",
      "Tolkien's world-building is unparalleled.",
    ],
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationDate: "1954-07-29",
    reviews: [
      "Epic storytelling at its finest.",
      "A must-read for fantasy fans.",
    ],
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publicationDate: "1997-06-26",
    reviews: [
      "Magical and immersive.",
      "Rowling's imagination knows no bounds.",
    ],
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    genre: "Fantasy",
    publicationDate: "1950-10-16",
    reviews: [
      "A beloved series with unforgettable adventures.",
      "Lewis's Christian allegory adds depth to the stories.",
    ],
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Fiction",
    publicationDate: "1851-10-18",
    reviews: [
      "A literary masterpiece filled with symbolism.",
      "Melville's prose captures the essence of the sea.",
    ],
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Fiction",
    publicationDate: "1847-10-16",
    reviews: [
      "A compelling story of love and resilience.",
      "Brontë's exploration of societal constraints is powerful.",
    ],
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    publicationDate: "1988-01-01",
    reviews: [
      "A philosophical and inspirational journey.",
      "Coelho's storytelling has a profound impact on readers.",
    ],
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Poetry",
    publicationDate: "8th century BCE",
    reviews: [
      "An epic poem that has stood the test of time.",
      "Homer's characters and adventures are legendary.",
    ],
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Fiction",
    publicationDate: "1932-05-17",
    reviews: [
      "A dystopian vision that remains relevant today.",
      "Huxley's critique of society is thought-provoking.",
    ],
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Fiction",
    publicationDate: "1890-07-01",
    reviews: [
      "A haunting and morally ambiguous tale.",
      "Wilde's wit and aestheticism shine through.",
    ],
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    publicationDate: "1892-10-14",
    reviews: [
      "Classic detective stories that keep you guessing.",
      "Sherlock Holmes is an iconic literary character.",
    ],
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Fiction",
    publicationDate: "1818-01-01",
    reviews: [
      "A profound exploration of humanity and creation.",
      "Shelley's novel continues to resonate with readers.",
    ],
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    genre: "Poetry",
    publicationDate: "1320",
    reviews: [
      "A poetic journey through Hell, Purgatory, and Heaven.",
      "Dante's masterpiece is a literary triumph.",
    ],
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Young Adult",
    publicationDate: "2008-09-14",
    reviews: [
      "A thrilling and addictive dystopian series.",
      "Collins creates a strong and resilient heroine.",
    ],
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Fiction",
    publicationDate: "2003-05-29",
    reviews: [
      "A moving and powerful story of friendship and redemption.",
      "Hosseini's writing evokes deep emotions.",
    ],
  },
];

const Feature = () => {
  return (
    <div>
      <section className="pb-10">
        <div className="mx-auto px-4 md:px-8">
          <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-bold sm:text-4xl">
              Latest Books
            </h1>
            <p className="text-gray-600 text-lg">
              Books that are loved by the community. Updated
              every hour.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((items, key) => (
              <li
                className="w-full mx-auto group sm:max-w-sm shadow-lg p-5 rounded cursor-pointer"
                key={key}
              >
                <a>
                  <div className="mt-3 space-y-2">
                    <span className="block text-indigo-600 text-base font-semibold">
                      {items.publicationDate}
                    </span>
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-[#f62343] font-semibold h-10">
                      {items.title?.slice(0, 30)} ...
                    </h3>
                    <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                      <div className="text-base flex items-center">
                        <RxAvatar />
                        <span className="ml-1 font-semibold">
                          Author :
                        </span>
                      </div>
                      <p className="text-base font-semibold text-gray-500 ml-2">
                        {items.author}
                      </p>
                    </div>
                    <div className="text-gray-600 text-sm duration-150 flex items-center group-hover:text-gray-800">
                      <div className="text-base flex items-center">
                        <AiFillTag />
                      </div>
                      <p className="text-base font-semibold text-gray-500 ml-2">
                        {items.genre}
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Feature;
