import { OfferType } from '../../components/offer-card/types';
import { SortingOption } from './const';

export function filterOffersByCity(offers: OfferType[], city: string) {
  return offers.filter((offer) => offer.city.name === city);
}

export function getSortingOffers(currentOption: SortingOption, offers: OfferType[]) {
  let sortedOffers = offers;

  switch (currentOption) {
    case SortingOption.PRICE_INC:
      sortedOffers = offers.toSorted((a, b) => a.price - b.price);
      break;
    case SortingOption.PRICE_DEC:
      sortedOffers = offers.toSorted((a, b) => b.price - a.price);
      break;
    case SortingOption.TOP_RATED:
      sortedOffers = offers.toSorted((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = offers;
  }
  return sortedOffers;
}
