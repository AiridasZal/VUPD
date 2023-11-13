export default interface Program {
  name: string;
  slug: string;
  count: number;
  results: {
    name: string;
    slug: string;
  }[];
}
