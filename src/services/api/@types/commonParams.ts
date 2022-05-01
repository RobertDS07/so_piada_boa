export interface WithSortParams<keysToSort> {
  _sort?: keysToSort;
  _order?: "asc" | "desc";
}

export interface SearchInAllProps {
  q?: string;
}
