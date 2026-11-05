import { SectionTag } from './Selectiontag';

export function BookCard({ title, author }) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>by {author}</p>
      <SectionTag label="Favorite" />
    </div>
  );
}