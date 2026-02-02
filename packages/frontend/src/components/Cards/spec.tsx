import * as CardComponents from './index';

import { default as CardList } from './CardList';
import { default as CardMeaning } from './CardMeaning'; 
import { default as DeleteCard } from './DeleteCard';
import { default as EditCard } from './EditCard';   
import { default as CreateCard } from './CreateCard';  

describe('Cards component exports', () => {
  it('should export CardList component', () => {
    expect(CardComponents.CardList).toBe(CardList);
  });
  it('should export CardMeaning component', () => {
    expect(CardComponents.CardMeaning).toBe(CardMeaning);
  });
  it('should export DeleteCard component', () => {
    expect(CardComponents.DeleteCard).toBe(DeleteCard);
  });
  it('should export EditCard component', () => {
    expect(CardComponents.EditCard).toBe(EditCard);
  });
  it('should export CreateCard component', () => {
    expect(CardComponents.CreateCard).toBe(CreateCard);
  });
});