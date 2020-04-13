export const SIMPLE_ACTION = 'SIMPLE_ACTION';

export interface SimpleAction {
  type: typeof SIMPLE_ACTION;
  payload: string;
}
