declare module 'react-rotating-text' {
  import { FC } from 'react';

  interface ReactRotatingTextProps {
    items: string[];
    color?: string;
    pause?: number;
    emptyPause?: number;
    typingInterval?: number;
    deletingInterval?: number;
    cursor?: boolean;
  }

  const ReactRotatingText: FC<ReactRotatingTextProps>;

  export default ReactRotatingText;
}