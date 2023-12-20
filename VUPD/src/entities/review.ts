export interface Review {
  id: string;
  userId: string;
  courseId: string;
  review: string;
  ratings: {
    [criteria: string]: number;
  };
  upvotes: number;
  downvotes: number;
  upvotedBy: string[];
  downvotedBy: string[];
  createdAt: Date;
}
