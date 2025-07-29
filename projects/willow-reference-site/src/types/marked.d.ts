declare module 'marked' {
  export interface MarkedOptions {
    [key: string]: any;
  }
  
  export interface MarkedExtension {
    [key: string]: any;
  }
  
  export class Renderer {
    [key: string]: any;
  }
  
  export function marked(src: string, options?: MarkedOptions): string;
  export default marked;
} 