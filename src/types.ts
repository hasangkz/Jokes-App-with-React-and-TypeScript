export interface Flags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface JokeType {
  error: boolean;
  category: string;
  type: string;
  joke: string;
  flags: Flags;
  id: number;
  safe: boolean;
  lang: string;
}
